const IMG_URL_ORIGINAL = 'https://image.tmdb.org/t/p/original';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
function setMovieData() {
    const movie = JSON.parse(localStorage.getItem('movie'));
    document.title = movie.title;

    const main_container_movie = document.querySelector('.main_container_movie');
    main_container_movie.style.backgroundImage = `url(${IMG_URL_ORIGINAL}${movie.backdrop_path})`;
    main_container_movie.style.backgroundSize = 'cover';
    main_container_movie.style.backgroundPosition = 'center';
    main_container_movie.style.backgroundRepeat = 'no-repeat';
    main_container_movie.style.backgroundAttachment = 'fixed';

    const movieTitle = document.querySelector('.movie_title');
    movieTitle.textContent = movie.title;

    const container_poster = document.querySelector('.container_poster');
    container_poster.style.backgroundImage = `url(${IMG_URL}${movie.poster_path})`;
    container_poster.style.backgroundSize = 'cover';
    container_poster.style.backgroundPosition = 'center';
    container_poster.style.backgroundRepeat = 'no-repeat';

    const movie_description = document.querySelector('.movie_description');
    movie_description.textContent = movie.overview;

    const poster = document.createElement('img');
}

setMovieData();