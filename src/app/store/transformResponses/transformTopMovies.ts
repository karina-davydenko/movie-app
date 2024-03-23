import type { FilmsResponse, QueryReturnValue, Film } from './types'

export const transformTopMovies = (res: FilmsResponse): QueryReturnValue => {
  return {
    keyword: res.keyword || '',
    films:
      res.items?.map((movie: Film) => {
        return {
          id: movie.filmId || movie.kinopoiskId || null,
          nameRu: movie.nameRu || 'Нет названия',
          posterUrlPreview: movie.posterUrlPreview || 'Нет фото',
        }
      }) || [],
  }
}
