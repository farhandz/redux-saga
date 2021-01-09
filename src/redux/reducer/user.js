const initialState = {
    user: []
}

export default function users (state = initialState, action) {
    switch (action.type) {
      case "GET_DATA":
        return {
          ...state,
          user: action,
        };
      case "GET_DATA_FETCH":
        return {
          ...state,
          data: action.payload,
        };
      case "GET_MANIS":
        return {
          ...state,
          data: action.payload,
        };
      default:
        return state;
    }
}