import { useEffect, useState } from 'react';
import { Movie } from '../types/movie';
import MovieCard from '../components/MovieCard';
import { getMovieDetails } from '../services/tmdb';

export default function MyList() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const myList = JSON.parse(localStorage.getItem('myList') || '[]');
    Promise.all(myList.map((id: number) => getMovieDetails(id)))
      .then((responses) => setMovies(responses.map((r) => r.data)));
  }, []);

  return (
    <div className="min-h-screen pt-24 px-8 md:px-16">
      <h1 className="text-4xl font-bold mb-8">My List</h1>
      
      {movies.length === 0 ? (
        <div className="text-center text-gray-400 mt-16">
          <p className="text-xl mb-4">Your list is empty</p>
          <p>Add movies and shows to your list to watch them later</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}
