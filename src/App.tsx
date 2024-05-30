import React from 'react';
import './App.css';
import Button from './components/Button';
import Button2 from './components/Button2';
import Button3 from './components/Button3';

function App() {
  return (
    <div className="App">
      <Button3 onclick={()=>{"Something to be done here"}}/>
    </div>
  );
}

export default App;
