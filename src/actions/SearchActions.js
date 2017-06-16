import axios from 'axios';

import {
  SEARCH_UPDATED,
  ARTIST_FETCH,
  ARTIST_FETCH_SUCCESS
} from './types';

const SPOTIFY_TOKEN = 'Bearer BQCFb0bVmeot7-mVeSFQQt-SIYP23AWpyU3YK-0EONvLzPoTwlX5D6qxKdv1wCkuu1MouhCnRch55CeID8Tuyw';
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
        console.log(response);
        dispatch({
          type: ARTIST_FETCH_SUCCESS,
          payload: response.data.artists
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
