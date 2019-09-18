const albumListReducer = (state = [], action) => {
    if (action.type === "ALBUM_LIST" && action.payload) 
        state = action.payload
    return state;
}

export default albumListReducer;