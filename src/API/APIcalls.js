const APIkey = '00002c1315abdda70d4477e8e2b88c82';

export const searchMovies = (keyword) => {
    return `https://api.themoviedb.org/3/search/movie?api_key=${APIkey}&query=${keyword}`;
};

export const baseImagePath = (size, path) => {
    return `https://image.tmdb.org/t/p/${size}${path}`;
};
