import React from "react";
import "./App.css";
import Button5 from "./components/Button5";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);



  return (
    <div className="App">
      <Button5 type="submit" autoFocus={true} onClick={()=>{}} variant="alpha"/>
    </div>
  );
}

export default App;
