import client from "@/lib/client";
import { RecordModel } from "pocketbase";

interface HashType {
  [key: number]: RecordModel;
}
export async function cardDetailUtil() {
  const hash: HashType = {};
  const result = await client.collection("expenses").getFullList({
    fields: "payment_invoices, invoice_status, payment_amount",
    sort: "-payment_amount",
  });
  for (let i: number = 0; i < 4; i++) {
    hash[i] = result[i];
  }
  return hash;
}
