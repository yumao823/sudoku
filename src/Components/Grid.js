import React from 'react'

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

const Grid = ({grids}) => {
  return (
    <div className="grid_container mb-3">
      {grids.map((grid, index) => (
        <GridItem key={`gi-${index}`} grid={grid} index={index} />
      ))}
    </div>
  )
}

export default Grid