import {
  FETCH_TRACKS,
  FETCH_TRACKS_SUCCESS,
  FETCH_CURRENT_TRACK,
  FETCH_CURRENT_TRACK_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  tracks: [],
  loading: false,
  currentTrack: null,
  currentTrackLoading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_TRACKS:
      return { ...state, loading: true };
    case FETCH_TRACKS_SUCCESS:
      return { ...state, loading: false, tracks: action.payload };
    case FETCH_CURRENT_TRACK:
        console.log('current track updated');
    console.log(action);

      return { ...state, currentTrackLoading: true, currentTrack: action.payload };
    case FETCH_CURRENT_TRACK_SUCCESS:
      return { ...state, currentTrackLoading: false, currentTrack: action.payload };
    default:
      return state;
  }
};
