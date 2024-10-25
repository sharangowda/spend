import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type PropTypes = {
  chart: (arg0: string) => void;
};

export function SelectCharts({ chart }: PropTypes) {
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
          <SelectItem value="bar">Bar Chart</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
