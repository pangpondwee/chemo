"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  drugList,
  drugNameType,
  formulaList,
  formulaNameType,
} from "@/data/drugData";
import { cn } from "@/lib/utils";
import {
  drugListType,
  useDrugStore,
  usePatientInfoStore,
} from "@/stores/use-drug-store";
import { ChevronLeft, RotateCcw } from "lucide-react";
import Link from "next/link";

const backgroundColors = {
  folfox4: "from-[#CEDBFD] to-[#CCFFF3]",
  folfiri: "from-[#CEDBFD] to-[#CCFFF3]",
  capox: "from-[#CEDBFD] to-[#CCFFF3]",
  fac: "from-[#F5CCFF] to-[#FFE3CC]",
  ac: "from-[#F5CCFF] to-[#FFE3CC]",
  paclitaxel: "from-[#F5CCFF] to-[#FFE3CC]",
  mtx: "from-[#D0FFCC] to-[#D9F1E6]",
  docetaxel: "from-[#FFCA99] to-[#F7D9D4]",
  gemcitabinePlusCisplatin: "from-[#FFCA99] to-[#F7D9D4]",
};

const calculateMl = (drug: drugNameType, drugListStore: drugListType) => {
  const drugData = drugList?.[drug];
  return drugListStore[drug] / (drugData?.divider ?? 1);
};

type FormulaPageProps = {
  params: {
    formula: formulaNameType;
  };
};

export default function FormulaPage({ params }: FormulaPageProps) {
  const drugListStore = useDrugStore((state) => state.drugList);
  const setDrug = useDrugStore((state) => state.setDrug);
  const resetDrug = useDrugStore((state) => state.resetDrug);
  const formulaName = params.formula;
  const formula = formulaList[params.formula]?.drugs;
  const patientInfoStore = usePatientInfoStore((state) => state.patientInfo);

  return (
    <div
      className={cn(
        "bg-gradient-to-b min-h-[100dvh]",
        backgroundColors?.[formulaName]
      )}
    >
      <nav className="flex justify-between sticky top-0 h-16 px-4 items-center bg-background/90 backdrop-blur-sm border-b-[0.5px] border-border/20 z-50">
        <Button variant={"link"} size={"link"} asChild>
          <Link href="/">
            <ChevronLeft />
            กลับ
          </Link>
        </Button>
        <div className="text-xl font-semibold">
          {formulaList?.[formulaName as formulaNameType]?.displayName}
        </div>
        <Button
          variant={"link"}
          size={"link"}
          onClick={resetDrug}
          className="gap-2"
        >
          <RotateCcw className="h-4 w-4" />
          รีเซ็ต
        </Button>
      </nav>
      <div className="flex flex-col gap-4 p-4">
        {formula &&
          Object.keys(formula).map((drug) => (
            <Card key={drug}>
              <CardHeader>
                <CardTitle>
                  {drugList?.[drug as drugNameType]?.displayName}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <div className="flex gap-4 flex-1">
                  <div className="space-y-1 w-full">
                    <div className="font-medium">
                      Dosage Regimen (mg/m<sup>2</sup>)
                    </div>
                    <div className="text-3xl font-semibold">
                      {formula?.[drug as drugNameType]?.doseRegimen.toFixed(2)}
                    </div>
                  </div>
                  <div className="space-y-1 w-full">
                    <div className="font-medium">Calculated Dose (mg)</div>
                    <div className="text-3xl font-semibold">
                      {formula && drug in formula && patientInfoStore.bsa
                        ? (
                            Number(
                              formula?.[drug as drugNameType]?.doseRegimen
                            ) * patientInfoStore.bsa
                          ).toFixed(2)
                        : "ไม่มีข้อมูล"}
                    </div>
                  </div>
                </div>
                <Separator />
                <div className="flex gap-4 flex-1">
                  <div className="space-y-1 w-full">
                    <Label htmlFor={`${formula}-${drug}`}>
                      Ordered Dose (mg)
                    </Label>
                    <Input
                      id={`${formula}-${drug}`}
                      inputMode="numeric"
                      value={
                        drugListStore[drug] === 0 ? "" : drugListStore[drug]
                      }
                      onChange={(event) => {
                        setDrug({
                          ...drugListStore,
                          [drug]: Number(event.target.value),
                        });
                      }}
                    />
                  </div>
                  <div className="space-y-1 w-full">
                    <div className="font-medium">Volume (ml)</div>
                    <div className="text-3xl font-semibold">
                      {calculateMl(drug as drugNameType, drugListStore).toFixed(
                        2
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
      </div>
    </div>
  );
}
