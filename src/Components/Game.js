import React, { useEffect, useState } from 'react'
import { clone } from 'ramda'
import Options from './Options'
import Grid from './Grid'
import NumPad from './NumPad'

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

const Game = () => {
  const [grids, setGrids] = useState(initialgridoptions)

  const handleNew = () => {
    let temp = clone(grids)
    temp.map(grid => {
      grid.sort(() => Math.random() - 0.5)
    })
    setGrids(temp)
  }

  useEffect(() => {
    handleNew()
  }, [])

  return (
    <div className="w-100">
      <Options onNew={handleNew} />
      <Grid grids={grids} />
      <NumPad />
    </div>
  )
}

export default Game