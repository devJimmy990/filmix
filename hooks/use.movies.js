// hooks/useMovies.js
import { useQuery } from 'react-query';
import axios from 'axios';

const fetchMovies = async () => {
    const { data } = await axios.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7');
    return data.results;
};

export function useMovies() {
    return useQuery(
        { queryKey: 'movies', queryFn: fetchMovies });
}
