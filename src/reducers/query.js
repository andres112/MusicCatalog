const queryReducer = (state = "", action) => {
  if (action.type === "QUERY" && action.payload) state = action.payload;
  return state;
};

export default queryReducer;
