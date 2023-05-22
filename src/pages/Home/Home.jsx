import { getMovieTrendDay } from 'service/api';
import { useEffect, useState } from 'react';
import MovieList from 'components/MovieList/MovieList';

const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getMovieTrendDay().then(data => {
      setMovies(data.results);
    });
  }, []);

  return <>{<MovieList movies={movies}></MovieList>}</>;
};

export default Home;
