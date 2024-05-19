// hooks/useMovies.js
import { useQuery } from 'react-query';
import axios from 'axios';

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOWRjZjc4MjlmZjMyN2MzNWRlYzJmNmEzZWQ4NmU2ZiIsInN1YiI6IjY2MjdiODRkMjU4ODIzMDE3ZDkzZTBhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.R-ELXAhSe3lyIfkzIlNG79w8_bENJDxEyCGaEbAVJmg'
    }
};
const callAPILink = (target) => {
    return `https://api.themoviedb.org/3/movie/${target}?language=en-US&page=1`;
}
function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}
const fetchMovies = async () => {
    const { data } = await axios.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7');
    return shuffle(data.results);
};

const fetchPopular = async () => {
    const { data } = await axios(callAPILink("popular"), options)
    return shuffle(data.results);
}
const fetchTopRated = async () => {
    const { data } = await axios(callAPILink("top_rated"), options)
    return data.results;
}
const fetchUpComming = async () => {
    const { data } = await axios(callAPILink("upcoming"), options)
    return shuffle(data.results);
}


const useMyQuery = (key, fun) =>
    useQuery({ queryKey: key, queryFn: fun })

export default function useMovies(target) {
    switch (target) {
        case "top": return useMyQuery('top', fetchTopRated);

        case "all": return useMyQuery('movies', fetchMovies);

        case "coming": return useMyQuery('coming', fetchUpComming);

        case "popular": return useMyQuery('popular', fetchPopular);

        default: return useMyQuery('movies', fetchMovies);
    }
}

