import { useGetMovieByIdQuery } from '../../app/store/api/kinopoiskApi'
import FilmCard from '../Card/Card'

export default function FavoritesPage({ filmId }: { filmId: number }) {
  const { data } = useGetMovieByIdQuery(filmId)
  if (data) {
    return (
      <FilmCard
        id={filmId}
        nameRu={data.nameRu}
        posterUrlPreview={data.posterUrlPreview}
      />
    )
  }
}
