import { useState } from "react";

export default function App() {
  return <Counter />;
}

function Counter() {
  const [counter, setCounter] = useState(0);
  const [steps, setSteps] = useState(1);

  // is not default 
  let notDefaultState = counter !== 0 || steps !== 1 


  // my date
  const date = new Date("jun 10, 2026");
  date.setDate(date.getDate() + counter);

  // date coundetions
  const dateCoundetions =
    counter >= 1
      ? `${counter} days from day is `
      : counter == 0
        ? `today is `
        : `${Math.abs(counter)} days ago was  `; // in  -

        // reset function
  function handelReset() {
    setCounter(0);
    setSteps(1);
  }

  return (
    <div style={{ textAlign: "center" }}>
      
      {/* start rangg input */}
      <input
        type="range"
        min={0}
        max={10}
        //  nessesery for Math Opretor set Number()
        onChange={(e) => setSteps(Number(e.target.value))}
        value={steps}
      />
      <p className="step">{steps}</p>

      {/* start + and - btn and counter */}
      <button onClick={() => setCounter((e) => e - steps)}>-</button>
      <input
        type="number"
        //  nessesery for Math Opretor set Number()
        onChange={(e) => setCounter(Number(e.target.value))}
        value={counter == 0 ? "" : Math.abs(counter)}
      />
      <button onClick={() => setCounter((e) => e + steps)}>+</button>

      <p>
        <span>{dateCoundetions}</span>
        {date.toDateString()}
      </p> {notDefaultState ? (
        <button onClick={() => handelReset()}>Reset</button>
      ) : null}
    </div>
  );
}
