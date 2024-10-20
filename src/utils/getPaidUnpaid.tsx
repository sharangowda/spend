import client from "@/lib/client";

export async function getPaid() {
  const hash = {
    paid: 0,
    unpaid: 0,
  };
  const response = await client
    .collection("expenses")
    .getFullList({ fields: "invoice_status" });
  for (let i: number = 0; i <= response.length; i++) {
    if (response[i] === undefined) {
      continue;
    }
    if (response[i].invoice_status === "Paid") {
      hash.paid += 1;
    }
    if (response[i].invoice_status === "Unpaid") {
      hash.unpaid += 1;
    }
  }
  const chart = [
    { status: "Paid", count: hash.paid, fill: "var(--color-paid)" },
    { status: "Unpaid", count: hash.unpaid, fill: "var(--color-unpaid)" },
  ];
  return chart;
}
