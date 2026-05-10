import "./styles.css";
import { useState } from "react";
import {questions} from './data.js'
export default function App() {
  
  return (
    <div className="App">
      <FlashCards />
    </div>
  );
}

function FlashCards() {
  const [selectedId, setSelectedId] = useState(null)

  function handelClcik(id) {
    setSelectedId(id === selectedId ? null : id)
    console.log(id)
  }
  let cards = questions.map(card => {
    return (
      <div key={card.id} className={selectedId == card.id ? 'selected' : ''}>
        <p onClick={() => handelClcik(card.id)}>
          {selectedId == card.id ? card.answer : card.question}</p>
      </div>
    )
  })
  return <div className="flashcards">{cards}</div>;
}
