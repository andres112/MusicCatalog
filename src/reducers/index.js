import queryReducer from './query';
import albumListReducer from './albumList'
import artistInfoReducer from './artistInfo';
import albumInfoReducer from './albumInfo'
import albumInfoActiveReducer from './isAlbumActive';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    query: queryReducer,
    albumList: albumListReducer,
    artistInfo: artistInfoReducer,
    albumInfo: albumInfoReducer,
    albumSelected: albumInfoActiveReducer
})

export default allReducers;