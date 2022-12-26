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
  also_known_as: string[]
  biography: string
  birthday: string
  deathday?: any
  homepage?: any
  imdb_id: string
  place_of_birth: string
  images: Images
}

interface Images {
  profiles: Profile[]
}

export interface Profile {
  aspect_ratio: number
  height: number
  iso_639_1?: any
  file_path: string
  vote_average: number
  vote_count: number
  width: number
}
