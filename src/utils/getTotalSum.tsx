import client from "@/lib/client";

export async function getTotalSum() {
  const x: number[] = [];
  const result = await client.collection("expenses").getFullList({
    fields: "payment_invoices, payment_amount, invoice_status",
  });
  for (let i: number = 0; i <= result.length; i++) {
    if (result[i] === undefined) {
      continue;
    }
    if (result[i].invoice_status === "Paid") {
      x.push(result[i].payment_amount);
    }
  }

  return x.reduce((a, b) => a + b, 0);
}
