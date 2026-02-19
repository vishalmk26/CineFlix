import { Movie } from '../types/movie';
import { IMAGE_BASE_URL } from '../services/tmdb';
import { useNavigate } from 'react-router-dom';

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/details/${movie.id}`)}
      className="relative group cursor-pointer transition-transform duration-300 hover:scale-105"
    >
      <img
        src={`${IMAGE_BASE_URL}${movie.poster_path || movie.backdrop_path}`}
        alt={movie.title || movie.name}
        className="w-full h-auto rounded-lg"
        loading="lazy"
      />
      
      <div className="absolute inset-0 glass-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex flex-col justify-end p-4">
        <h3 className="font-bold text-lg mb-2">{movie.title || movie.name}</h3>
        <div className="flex items-center space-x-2 text-sm">
          <span className="text-green-400">★ {movie.vote_average.toFixed(1)}</span>
          <span className="text-gray-400">
            {movie.release_date?.split('-')[0] || movie.first_air_date?.split('-')[0]}
          </span>
        </div>
      </div>
    </div>
  );
}
