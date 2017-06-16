import axios from 'axios';

import {
  SPOTIFY_TOKEN,
  SEARCH_URL,
  SEARCH_UPDATED,
  ARTIST_FETCH,
  ARTIST_FETCH_SUCCESS,
  ARTIST_FETCH_ERROR
} from './types';


export const updateSearch = (searchterm) => {
  return {
    type: SEARCH_UPDATED,
    payload: searchterm
  };
};

export const submitSearch = (searchterm) => {
  return (dispatch) => {
    dispatch({ type: ARTIST_FETCH });

    const config = {
      headers: {
        Authorization: SPOTIFY_TOKEN
      }
    };

    axios.get(SEARCH_URL + searchterm, config)
      .then((response) => {
        dispatch({
          type: ARTIST_FETCH_SUCCESS,
          payload: response.data.artists.items
        });
      })
      .catch((error) => {
        dispatch({
          type: ARTIST_FETCH_ERROR
        });
      });
  };
};
