let state = {}

const userReducer = (state, action) => {
  switch(action.type) {
    case "USER_FETCH_REQUEST": 
      return { ...state, response: null, loading: true }
    case "USER_FETCH_SUCCESS":
      return { ...state, response: action.response, loading: false }
    case "USER_FETCH-FALIED":
      return { ...state, response: null, loading: false }
    default:
      return {
        response: "Default State"
      }
  }
}

export default userReducer