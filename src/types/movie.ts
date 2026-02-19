export interface Movie {
  id: number;
  title: string;
  name?: string;
  original_title?: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  release_date: string;
  first_air_date?: string;
  media_type?: string;
}

export interface MovieDetails extends Movie {
  genres: { id: number; name: string }[];
  runtime: number;
  status: string;
  tagline: string;
  videos?: {
    results: Video[];
  };
}

export interface Video {
  id: string;
  key: string;
  name: string;
  site: string;
  type: string;
}
