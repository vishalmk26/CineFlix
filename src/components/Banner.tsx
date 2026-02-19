import { useEffect, useState } from 'react';
import { Movie } from '../types/movie';
import { IMAGE_BASE_URL } from '../services/tmdb';
import { useNavigate } from 'react-router-dom';

interface BannerProps {
  movie: Movie;
}

export default function Banner({ movie }: BannerProps) {
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoaded(true);
  }, []);

  const truncate = (str: string, n: number) => {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  };

  return (
    <header
      className={`relative h-screen bg-cover bg-center transition-opacity duration-1000 ${
        loaded ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        backgroundImage: `url(${IMAGE_BASE_URL}${movie?.backdrop_path})`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      
      <div className="relative h-full flex flex-col justify-center px-8 md:px-16 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">
          {movie?.title || movie?.name}
        </h1>
        
        <p className="text-lg md:text-xl mb-8 max-w-2xl drop-shadow-lg">
          {truncate(movie?.overview, 150)}
        </p>

        <div className="flex space-x-4">
          <button
            onClick={() => navigate(`/details/${movie.id}`)}
            className="glass-dark px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition flex items-center space-x-2"
          >
            <span>▶</span>
            <span>Play</span>
          </button>
          <button
            onClick={() => navigate(`/details/${movie.id}`)}
            className="glass px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition"
          >
            More Info
          </button>
        </div>
      </div>
    </header>
  );
}
