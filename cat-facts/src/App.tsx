import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import FactCard from "./components/FactCard";
import "./App.css";

function App() {
  const [factCard, setFactCard] = useState<any>();

  function updateCard() {
    setFactCard({
      title: "test",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      color: getRandomPastelColor(),
    });
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

  return (
    <>
      <div className="wrapper">
        {factCard != null && (
          <FactCard
            title={factCard.title}
            text={factCard.text}
            color={factCard.color}
          />
        )}
        <button
          type="button"
          className="btn btn-lg btn-outline-light"
          onClick={updateCard}
        >
          <FontAwesomeIcon icon={faPaw} />
          <span style={{ paddingLeft: "15px" }}>Meow!</span>
        </button>
      </div>
    </>
  );
}

export default App;
