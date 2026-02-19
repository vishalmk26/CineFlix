import axios from 'axios';
import { Movie, MovieDetails } from '../types/movie';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

const tmdbApi = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export const getTrending = () => 
  tmdbApi.get<{ results: Movie[] }>('/trending/all/week');

export const getNetflixOriginals = () =>
  tmdbApi.get<{ results: Movie[] }>('/discover/tv', {
    params: { with_networks: 213 },
  });

export const getTopRated = () =>
  tmdbApi.get<{ results: Movie[] }>('/movie/top_rated');

export const getActionMovies = () =>
  tmdbApi.get<{ results: Movie[] }>('/discover/movie', {
    params: { with_genres: 28 },
  });

export const getComedyMovies = () =>
  tmdbApi.get<{ results: Movie[] }>('/discover/movie', {
    params: { with_genres: 35 },
  });

export const getHorrorMovies = () =>
  tmdbApi.get<{ results: Movie[] }>('/discover/movie', {
    params: { with_genres: 27 },
  });

export const getRomanceMovies = () =>
  tmdbApi.get<{ results: Movie[] }>('/discover/movie', {
    params: { with_genres: 10749 },
  });

export const getDocumentaries = () =>
  tmdbApi.get<{ results: Movie[] }>('/discover/movie', {
    params: { with_genres: 99 },
  });

export const getMovieDetails = (id: number) =>
  tmdbApi.get<MovieDetails>(`/movie/${id}`, {
    params: { append_to_response: 'videos' },
  });

export const searchMovies = (query: string) =>
  tmdbApi.get<{ results: Movie[] }>('/search/multi', {
    params: { query },
  });

export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original';
