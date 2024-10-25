import client from "@/lib/client";

interface DataType {
  [key: string]: number;
}

export async function getAllInvoices() {
  const data: DataType = {};
  const chartData = [];
  const res = await client
    .collection("expenses")
    .getFullList({ fields: "payment_invoices, payment_amount" });
  for (let i: number = 0; i <= res.length; i++) {
    if (res[i] === undefined) {
      continue;
    }
    if (res[i].payment_invoices in data) {
      data[res[i].payment_invoices] =
        data[res[i].payment_invoices] + res[i].payment_amount;
    } else {
      data[res[i].payment_invoices] = res[i].payment_amount;
    }
  }
  for (const key in data) {
    chartData.push({
      invoice: key,
      amount: data[key],
    });
  }
  console.log(data);
  return chartData;
}
