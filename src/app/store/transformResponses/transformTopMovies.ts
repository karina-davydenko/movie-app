import type { ResultTopFilms, TopFilmsRes } from './types'

export const transformTopMovies = (res: TopFilmsRes): ResultTopFilms => {
  return {
    films:
      res.items?.map(movie => {
        return {
          id: movie.filmId || movie.kinopoiskId || null,
          nameRu: movie.nameRu || 'Нет названия',
          posterUrlPreview: movie.posterUrlPreview || 'Нет фото',
        }
      }) || [],
  }
}
