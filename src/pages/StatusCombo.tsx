"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function StatusCombobox({ sendDataToParent }) {
  const [selected, setSelected] = React.useState<"Paid" | "Unpaid" | "Status">(
    "Status"
  );
  const [sendData, setSendData] = React.useState<string>("");

  function handleSelect(value: "Paid" | "Unpaid") {
    setSelected((prev) => (prev === value ? "Status" : value));
    console.log(selected);
    sendDataToParent(selected);
  }

  // function handleClick() {
  //   sendDataToParent(sendData)
  // }

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
