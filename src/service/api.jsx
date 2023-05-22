import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'ddec42efa7dad57904cab0b807fa902e';
const TREND_DAY = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`;
const ID_URL = `${BASE_URL}/movie/`;
const SEARCH_MOVIE_URL = `${BASE_URL}/search/movie?api_key=${API_KEY}&page=1&include_adult=false`;

export const getMovieTrendDay = async () => {
  try {
    const { data } = await axios.get(`${TREND_DAY}`);
    return data;
  } catch (error) {
    return (error);
  }
};

export const getMovieById = async id => {
  try {
    const { data } = await axios.get(`${ID_URL}${id}?api_key=${API_KEY}`);
    return data;
  } catch (error) {
    return (error);
  }
};

export const getMovieCast = async id => {
  try {
    const { data } = await axios.get(
      `${ID_URL}${id}/credits?api_key=${API_KEY}`
    );
    return data.cast;
  } catch (error) {
    return (error);
  }
};

export const getMovieReviews = async id => {
  try {
    const { data } = await axios.get(
      `${ID_URL}${id}/reviews?api_key=${API_KEY}&page=1`
    );
    return data.results;
  } catch (error) {
    return (error);
  }
};

export const searchMovieByQuery = async value => {
  try {
    const { data } = await axios.get(`${SEARCH_MOVIE_URL}&query=${value}`);
    return data.results;
  } catch (error) {
    return (error);
  }
};


