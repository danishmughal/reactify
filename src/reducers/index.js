import { combineReducers } from 'redux';
import SearchReducer from './SearchReducer';
import TrackReducer from './TrackReducer';

export default combineReducers({
  artists: SearchReducer,
  tracks: TrackReducer
});
