import { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import MovieRow from '../components/MovieRow';
import ContinueWatching from '../components/ContinueWatching';
import { Movie } from '../types/movie';
import * as tmdb from '../services/tmdb';

export default function Home() {
  const [featuredMovie, setFeaturedMovie] = useState<Movie | null>(null);

  useEffect(() => {
    tmdb.getTrending().then((res) => {
      const movies = res.data.results;
      setFeaturedMovie(movies[Math.floor(Math.random() * movies.length)]);
    });
  }, []);

  return (
    <div className="min-h-screen">
      {featuredMovie && <Banner movie={featuredMovie} />}
      
      <div className="relative -mt-32 z-10 space-y-8">
        <ContinueWatching />
        <MovieRow title="Trending Now" fetchMovies={tmdb.getTrending} />
        <MovieRow title="Netflix Originals" fetchMovies={tmdb.getNetflixOriginals} />
        <MovieRow title="Top Rated" fetchMovies={tmdb.getTopRated} />
        <MovieRow title="Action Movies" fetchMovies={tmdb.getActionMovies} />
        <MovieRow title="Comedy Movies" fetchMovies={tmdb.getComedyMovies} />
        <MovieRow title="Horror Movies" fetchMovies={tmdb.getHorrorMovies} />
        <MovieRow title="Romance Movies" fetchMovies={tmdb.getRomanceMovies} />
        <MovieRow title="Documentaries" fetchMovies={tmdb.getDocumentaries} />
      </div>
    </div>
  );
}
