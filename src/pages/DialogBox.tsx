import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { StatusCombobox } from "./StatusCombo";
import { MethodCombobox } from "./MethodCombo";
import { DatePicker } from "./DatePicker";
import { useEffect, useState } from "react";

export function DialogBox() {
  const [invoice, setInvoice] = useState<string>("");
  const [displayMessage, setDisplayMessage] = useState<string>("");
  const [dataFromStatusChild, setDataFromStatusChild] =
    useState<string>("Status");
  const [methodData, setMethodData] = useState<string>("Status");

  function datafromStatus(data: string) {
    setDataFromStatusChild(data);
  }

  function dataFromMethod(data: string) {
    setMethodData(data);
  }

  function dataToMethod() {
    if (dataFromStatusChild === "Unpaid") {
      setMethodData("-");
      return true;
    }
  }

  function handleChange(e: React.FormEvent<HTMLInputElement>) {
    setInvoice(e.currentTarget.value);
  }
  function handleSubmit() {
    console.log(displayMessage);
    console.log(dataFromStatusChild);
    console.log(methodData);
  }

  useEffect(() => {
    const timeOut = setTimeout(() => setDisplayMessage(invoice), 500);
    return () => clearTimeout(timeOut);
  }, [invoice]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add Expenses</Button>
      </DialogTrigger>
      <DialogContent
        className="sm:max-w-[425px]"
        aria-describedby="Add Expenses"
      >
        <DialogHeader>
          <DialogTitle>Add Expenses</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Invoice</Label>
            <Input
              id="name"
              className="col-span-3"
              onChange={handleChange}
              autoComplete="off"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Status</Label>
            <StatusCombobox sendDataToParent={datafromStatus} />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Method</Label>
            <MethodCombobox
              sendDataToParent={dataFromMethod}
              toChild={dataToMethod}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Amount</Label>
            <Input
              id="amount"
              type="number"
              defaultValue="@peduarte"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Date</Label>
            <DatePicker />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleSubmit}>
            Confirm
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
