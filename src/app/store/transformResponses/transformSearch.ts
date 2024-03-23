import type { ResultSearchFilms, SearchFilmsRes } from './types'

export const transformSearch = (res: SearchFilmsRes): ResultSearchFilms => {
  return {
    keyword: res.keyword || '',
    films:
      res.films?.map(movie => {
        return {
          id: movie.filmId || movie.kinopoiskId || null,
          nameRu: movie.nameRu || 'Нет названия',
          posterUrlPreview: movie.posterUrlPreview || 'Нет фото',
        }
      }) || [],
  }
}
