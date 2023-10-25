import { Cards } from './component/card/card'

var catFacts = [ ];

function getFact(){
  console.log("here");
}

export default function Home() {
  return (
    <div>
      <Cards cards={catFacts}></Cards>
      <button onClick={getFact()} type="button">Click</button>
    </div>
  )
}
