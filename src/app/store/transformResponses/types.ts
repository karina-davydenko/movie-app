export type Film = {
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

export type FilmsResponse = {
  keyword: string
  films?: Film[]
  items?: Film[]
}

export type ReturnValue = {
  id: number | null
  nameRu: string
  posterUrlPreview: string
}
export type QueryReturnValue = {
  keyword: string
  films: ReturnValue[]
}

type Genre = {
  genre: string
}

type County = {
  country: string
}
