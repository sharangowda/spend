import { ChartConfig } from "@/components/ui/chart";
import client from "@/lib/client";

function rand(min: number, max: number) {
  return min + Math.random() * (max - min);
}

function get_random_color() {
  const h = parseInt(rand(1, 360));
  const s = parseInt(rand(0, 100));
  const l = parseInt(rand(0, 100));
  return "hsl(" + h + "," + s + "%," + l + "%)";
}

export async function getAllInvoices() {
  const data = {};
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
  return chartData;
}
