import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Movie } from '../types/movie';
import MovieCard from '../components/MovieCard';
import { searchMovies } from '../services/tmdb';

export default function Browse() {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState<Movie[]>([]);
  const query = searchParams.get('q');

  useEffect(() => {
    if (query) {
      searchMovies(query).then((res) => setMovies(res.data.results));
    }
  }, [query]);

  return (
    <div className="min-h-screen pt-24 px-8 md:px-16">
      <h1 className="text-3xl font-bold mb-8">
        {query ? `Search results for "${query}"` : 'Browse'}
      </h1>
      
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      {movies.length === 0 && query && (
        <p className="text-gray-400 text-center mt-16">No results found</p>
      )}
    </div>
  );
}
