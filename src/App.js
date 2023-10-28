import React from 'react';
import './App.css';
import Grid from './components/Grid/Grid';
import { GridProvider } from './context/GridContext';

function App() {
  return (
    <GridProvider>
      <div className="App">
        <h1>Runlin's Assignment </h1>
        <Grid />
      </div>
    </GridProvider>
  );
}

export default App;
