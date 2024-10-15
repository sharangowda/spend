"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function PaymentStatus({
  sendDataToParent,
}: {
  sendDataToParent: (value: string) => void;
}) {
  const [selected, setSelected] = React.useState<"Paid" | "Unpaid" | "Status">(
    "Status"
  );

  function handleSelect(value: "Paid" | "Unpaid") {
    const newValue = selected === value ? "Status" : value;
    setSelected(newValue);
    sendDataToParent(newValue);
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{selected}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuCheckboxItem
          checked={selected === "Paid"}
          onCheckedChange={() => handleSelect("Paid")}
        >
          Paid
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={selected === "Unpaid"}
          onCheckedChange={() => handleSelect("Unpaid")}
        >
          Unpaid
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
