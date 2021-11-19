import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clone } from 'ramda'
import Options from './Options'
import Grid from './Grid'
import NumPad from './NumPad'

const Game = () => {
  const grids = useSelector(state => state.state.grids)
  const dispatch = useDispatch()

  const handleNew = () => {
    dispatch({ type: 'NEW_GRID'})
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