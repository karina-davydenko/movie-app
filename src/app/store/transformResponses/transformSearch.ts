import type { Film, FilmsResponse, QueryReturnValue } from './types'

export const transformSearch = (res: FilmsResponse): QueryReturnValue => {
  return {
    keyword: res.keyword || '',
    films:
      res.films?.map((movie: Film) => {
        return {
          id: movie.filmId || movie.kinopoiskId || null,
          nameRu: movie.nameRu || 'Нет названия',
          posterUrlPreview: movie.posterUrlPreview || 'Нет фото',
        }
      }) || [],
  }
}
