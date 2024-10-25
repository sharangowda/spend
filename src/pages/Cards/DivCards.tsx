import { useEffect, useState } from "react";
import { Cardsbare } from "./Cardsbare";
import { cardDetailUtil } from "@/utils/cardDetailUtils";
import { RecordModel } from "pocketbase";

interface Data {
  [key: number]: RecordModel;
}

function DivCards() {
  const [data, setData] = useState<Data>([]);

  useEffect(() => {
    const getHash = setTimeout(async () => {
      const response = await cardDetailUtil();
      setData(response);
    }, 500);
    return () => {
      clearTimeout(getHash);
    };
  }, []);
  return (
    <>
      <div className="flex flex-col justify-center items-center m-5 md:flex-row">
        {data[0] !== undefined && (
          <Cardsbare
            title={data[0].payment_amount}
            body={data[0].payment_invoices}
            status={data[0].invoice_status}
          />
        )}
        {data[1] !== undefined && (
          <Cardsbare
            title={data[1].payment_amount}
            body={data[1].payment_invoices}
            status={data[1].invoice_status}
          />
        )}
        {data[2] !== undefined && (
          <Cardsbare
            title={data[2].payment_amount}
            body={data[2].payment_invoices}
            status={data[2].invoice_status}
          />
        )}
        {data[3] !== undefined && (
          <Cardsbare
            title={data[3].payment_amount}
            body={data[3].payment_invoices}
            status={data[3].invoice_status}
          />
        )}
      </div>
    </>
  );
}

export default DivCards;
