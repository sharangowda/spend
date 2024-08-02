import { Cardsbare } from "./Cardsbare";

function DivCards() {
  return (
    <>
      <div className="flex flex-col justify-center items-center m-5 md:flex-row">
        <Cardsbare />
        <Cardsbare />
        <Cardsbare />
        <Cardsbare />
      </div>
    </>
  );
}

export default DivCards;
