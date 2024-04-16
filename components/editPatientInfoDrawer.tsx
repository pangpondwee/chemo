"use client";

import { Edit2 } from "lucide-react";
import { Button } from "./ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useWatch } from "react-hook-form";
import { usePatientInfoStore } from "@/stores/use-drug-store";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { calculateBsa } from "@/lib/utils";
import { useState } from "react";

export default function EditPatientInfoDrawer() {
  const patientInfoStore = usePatientInfoStore((state) => state.patientInfo);
  const setPatientInfo = usePatientInfoStore((state) => state.setPatientInfo);
  const [open, setOpen] = useState(false);

  const formSchema = z.object({
    weight: z.number().positive().int(),
    height: z.number().positive().int(),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      weight: patientInfoStore.weight,
      height: patientInfoStore.height,
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    const calculatedBsa = Number(calculateBsa(values.weight, values.height));
    setPatientInfo({ bsa: calculatedBsa, ...values });
    setOpen(false);
  }
  const weight = useWatch({ control: form.control, name: "weight" });
  const height = useWatch({ control: form.control, name: "height" });

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="link" size="link" className="gap-2">
          <Edit2 className="h-4 w-4" />
          {patientInfoStore.weight > 0 && patientInfoStore.height > 0
            ? "แก้ไข"
            : "กรอกข้อมูล"}
        </Button>
      </DrawerTrigger>
      <DrawerContent className="h-[96%]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <DrawerHeader>
              <div className="flex justify-between">
                <DrawerClose>
                  <Button variant={"link"} size={"link"}>
                    ยกเลิก
                  </Button>
                </DrawerClose>
                <DrawerTitle className="text-base">
                  {patientInfoStore.weight > 0 && patientInfoStore.height > 0
                    ? "แก้ไขข้อมูลผู้ป่วย"
                    : "กรอกข้อมูลผู้ป่วย"}
                </DrawerTitle>
                <Button
                  type="submit"
                  variant={"link"}
                  size={"link"}
                  className="font-bold"
                >
                  บันทึก
                </Button>
              </div>
            </DrawerHeader>
            <div className="flex flex-col gap-4 p-4">
              <FormField
                control={form.control}
                name="weight"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <FormLabel htmlFor={"BW"}>น้ำหนัก (kg)</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        inputMode="numeric"
                        id="BW"
                        {...field}
                        value={field.value === 0 ? "" : field.value}
                        onChange={(e) => {
                          field.onChange(parseInt(e.target.value));
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="height"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <FormLabel htmlFor={"HT"}>ส่วนสูง (cm)</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        inputMode="numeric"
                        id="HT"
                        {...field}
                        value={field.value === 0 ? "" : field.value}
                        onChange={(e) => {
                          field.onChange(parseInt(e.target.value));
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Separator className="mt-2 mb-1" />
              <div className="flex justify-between">
                <p className="text-muted-foreground">BSA ที่คำนวณได้</p>
                <p className="font-bold">
                  {isNaN(weight) || isNaN(height)
                    ? (0).toFixed(2)
                    : calculateBsa(weight, height)}{" "}
                  m<sup>2</sup>
                </p>
              </div>
            </div>
          </form>
        </Form>
      </DrawerContent>
    </Drawer>
  );
}
