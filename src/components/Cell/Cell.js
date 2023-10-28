import React, { useContext } from 'react';
import { GridContext } from '../../context/GridContext';
import './Cell.css';

function Cell({ rowIndex, cellIndex }) {
  const { grid, toggleCell: switchColor } = useContext(GridContext);

  return (
    <div 
      className={`cell ${grid[rowIndex][cellIndex] ? 'active' : ''}`}
      onClick={() => switchColor(rowIndex, cellIndex)}
    >
    </div>
  );
}

export default Cell;
