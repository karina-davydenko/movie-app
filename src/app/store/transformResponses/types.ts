type Genre = {
  genre: string
}

type County = {
  country: string
}

export type FilmRes = {
  kinopoiskId?: number
  filmId?: number
  nameRu: string | null
  nameOriginal?: string | null
  posterUrl: string | null
  posterUrlPreview: string | null
  year: number | null
  countries: County[] | null
  genres: Genre[] | null
  description: string | null
}

export type SearchFilmsRes = {
  keyword: string
  films: FilmRes[]
}

export type ResultSearchFilms = {
  keyword: string
  films: ResultFilms[]
}

export type TopFilmsRes = {
  items: FilmRes[]
}

export type ResultTopFilms = {
  films: ResultFilms[]
}

export type ResultFilms = {
  id: number | null
  nameRu: string
  posterUrlPreview: string
}

export type ResultFilm = {
  id: number | undefined
  nameRu: string
  nameOriginal: string
  genres: Genre[]
  countries: County[]
  posterUrl: string
  year: string | number
  description: string
}
