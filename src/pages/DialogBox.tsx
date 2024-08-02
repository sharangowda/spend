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

export function DialogBox() {
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
            <Label htmlFor="name" className="text-right">
              Invoice
            </Label>
            <Input id="name" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Status
            </Label>
            {/* <Input id="username" defaultValue="Paid" className="col-span-3" /> */}
            <StatusCombobox />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Method
            </Label>
            <MethodCombobox />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Amount
            </Label>
            <Input
              id="amount"
              type="number"
              defaultValue="@peduarte"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Date
            </Label>
            <DatePicker />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
