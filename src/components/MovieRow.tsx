import { useEffect, useState } from 'react';
import { Movie } from '../types/movie';
import MovieCard from './MovieCard';

interface MovieRowProps {
  title: string;
  fetchMovies: () => Promise<any>;
}

export default function MovieRow({ title, fetchMovies }: MovieRowProps) {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    fetchMovies().then((res) => setMovies(res.data.results));
  }, [fetchMovies]);

  return (
    <div className="px-8 md:px-16 mb-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="flex overflow-x-scroll space-x-4 scrollbar-hide pb-4">
        {movies.map((movie) => (
          <div key={movie.id} className="min-w-[200px] md:min-w-[250px]">
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
}
