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
    return `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
}
const fetchTrailer = (data) => {
    const res = data.find(video =>
        video.site === 'YouTube' &&
        video.type.includes('Trailer') &&
        video.name.includes("Trailer")
    );
    return res?.key ?? ""
}

const fetchVideo = (data) => {
    const res = data.find(video =>
        video.site === 'YouTube' &&
        video.type === 'Clip'
    );
    return res?.key ?? ""
}

const fetchMovieVideos = async (id) => {
    const { data } = await axios.get(callAPILink(id), options)
    const res = {
        video: fetchVideo(data.results),
        trailer: fetchTrailer(data.results),
    };
    return res;
}

export default function useVideo(id) {
    return useQuery({ queryKey: ['video', id], queryFn: () => fetchMovieVideos(id) })
}