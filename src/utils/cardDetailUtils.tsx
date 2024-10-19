import client from "@/lib/client";

export async function cardDetailUtil() {
  const hash = {};
  const result = await client.collection("expenses").getFullList({
    fields: "payment_invoices, invoice_status, payment_amount",
    sort: "-payment_amount",
  });
  for (let i: number = 0; i < 4; i++) {
    hash[i] = result[i];
  }
  return hash;
}
