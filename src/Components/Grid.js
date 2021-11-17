import React, { useState } from 'react'

const initialgridoptions = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
]

const GridItem = ({ grid, index }) => {
  const handleGridItem = idx => {
    console.log(index, " : ", idx)
  }
  return (
    <div className="grid_container">
      {grid.map((item, idx) => (
        <div
          className="grid_item py-2" key={`g-${idx}`}
          onClick={() => handleGridItem(idx)}
        >
          {item}
        </div>
      ))}
    </div>
  )
}

const Grid = () => {
  const [gridOptions, setGridOptions] = useState(initialgridoptions)

  return (
    <div className="grid_container mb-3">
      {gridOptions.map((grid, index) => (
        <GridItem key={`gi-${index}`} grid={grid} index={index} />
      ))}
    </div>
  )
}

export default Grid