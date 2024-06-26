import { useParams } from 'react-router-dom'
import { useGetMovieByIdQuery } from '../../app/store/api/kinopoiskApi'
import Film from '../../components/Film/Film'

export default function FilmPage() {
  const { film } = useParams()
  const { data, isError, isLoading } = useGetMovieByIdQuery(film)

  if (typeof data === 'undefined') {
    return
  }
  return isLoading ? (
    <h1>Loading..</h1>
  ) : isError ? (
    <h1>Ошибка получения данных</h1>
  ) : (
    <Film dataFilm={data} />
  )
}
