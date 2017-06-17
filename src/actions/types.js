// Spotify Config
// To be masked via external service in the future
const SPOTIFY_ACCESS_TOKEN = 'BQC-3uu967d30SHWbOgeYznWZJ-kZ_DYVnkibIQ-5vLbFCBl5UMh6d602426q4fI9_xZ14tF01i7WnXNW-bfzA';
export const SPOTIFY_TOKEN = `Bearer ${SPOTIFY_ACCESS_TOKEN}`;
export const SEARCH_URL = 'https://api.spotify.com/v1/search?type=artist&q=';
export const ARTIST_URL = 'https://api.spotify.com/v1/artists/';


// Actions
export const SEARCH_UPDATED = 'search_updated';
export const ARTIST_FETCH = 'artist_fetch';
export const ARTIST_FETCH_SUCCESS = 'artist_fetch_success';
export const ARTIST_FETCH_ERROR = 'artist_fetch_error';

export const FETCH_TRACKS = 'fetch_tracks';
export const FETCH_TRACKS_SUCCESS = 'fetch_tracks_success';
export const FETCH_TRACKS_ERROR = 'fetch_tracks_error';

export const FETCH_CURRENT_TRACK = 'fetch_current_track';
export const FETCH_CURRENT_TRACK_SUCCESS = 'fetch_current_track_success';
