export type MovieType = {
  adult: boolean;
  backdrop_path: string;
  genre_ids?: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  credits?: CreditsType;
};

export type GenresType = {
  id: number;
  name: string;
};

export type ProductionCompaniesType = {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
};
export type ProductionCountriesType = {
  iso_3166_1: string;
  name: string;
};
export type SpokenLanguagesType = {
  english_name: string;
  iso_639_1: string;
  name: string;
};

export type CastType = {
  adult: boolean;
  cast_id: number;
  character: string;
  credit_id: string;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  order: number;
  original_name: string;
  popularity: number;
  profile_path: string;
};
export type CrewType = {
  adult: boolean;
  credit_id: string;
  department: string;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  job: string;
  original_name: string;
  popularity: number;
  profile_path: string;
};
export type CreditsType = {
  cast: CastType[];
  crew: CrewType[];
};

export type MovieDetailType = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null;
  budget: number;
  genres: GenresType[];
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompaniesType[];
  production_countries: ProductionCountriesType[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguagesType[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  credits: CreditsType;
};
export type PopularType = {
  page: number;
  results: MovieType[];
  total_pages: number;
  total_results: number;
};


export type ratedTypes = {
  page: number;
  results: MovieType[];
  total_pages: number;
  total_results: number;
};
