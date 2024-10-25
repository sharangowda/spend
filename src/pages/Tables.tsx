import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { RecordModel } from "pocketbase";

type PropTypes = {
  data: RecordModel[];
  amount: number;
};

export function Tables({ data, amount }: PropTypes) {
  return (
    <div className="container mx-auto p-4">
      <div
        className="border rounded-lg overflow-auto"
        style={{ maxWidth: "100%", height: "500px" }}
      >
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((invoice) => (
              <TableRow key={invoice.id} className="overflow-y-auto">
                <TableCell className="font-medium">
                  {invoice.payment_invoices}
                </TableCell>
                <TableCell>{invoice.invoice_status}</TableCell>
                <TableCell>{invoice.invoice_method}</TableCell>
                <TableCell className="text-right">
                  {invoice.payment_amount}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total amount paid</TableCell>
              <TableCell className="text-right">{amount}</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  );
}
