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
