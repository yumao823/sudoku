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
      let temp1 = clone(initialstate.grids)
      temp1.map(grid => {
        grid.sort(() => Math.random() - 0.5)
      })
      let temp2 = temp1
      temp2.forEach(grid => {
        for(let i=0; i<3; i++) grid[Math.floor((Math.random()*grid.length))] = 0
      });
      return { ...state, rootgrids: temp1, grids: temp2 }
    }
    case "NEW_ITEM": {
      const { value, row, col } = action
      let temp = clone(state.grids)
      temp[row][col] = value
      return { ...state, grids: temp }
    }
    default:
      return state
  }
}

export default userReducer