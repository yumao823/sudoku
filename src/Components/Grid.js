import React from 'react'

const gridoptions = [
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

const GridItem = ({ grid }) => (
  <div className="grid_container">
    {grid.map((item, index) => (
      <div className="grid_item py-2" key={`g-${index}`}>{item}</div>
    ))}
  </div>
)

const Grid = () => {
  return (
    <div className="grid_container mb-3">
      {gridoptions.map((grid, index) => (
        <GridItem key={`gi-${index}`} grid={grid} />
      ))}
    </div>
  )
}

export default Grid