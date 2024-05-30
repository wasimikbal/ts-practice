import React from 'react';
import './App.css';
import Button from './components/Button';
import Button2 from './components/Button2';

function App() {
  return (
    <div className="App">
      <Button2 style={{
        backgroundColor: 'blue',
        fontSize: 24,
        color: 'white',
        padding: '1rem 2rem',
        borderRadius: 8,
        borderColor: 'transparent'

      }}/>
    </div>
  );
}

export default App;
