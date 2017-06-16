import axios from 'axios';

import {
  SPOTIFY_TOKEN,
  ARTIST_URL,
  FETCH_TRACKS,
  FETCH_TRACKS_SUCCESS,
  FETCH_TRACKS_ERROR
} from './types';


export const loadArtistTracks = ({ id }) => {
  return (dispatch) => {
    dispatch({ type: FETCH_TRACKS });
    const config = {
      headers: {
        Authorization: SPOTIFY_TOKEN
      }
    };

    axios.get(`${ARTIST_URL}${id}/top-tracks?country=US`, config)
      .then((response) => {
        console.log('artist fetched');
        console.log(response);
        dispatch({
          type: FETCH_TRACKS_SUCCESS,
          payload: response.data.tracks
        });
      })
      .catch((error) => {
        console.log('error fetching');
        console.log(error);
        dispatch({
          type: FETCH_TRACKS_ERROR
        });
      });
  };
};
