import axios from 'axios';

import {
  SEARCH_UPDATED,
  ARTIST_FETCH,
  ARTIST_FETCH_SUCCESS,
  ARTIST_FETCH_ERROR
} from './types';


// Spotify vars
// To be masked via external service in the future
const SPOTIFY_TOKEN = 'Bearer BQDC7JD9KFdVOhjo0h_huWyYSgorM893Mq33XEz7YyLZI4Y4oFIsUDFcqTFSAmEpqleJeMiCbqsrp4IcOLc6kg';
const SEARCH_URL = 'https://api.spotify.com/v1/search?type=artist&q=';

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
