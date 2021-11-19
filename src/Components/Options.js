import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import Select from 'react-select'
import { LEVELS } from '../Constants'


const Options = ({ level, onNew, onLevel }) => (
  <div className="d-flex justify-content-between mb-3">
    <Button className="fw-bold" variant="light" onClick={onNew}>New Game</Button>
    <Select value={level} options={LEVELS} onChange={onLevel} />
  </div>
)

export default Options