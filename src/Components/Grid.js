import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import classNames from 'classnames'

const GridInput = ({ data, row, col }) => {
  const dispatch = useDispatch()

  const handleChange = e => {
    dispatch({ type: 'NEW_ITEM', value: e.target.value, row, col })
  }

  return (
    <input
      disabled={data}
      value={data || ''}
      className={classNames(
        'grid_item py-2',
        col === 0 && 'bold_border_left',
        row === 0 && 'bold_border_top',
        col % 3 === 2 && 'bold_border_right',
        row % 3 === 2 && 'bold_border_bottom'
      )}
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

  return (
    <div className="grid_container mb-3">
      {grids.map((grid, index) => (
        <GridItem key={`gi-${index}`} grid={grid} index={index} />
      ))}
    </div>
  )
}

export default Grid