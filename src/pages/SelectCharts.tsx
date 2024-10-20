import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

export function SelectCharts({ chart }) {
  const [selected, setSelected] = useState<string>("");
  function handleChange(value: string) {
    chart(value);
  }
  return (
    <Select onValueChange={handleChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a Chart" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Charts</SelectLabel>
          <SelectItem value="pie-p/u">Pie Chart-Paid Unpaid</SelectItem>
          <SelectItem value="pie-AI">Pie Chart-All Invoices</SelectItem>
          <SelectItem value="bar">Bar Chart</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
