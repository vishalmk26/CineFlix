import { useEffect, useState } from 'react';
import { Movie } from '../types/movie';
import { getTrending } from '../services/tmdb';
import { useNavigate } from 'react-router-dom';
import { IMAGE_BASE_URL } from '../services/tmdb';

export default function ContinueWatching() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    getTrending().then((res) => {
      const watched = JSON.parse(localStorage.getItem('continueWatching') || '[]');
      if (watched.length > 0) {
        setMovies(res.data.results.slice(0, 5));
      }
    });
  }, []);

  if (movies.length === 0) return null;

  return (
    <div className="px-8 md:px-16 mb-8">
      <h2 className="text-2xl font-bold mb-4">Continue Watching</h2>
      <div className="flex overflow-x-scroll space-x-4 scrollbar-hide pb-4">
        {movies.map((movie) => (
          <div
            key={movie.id}
            onClick={() => navigate(`/details/${movie.id}`)}
            className="relative min-w-[300px] cursor-pointer group"
          >
            <img
              src={`${IMAGE_BASE_URL}${movie.backdrop_path}`}
              alt={movie.title || movie.name}
              className="w-full h-44 object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700 rounded-b-lg">
              <div
                className="h-full bg-netflix rounded-b-lg"
                style={{ width: `${Math.random() * 70 + 20}%` }}
              />
            </div>
            <div className="absolute inset-0 glass-dark opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
              <span className="text-4xl">▶</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
