import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

function App() {
  const [imageSRC, setImage] = useState<string>();

  function updateCard() {
    fetch("https://meowfacts.herokuapp.com/")
      .then((response) => response.json())
      .then((json) =>
        fetch(
          "https://cataas.com/cat/says/" +
            encodeURI(json.data[0]) +
            "?fontSize=50&fontColor=white"
        )
          .then((response) => response.blob())
          .then((blob) => setImage(URL.createObjectURL(blob)))
      );
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
        <img src={imageSRC} />
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
