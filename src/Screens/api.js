import axios from 'axios';

const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NTA0YmZiOWI4ZmZmZWU3NTRlZjlkNWI1Zjc1OGRiNiIsInN1YiI6IjY0ZDM4MWMzMDM3MjY0MDEzOTE1NjhlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rWBaYe1tVbYvCD1dM5SWYaH2dSg-ywUUMyPAkntdy7Q';
const BASE_URL = 'https://api.themoviedb.org/3';




export const addToWatchlist = async (movieId, sessionId) => {
    const url = `${BASE_URL}/account/20280116/watchlist?api_key=${API_KEY}&session_id=${sessionId}`;
    const response = await axios.post(url, { media_type: 'movie', media_id: movieId, watchlist: true });
    return response.data;
};
