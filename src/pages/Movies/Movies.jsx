import { searchMovieByQuery } from 'service/api';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import  SearchForm  from 'components/SearchForm/SearchForm';
import MovieList from 'components/MovieList/MovieList';


const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const value = searchParams.get('query') ?? '';
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (value === '') {
      return;
    }
    async function fetchMovies() {
      const movie = await searchMovieByQuery(value);
      const results = movie.map(({ id, title, poster_path }) => (
        { id, title, poster_path, }));
      setMovies(results);
    }
    fetchMovies();
  }, [value]);

  const formSubmit = searchQuery => {
    setSearchParams('');
    updateSearchValue(searchQuery);
  };

  const updateSearchValue = query => {
    const nextValue = query !== '' ? { query } : {};
    setSearchParams(nextValue);
  };

  return (
    <main>
      <SearchForm onSubmit={formSubmit} />
      {movies && <MovieList movies={movies} />}
     
      
    </main>
  );
};

export default Movies;
