import client from "@/lib/client";

export async function getTotalSum() {
  const hash = new Object();
  const result = await client.collection("expenses").getFullList({
    fields: "payment_invoices, payment_amount, invoice_status",
  });

  return result;
}
