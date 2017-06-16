import {
  FETCH_TRACKS,
  FETCH_TRACKS_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  tracks: [],
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_TRACKS:
      return { ...state, loading: true };
    case FETCH_TRACKS_SUCCESS:
      return { ...state, loading: false, tracks: action.payload }
    default:
      return state;
  }
};
