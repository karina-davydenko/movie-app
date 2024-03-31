import { useGetMovieByIdQuery } from '../../app/store/api/kinopoiskApi'
import FilmCard from '../Card/Card'

export default function FavoritesPage({ filmId }: { filmId: number }) {
  const { data } = useGetMovieByIdQuery(filmId)
  if (data) {
    const film = {
      id: filmId,
      nameRu: data.nameRu,
      posterUrlPreview: data.posterUrlPreview,
    }

    return <FilmCard film={film} />
  }
}
