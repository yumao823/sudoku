import React from 'react'
import { Image } from 'react-bootstrap'

const Header = () => (
  <div className="d-flex mb-5">
    <Image className="me-4 logo" src="sudoku.png" thumbnail />
    <h1 className="fw-bold">SUDOKU</h1>
  </div>
)

export default Header