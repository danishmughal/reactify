import { combineReducers } from 'redux';
import ArtistReducer from './ArtistReducer';

export default combineReducers({
  artists: ArtistReducer,
});
