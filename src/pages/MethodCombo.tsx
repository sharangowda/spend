"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function MethodCombobox() {
  const [selected, setSelected] = React.useState<
    "Cash" | "CC/Debit" | "UPI" | "Status"
  >("Status");
  function handleSelect(value: "Cash" | "CC/Debit" | "UPI") {
    setSelected((prev) => (prev === value ? "Status" : value));
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{selected}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuCheckboxItem
          checked={selected === "Cash"}
          onCheckedChange={() => handleSelect("Cash")}
        >
          Cash
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={selected === "CC/Debit"}
          onCheckedChange={() => handleSelect("CC/Debit")}
        >
          Credit/Debit
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={selected === "UPI"}
          onCheckedChange={() => handleSelect("UPI")}
        >
          UPI
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
