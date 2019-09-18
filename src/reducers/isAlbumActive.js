const albumInfoActiveReducer = (
  state = {
    isActive: false,
    albumName: ""
  },
  action
) => {
  if (action.type === "ACTIVATE_ALBUM_INFO" && action.payload) state = action.payload;
  return state;
};

export default albumInfoActiveReducer;
