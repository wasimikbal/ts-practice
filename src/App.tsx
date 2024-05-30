import React from "react";
import "./App.css";
import Button4 from "./components/Button4";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);



  return (
    <div className="App">
      <Button4 type="submit" autoFocus={true} onClick={()=>{}} variant="alpha"/>
    </div>
  );
}

export default App;
