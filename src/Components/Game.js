import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Options from './Options'
import Grid from './Grid'
import { LEVELS } from '../Constants'

const Game = () => {
  const [level, setLevel] = useState(LEVELS[0])
  const dispatch = useDispatch()

  const handleNew = () => {
    dispatch({ type: 'NEW_GRID', level: level.value})
  }

  useEffect(() => {
    handleNew()
  }, [])

  useEffect(() => {
    handleNew()
  }, [level])

  return (
    <div className="w-100">
      <Options
        level={level}
        onNew={handleNew}
        onLevel={e => setLevel(e)}
      />
      <Grid />
    </div>
  )
}

export default Game