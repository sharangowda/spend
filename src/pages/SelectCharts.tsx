import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectCharts() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a Chart" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Charts</SelectLabel>
          <SelectItem value="pie">Pie Chart</SelectItem>
          <SelectItem value="bar">Bar Chart</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
