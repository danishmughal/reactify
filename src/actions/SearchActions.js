import axios from 'axios';

import {
  SEARCH_UPDATED,
  ARTIST_FETCH,
  ARTIST_FETCH_SUCCESS,
  ARTIST_FETCH_ERROR
} from './types';

const SPOTIFY_TOKEN = 'Bearer BQA8hzbjcqZVDsbHw7gv76VyjRQev06v_0ojxOdJ5b6JVGcVf6IoVx0X6mYv4dXVmBtpvwjhI1ogbmjSzbwU_Q';
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
