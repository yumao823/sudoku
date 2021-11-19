import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const GridInput = ({ data, row, col }) => {
  const dispatch = useDispatch()

  const handleChange = e => {
    dispatch({ type: 'NEW_ITEM', value: e.target.value, row, col })
  }

  return (
    <input
      disabled={data}
      value={data || ''}
      className="grid_item py-2"
      onChange={handleChange}
    />
  )
} 

const GridItem = ({ grid, index }) => (
  grid.map((item, idx) => (
    <GridInput key={`g-${idx}`} data={item} row={index} col={idx} />
  ))
)

const Grid = () => {
  const grids = useSelector(state => state.state.grids)
  console.log("%", useSelector(state => state.state.rootgrids))

  return (
    <div className="grid_container mb-3">
      {grids.map((grid, index) => (
        <GridItem key={`gi-${index}`} grid={grid} index={index} />
      ))}
    </div>
  )
}

export default Grid