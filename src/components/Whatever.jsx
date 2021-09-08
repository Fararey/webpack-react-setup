import { useState } from "react";

function Whatever() {
  const [state, setState] = useState("Initial State");
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={() => setState("Button Clicked")}></button>
    </div>
  );
}

export default Whatever;
