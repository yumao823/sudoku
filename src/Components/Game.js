import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clone } from 'ramda'
import Options from './Options'
import Grid from './Grid'
import NumPad from './NumPad'
import { LEVELS } from '../Constants'

const Game = () => {
  const [grids, setGrids] = useState(useSelector(state => state.state.grids))
  const [level, setLevel] = useState(LEVELS[0])
  const dispatch = useDispatch()

  const handleNew = () => {
    dispatch({ type: 'NEW_GRID'})
  }

  const handleRemove = () => {
    let temp = clone(grids)
    temp.forEach(grid => {
      for(let i=0; i<3; i++) grid[Math.floor((Math.random()*grid.length))] = 0
    });
    setGrids(temp)
  }

  useEffect(() => {
    handleNew()
    handleRemove()
  }, [])

  return (
    <div className="w-100">
      <Options
        level={level}
        onNew={handleNew}
        onLevel={e => setLevel(e)}
      />
      <Grid grids={grids} />
      <NumPad />
    </div>
  )
}

export default Game