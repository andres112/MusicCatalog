const albumInfoReducer = (
  state = {
    name: "",
    image: [],
    tracks: {
      track: []
    }
  },
  action
) => {
  if (action.type === "ALBUM_INFO" && action.payload) state = action.payload;
  return state;
};

export default albumInfoReducer;
