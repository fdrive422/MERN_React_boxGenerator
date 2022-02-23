import './App.css';
import React, { useState } from 'react';
import Form from './components/Form';
import Box from './components/Box';

function App() {
  const [boxColorArray, setBoxColorArray] = useState([]);

  return (
    <div className="App">
      <h1>Colored Box Generator</h1>
      <Form boxColorArray={boxColorArray} setBoxColorArray={setBoxColorArray} />
      <Box boxColorArray={boxColorArray} />
    </div>
  );
}

export default App;