import React from 'react';
import "./../styles/card.css";

function getColor(){ 
  return "hsl(" + 360 * Math.random() + ',' +
             (25 + 70 * Math.random()) + '%,' + 
             (85 + 10 * Math.random()) + '%)'
}

function getRotation(){
  let min = -15;
  let max = 15;

  return "rotate(" + (Math.floor(Math.random() * (max - min + 1)) + min) + "deg)";
}

export default function Cards({ cards }) {
  return (
    <div className="cardStack">
      {cards.map(({ title, text }) => (
        <div className="card" style={{backgroundColor: getColor(), transform: getRotation()}}>
          <h3 className="cardTitle">{title}</h3>
          <p className="cardText">{text}</p>
        </div>
      ))}
    </div>
  )
}