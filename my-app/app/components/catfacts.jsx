import React from "react";
import Cards from "./card";

var facts = [];

function getFact(){
    
}

export default function CatFacts() {
    return (
        <div>
            <Cards cards={facts}></Cards>
            <button onClick={getFact()} type="button">Click</button>
        </div>
    )
}