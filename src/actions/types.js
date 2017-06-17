// Spotify Config
// To be masked via external service in the future
const SPOTIFY_ACCESS_TOKEN = 'BQCeLl1o45xbUz9FX9A5M9Md81N6qEwMorkH2AEfgNzJ60dtjA38LwepLKT-w81FzaRZrVQVRBztPArED-YPTA'
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

