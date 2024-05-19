import axios from 'axios';
import { useQuery } from 'react-query';

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOWRjZjc4MjlmZjMyN2MzNWRlYzJmNmEzZWQ4NmU2ZiIsInN1YiI6IjY2MjdiODRkMjU4ODIzMDE3ZDkzZTBhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.R-ELXAhSe3lyIfkzIlNG79w8_bENJDxEyCGaEbAVJmg'
    }
};
const callAPILink = (id) => {
    return `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`;
}
function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}
const fetchRelatedMovies = async (id) => {
    const { data } = await axios.get(callAPILink(id), options)
    return shuffle(data.results);
}
export default function useRelated(id) {
    return useQuery({ queryKey: ['related', id], queryFn: () => fetchRelatedMovies(id) })
}