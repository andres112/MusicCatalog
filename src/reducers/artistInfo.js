const artistInfoReducer = (
  state = {
    bio: {},
    image: []
  },
  action
) => {
  if (action.type === "ARTIST" && action.payload) state = action.payload;
  return state;
};

export default artistInfoReducer;
