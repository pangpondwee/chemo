"use client";
import EditPatientInfoDrawer from "@/components/editPatientInfoDrawer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  formulaGroupList,
  formulaGroupNameList,
  formulaGroupNameType,
  formulaList,
  formulaNameList,
  formulaNameType,
} from "@/data/drugData";
import { cn } from "@/lib/utils";
import { usePatientInfoStore } from "@/stores/use-drug-store";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const labelColors = {
  colorectalCancer: "text-[#093EC4]",
  breastCancer: "text-[#9C00C3]",
  ectopicPregnancy: "text-[#0C9200]",
  prostateCancer: "text-[#FF902A]",
  hodgkinLymphoma: "text-[#db2777]",
};

export default function Home() {
  const patientInfoStore = usePatientInfoStore((state) => state.patientInfo);
  return (
    <div className="bg-gradient-to-b from-[#D3F8F5] to-[#FEF3CD]">
      <nav className="px-4 h-16 items-center flex justify-center sticky top-0 bg-background/80 backdrop-blur-sm border-b-[0.5px] border-border/20 z-50">
        <h1 className="text-xl font-semibold">คำนวณยาเคมีบำบัด</h1>
      </nav>
      <div className="flex flex-col gap-4 p-4">
        <Card>
          <CardHeader className="flex-row justify-between space-y-0">
            <CardTitle className="text-xl">ข้อมูลผู้ป่วย</CardTitle>
            <EditPatientInfoDrawer />
          </CardHeader>
          <CardContent className="space-y-1">
            <div className="flex justify-between">
              <p className="text-muted-foreground/60">น้ำหนัก</p>
              {patientInfoStore.weight > 0 ? (
                <p className="font-semibold">{patientInfoStore.weight} kg</p>
              ) : (
                <p className="font-semibold">ไม่มีข้อมูล</p>
              )}
            </div>
            <div className="flex justify-between">
              <p className="text-muted-foreground/60">ส่วนสูง</p>
              {patientInfoStore.height > 0 ? (
                <p className="font-semibold">{patientInfoStore.height} cm</p>
              ) : (
                <p className="font-semibold">ไม่มีข้อมูล</p>
              )}
            </div>
            <div className="flex justify-between">
              <p className="text-muted-foreground/60">BSA</p>
              {patientInfoStore.bsa > 0 ? (
                <p className="font-semibold">
                  {patientInfoStore.bsa.toFixed(2)} m<sup>2</sup>
                </p>
              ) : (
                <p className="font-semibold">ไม่มีข้อมูล</p>
              )}
            </div>
          </CardContent>
        </Card>
        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-semibold">สูตรยาทั้งหมด</h3>
        </div>
        {formulaGroupNameList.map((formulaGroup) => (
          <div key={formulaGroup} className="flex flex-col gap-1">
            <h4 className="text-sm uppercase text-muted-foreground/60 ml-4">
              {
                formulaGroupList?.[formulaGroup as formulaGroupNameType]
                  ?.displayName
              }
            </h4>
            <Card
              key={
                formulaGroupList?.[formulaGroup as formulaGroupNameType]
                  ?.displayName
              }
            >
              {formulaGroupList?.[
                formulaGroup as formulaGroupNameType
              ]?.formulas.map((formula, index) => (
                <Link
                  key={formula}
                  href={`
        /${formula}
        `}
                >
                  <CardHeader
                    className={cn(
                      "flex-row justify-between items-center space-y-0",
                      (formulaGroupList?.[formulaGroup as formulaGroupNameType]
                        ?.formulas.length ?? 0) -
                        1 !==
                        index && "border-b-[0.5px] border-border/20"
                    )}
                  >
                    <CardTitle className={labelColors?.[formulaGroup]}>
                      {formulaList?.[formula as formulaNameType]?.displayName}
                    </CardTitle>
                    <ChevronRight className="text-muted-foreground/60" />
                  </CardHeader>
                </Link>
              ))}
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
