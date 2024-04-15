"use client";
import EditPatientInfoDrawer from "@/components/editPatientInfoDrawer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formulaNameList } from "@/data/drugData";
import { usePatientInfoStore } from "@/stores/use-drug-store";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const patientInfoStore = usePatientInfoStore((state) => state.patientInfo);
  return (
    <>
      <nav className="px-4 h-16 items-center flex justify-center sticky top-0 bg-background/90 backdrop-blur-sm border-b">
        <h1 className="text-xl font-bold">คำนวณขนาดยา</h1>
      </nav>
      <div className="flex flex-col gap-4 p-4">
        <Card>
          <CardHeader className="flex-row justify-between space-y-0">
            <CardTitle className="text-xl font-bold">ข้อมูลผู้ป่วย</CardTitle>
            <EditPatientInfoDrawer />
          </CardHeader>
          <CardContent className="space-y-1">
            <div className="flex justify-between">
              <p className="text-muted-foreground">น้ำหนัก</p>
              {patientInfoStore.weight > 0 ? (
                <p className="font-bold">{patientInfoStore.weight} kg</p>
              ) : (
                <p className="font-bold">ไม่มีข้อมูล</p>
              )}
            </div>
            <div className="flex justify-between">
              <p className="text-muted-foreground">ส่วนสูง</p>
              {patientInfoStore.height > 0 ? (
                <p className="font-bold">{patientInfoStore.height} cm</p>
              ) : (
                <p className="font-bold">ไม่มีข้อมูล</p>
              )}
            </div>
            <div className="flex justify-between">
              <p className="text-muted-foreground">BSA</p>
              {patientInfoStore.bsa > 0 ? (
                <p className="font-bold">
                  {patientInfoStore.bsa.toFixed(2)} m<sup>2</sup>
                </p>
              ) : (
                <p className="font-bold">ไม่มีข้อมูล</p>
              )}
            </div>
          </CardContent>
        </Card>
        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-bold">สูตรยาทั้งหมด</h3>
          <p className="text-sm text-muted-foreground">
            เลือกสูตรยาที่คุณต้องการคำนวณ
          </p>
        </div>
        {formulaNameList.map((formula) => (
          <Link
            key={formula}
            href={`
        /${formula}
        `}
          >
            <Card key={formula}>
              <CardHeader className="flex-row justify-between items-center space-y-0">
                <CardTitle>{formula}</CardTitle>
                <ChevronRight className="text-muted-foreground" />
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </>
  );
}
