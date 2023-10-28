import React, { useState, createContext } from 'react';

export const GridContext = createContext();

export const GridProvider = ({ children }) => {
  const [grid, setGrid] = useState([
    [false, false],
    [false, false]
  ]);

  const toggleCell = (rowIndex, cellIndex) => {
    const newGrid = [...grid];
    newGrid[rowIndex][cellIndex] = !newGrid[rowIndex][cellIndex];
    setGrid(newGrid);
  };

  return (
    <GridContext.Provider value={{ grid, toggleCell }}>
      {children}
    </GridContext.Provider>
  );
};
