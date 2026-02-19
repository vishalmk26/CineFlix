import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MovieDetails } from '../types/movie';
import { getMovieDetails, IMAGE_BASE_URL } from '../services/tmdb';
import VideoPlayer from '../components/VideoPlayer';

export default function Details() {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<MovieDetails | null>(null);
  const [showPlayer, setShowPlayer] = useState(false);
  const [inMyList, setInMyList] = useState(false);

  useEffect(() => {
    if (id) {
      getMovieDetails(Number(id)).then((res) => setMovie(res.data));
      const myList = JSON.parse(localStorage.getItem('myList') || '[]');
      setInMyList(myList.includes(Number(id)));
    }
  }, [id]);

  const toggleMyList = () => {
    const myList = JSON.parse(localStorage.getItem('myList') || '[]');
    if (inMyList) {
      const updated = myList.filter((movieId: number) => movieId !== Number(id));
      localStorage.setItem('myList', JSON.stringify(updated));
      setInMyList(false);
    } else {
      myList.push(Number(id));
      localStorage.setItem('myList', JSON.stringify(myList));
      setInMyList(true);
    }
  };

  if (!movie) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

  const trailer = movie.videos?.results.find(
    (video) => video.type === 'Trailer' && video.site === 'YouTube'
  );

  return (
    <div className="min-h-screen">
      <div
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${IMAGE_BASE_URL}${movie.backdrop_path})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
        
        <div className="relative h-full flex flex-col justify-end px-8 md:px-16 pb-24 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">{movie.title}</h1>
          
          <div className="flex items-center space-x-4 mb-4 text-lg">
            <span className="text-green-400">★ {movie.vote_average.toFixed(1)}</span>
            <span>{movie.release_date?.split('-')[0]}</span>
            <span>{movie.runtime} min</span>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {movie.genres.map((genre) => (
              <span key={genre.id} className="glass px-3 py-1 rounded-full text-sm">
                {genre.name}
              </span>
            ))}
          </div>

          {movie.tagline && (
            <p className="text-xl italic text-gray-300 mb-4">"{movie.tagline}"</p>
          )}

          <p className="text-lg mb-8 max-w-3xl">{movie.overview}</p>

          <div className="flex space-x-4">
            {trailer && (
              <button
                onClick={() => setShowPlayer(true)}
                className="glass-dark px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition flex items-center space-x-2"
              >
                <span>▶</span>
                <span>Play Trailer</span>
              </button>
            )}
            <button
              onClick={toggleMyList}
              className="glass px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition flex items-center space-x-2"
            >
              <span>{inMyList ? '✓' : '+'}</span>
              <span>{inMyList ? 'In My List' : 'Add to List'}</span>
            </button>
          </div>
        </div>
      </div>

      {showPlayer && trailer && (
        <VideoPlayer videoKey={trailer.key} onClose={() => setShowPlayer(false)} />
      )}
    </div>
  );
}
