import { clone } from 'ramda';

let initialstate = {
  grids: [
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
  ],
}

const userReducer = (state = initialstate, action) => {
  switch(action.type) {
    case "NEW_GRID":{
      let temp = clone(initialstate.grids)
      temp.map(grid => {
        grid.sort(() => Math.random() - 0.5)
      })
      return { ...state, grids: temp }
    }
    default:
      return state
  }
}

export default userReducer