export const setAlbumInfo = data => {
  return {
    type: "ALBUM_INFO",
    payload: data
  };
};

export const setAlbumActive = data => {
  return {
    type: "ACTIVATE_ALBUM_INFO",
    payload: data
  };
};
