import client from "@/lib/client";

export function cardDetailUtil() {
  const hash = {};
  const result = client.collection("expenses").getFullList({
    fields: "payment_invoices, invoice_status, payment_amount",
    sort: "-payment_amount",
  });
  return result;
}
