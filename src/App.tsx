import React from 'react';
import './App.css';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <Button backgroundColor='bg-blue-500' fontSize={30} pillShape={true}/>
    </div>
  );
}

export default App;
