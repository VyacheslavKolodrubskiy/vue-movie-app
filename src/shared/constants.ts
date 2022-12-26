import type { Categories, ImageSizes } from './types'

export const PASSWORD_MIN_LENGTH = 6

export const CATEGORIES: Categories[] = ['All', 'Movies', 'TV Series']

export const IMAGE_URL: Readonly<Record<ImageSizes, string>> = {
  original: 'https://image.tmdb.org/t/p/original',
  w500: 'https://image.tmdb.org/t/p/w500',
}

export const MEDIA_TYPES: Readonly<Record<Categories, string>> = {
  'All': 'all',
  'Movies': 'movie',
  'TV Series': 'tv',
}
