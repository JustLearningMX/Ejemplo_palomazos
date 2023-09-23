import { requestApi } from './httpRequest.js';

export async function getMovieImage(movie_id) {
    try {

        const data = await requestApi(`/movie/${movie_id}/images`, 'GET');

        console.log(data);
    } catch (err) {
        console.error(err);
    }
}