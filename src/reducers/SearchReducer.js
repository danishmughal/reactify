import {
  SEARCH_UPDATED,
  ARTIST_FETCH,
  ARTIST_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  searchTerm: '',
  artists: [],
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH_UPDATED:
      return { ...state, searchTerm: action.payload };
    case ARTIST_FETCH:
      return { ...state, loading: true };
    case ARTIST_FETCH_SUCCESS:
      return { ...state, artists: action.payload, loading: false };
    default:
      return state;
  }
};
