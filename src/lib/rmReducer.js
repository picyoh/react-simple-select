const initialState = {
  rmSelect: [],
};

const rmSet = (obj) => {
  return {
    type: "rmSelect",
    payload: obj,
  };
};

function rmSelectReducer(state = initialState, action) {
  if (action.type === "rmSelect") {
    if (
      state.findIndex((select) => select.name === action.payload.name) === -1
    ) {
      return [...state, action.payload];
    }
  }
  return state;
}

export {rmSet, rmSelectReducer}