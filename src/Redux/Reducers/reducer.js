const initState = {
    lists: []
}

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case "SET-PRODUCTS":
      return {...state, lists:payload};
    default:
      return state;
  }
};

export default reducer;
