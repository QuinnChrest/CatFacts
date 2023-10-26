import { useState } from "react";
import "./App.css";
import FactCard from "./components/FactCard";

function App() {
  const [factCards, setFactCards] = useState<any[]>([]);

  function addCard() {
    setFactCards([
      ...factCards,
      {
        title: "test",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
    ]);
  }

  return (
    <>
      {factCards.map((card, index) => (
        <FactCard key={index} title={card.title} text={card.text} />
      ))}
      <button type="button" className="btn" onClick={addCard}>
        button
      </button>
    </>
  );
}

export default App;
