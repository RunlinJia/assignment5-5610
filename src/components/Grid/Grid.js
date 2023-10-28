import React, { useContext } from 'react';
import { GridContext } from '../../context/GridContext';
import Cell from '../Cell/Cell';
import './Grid.css';

function Grid() {
  const { grid } = useContext(GridContext);
  const count = grid.flat().filter(cell => cell).length;

  return (
    <div>
      <h1>Count: {count}</h1>
      <div className="grid">
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((_, cellIndex) => (
              <Cell key={cellIndex} rowIndex={rowIndex} cellIndex={cellIndex} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Grid;

