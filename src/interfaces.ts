export interface Movie {
  adult: boolean
  in_production: boolean
  backdrop_path: string
  first_air_date: string
  last_air_date: string
  media_type: string
  number_of_episodes: number
  number_of_seasons: number
  name: string
  genres: Genre[]
  id: number
  original_title: string
  overview: string
  poster_path: string
  production_companies: ProductionCompany[]
  production_countries: ProductionCountry[]
  release_date: string
  revenue: number
  runtime: number
  status: string
  tagline: string
  title: string
  episode_run_time: number[]
  videos: Videos
  vote_average: number
  vote_count: number
}

interface Videos {
  results: Result[]
}

interface Result {
  iso_639_1: string
  iso_3166_1: string
  name: string
  key: string
  site: string
  size: number
  type: string
  official: boolean
  published_at: string
  id: string
}

interface ProductionCountry {
  iso_3166_1: string
  name: string
}

interface ProductionCompany {
  id: number
  logo_path?: string
  name: string
  origin_country: string
}

interface Genre {
  id: number
  name: string
}

export interface Actor {
  adult: boolean
  gender: number
  id: number
  known_for_department: string
  name: string
  original_name: string
  popularity: number
  profile_path: string
  poster_path: string
  cast_id: number
  character: string
  credit_id: string
  order: number
}

export interface Person {
  adult: boolean
  also_known_as: string[]
  biography: string
  birthday: string
  deathday?: any
  gender: number
  homepage?: any
  id: number
  imdb_id: string
  known_for_department: string
  name: string
  place_of_birth: string
  popularity: number
  profile_path: string
  images: Images
}

interface Images {
  profiles: Profile[]
}

interface Profile {
  aspect_ratio: number
  height: number
  iso_639_1?: any
  file_path: string
  vote_average: number
  vote_count: number
  width: number
}
