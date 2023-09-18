"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { formulaList, drugList } from "@/data/drugData";
import { drugListType, useDrugStore } from "@/stores/use-drug-store";

const calculateMl = (drug: string, drugListStore: drugListType) => {
  const drugData = drugList.find((elem) => elem.refName == drug);
  return drugListStore[drug] / (drugData?.divider ?? 1);
};

export default function Home() {
  const drugListStore = useDrugStore((state) => state.drugList);
  const setDrug = useDrugStore((state) => state.setDrug);

  return (
    <Tabs defaultValue={formulaList.at(0)?.name} className="w-full pl-4 pr-4">
      <TabsList className="grid grid-cols-6 overflow-auto">
        {formulaList.map((formula) => (
          <TabsTrigger key={formula.name} value={formula.name}>
            {formula.name}
          </TabsTrigger>
        ))}
      </TabsList>
      {formulaList.map((formula) => (
        <TabsContent
          key={formula.name}
          value={formula.name}
          className="flex flex-col"
        >
          <div className="mt-2 flex flex-col gap-2">
            <div className="text-4xl font-semibold mt-2 mb-2">
              {formula.name}
            </div>
            {formula.drugs.map((drug) => (
              <Card key={drug}>
                <CardHeader>
                  <CardTitle>
                    {drugList.find((elem) => elem.refName == drug)?.displayName}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex gap-4">
                  <div className="space-y-1 flex-1">
                    <Label htmlFor={`${formula}-${drug}`}>ขนาดยา (mg)</Label>
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
                  <div className="space-y-1 flex-1">
                    <Label>ขนาดยา (ml)</Label>
                    <div className="text-3xl font-semibold">
                      {calculateMl(drug, drugListStore).toFixed(2)}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
