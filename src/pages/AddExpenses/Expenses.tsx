/* eslint-disable @typescript-eslint/no-unused-vars */
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
import { PaymentStatus } from "./PaymentStatus";
import { PaymentMethod } from "./PaymentMethod";
import { DatePicker } from "./DatePicker";
import { useEffect, useState } from "react";
import client from "@/lib/client";

export function AddExpenses() {
  const [invoice, setInvoice] = useState<string>("");
  const [_displayMessage, setDisplayMessage] = useState<string>("");
  const [_displayAmount, setDisplayAmount] = useState<number>(0);
  const [dataFromStatusChild, setDataFromStatusChild] =
    useState<string>("Status");
  const [methodData, setMethodData] = useState<string>("Status");
  const [amount, setAmount] = useState<number>(0);
  const [date, setDate] = useState<Date | undefined>(new Date());

  function datafromStatus(data: string) {
    setDataFromStatusChild(data);
  }

  function dataFromMethod(data: string) {
    setMethodData(data);
  }

  function dataFromAmount(event: React.FormEvent<HTMLInputElement>) {
    setAmount(parseInt(event.currentTarget.value));
  }

  function dataFromDate(data: Date | undefined) {
    setDate(data);
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
  const pushToDatabase = async () => {
    if (
      record.invoice_method === "Status" ||
      record.invoice_status === "Status" ||
      record.payment_amount === 0 ||
      record.payment_date === null ||
      record.payment_invoices === ""
    ) {
      console.log("One or many fields are empty.");
    } else {
      await client.collection("expenses").create(record);
      window.location.reload();
    }
  };

  type Record = {
    payment_invoices: string;
    invoice_status: string;
    invoice_method: string;
    payment_amount: number;
    payment_date: Date | undefined;
  };

  const record: Record = {
    payment_invoices: invoice.trim().charAt(0).toUpperCase() + invoice.slice(1),
    invoice_status: dataFromStatusChild,
    invoice_method: methodData,
    payment_amount: amount,
    payment_date: date,
  };

  useEffect(() => {
    const timeOutinvoice = setTimeout(() => setDisplayMessage(invoice), 500);
    const timeOutamount = setTimeout(() => setDisplayAmount(amount), 500);

    return () => {
      clearTimeout(timeOutinvoice);
      clearTimeout(timeOutamount);
    };
  }, [invoice, amount]);

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
            <PaymentStatus sendDataToParent={datafromStatus} />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Method</Label>
            <PaymentMethod
              sendDataToParent={dataFromMethod}
              toChild={dataToMethod}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Amount</Label>
            <Input
              id="amount"
              type="number"
              onChange={dataFromAmount}
              defaultValue="@peduarte"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Date</Label>
            <DatePicker pickDate={dataFromDate} />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={pushToDatabase}>
            Confirm
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
