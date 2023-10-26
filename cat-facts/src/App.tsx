import { useState } from "react";
import "./App.css";
import FactCard from "./components/FactCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [factCards, setFactCards] = useState<any[]>([]);

  function addCard() {
    if (factCards.length > 2) {
      factCards.splice(0, 1);
    }

    setFactCards([
      ...factCards,
      {
        title: "test",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        color: getRandomPastelColor(),
        rotation: getRotation(),
      },
    ]);
  }

  function getRandomPastelColor() {
    return (
      "hsl(" +
      360 * Math.random() +
      "," +
      (25 + 70 * Math.random()) +
      "%," +
      (85 + 10 * Math.random()) +
      "%)"
    );
  }

  function getRotation() {
    return "rotate(" + (Math.random() * 30 - 15) + "deg)";
  }

  return (
    <>
      <div className="wrapper">
        {factCards.map((card, index) => (
          <FactCard
            key={index}
            title={card.title}
            text={card.text}
            color={card.color}
            rotation={card.rotation}
          />
        ))}
        <button
          type="button"
          className="btn btn-lg btn-outline-light"
          onClick={addCard}
        >
          <FontAwesomeIcon icon={faPaw} />
          <span style={{ paddingLeft: "15px" }}>Meow!</span>
        </button>
      </div>
    </>
  );
}

export default App;
