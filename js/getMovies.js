import { requestApi } from './httpRequest.js';
import { getMovieImage } from './getMovieImage.js';

const IMG_URL = 'https://image.tmdb.org/t/p/w500';

const handlerClick = (e, movie) => {
    e.preventDefault();
    window.localStorage.setItem(
        "movie", JSON.stringify(movie)
    );
    window.location.href = 'movie.html';
}

export async function getMovies() {
    try {

        const data = await requestApi('/movie/popular?language=es-US', 'GET');

        const movies = data.results;

        console.log(movies);

        const container = document.querySelector('#app');

        movies.forEach( movie => {

            const { id, poster_path, backdrop_path, title, overview } = movie;
            const article = document.createElement('article');
            article.id = id;
            article.classList.add('movie_card');
            article.addEventListener('click', (e) => handlerClick(e, movie));

            //TITLE
            const divContainerTitle = document.createElement('div');
            divContainerTitle.classList.add('container_title');
            const titleNode = document.createElement('h3');
            titleNode.classList.add('title');
            titleNode.textContent = title;
            divContainerTitle.appendChild(titleNode);

            //POSTER
            const divContainerPoster = document.createElement('div');
            divContainerPoster.classList.add('container_poster');
            const poster = document.createElement('img');
            poster.src = `${IMG_URL}${poster_path}`;
            poster.alt = title;
            poster.classList.add('poster');

            divContainerPoster.appendChild(poster);

            article.appendChild(divContainerTitle);
            article.appendChild(divContainerPoster);
            container.appendChild(article);
        });

    } catch (err) {
        console.error(err);
    }
}

getMovies()
  .then(() => console.log('Movies loaded'))
    .catch(err => console.error(err));