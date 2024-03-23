import type { Film } from './types'

export const transformMovieById = (movie: Film) => {
  return {
    id: movie.kinopoiskId,
    nameRu: movie.nameRu || 'Нет названия',
    nameOriginal: movie.nameOriginal || 'Нет названия',
    genres: movie.genres || [{ genre: 'Не известно' }],
    countries: movie.countries || [{ country: 'Не известно' }],
    posterUrl: movie.posterUrl || 'Нет фото',
    year: movie.year || 'Не известно',
    description: movie.description || 'Нет описания',
  }
}
