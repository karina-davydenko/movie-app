import { useParams } from 'react-router-dom'
import { useGetSearchByKeywordQuery } from '../../app/store/kinopoiskApi'
import { ListCards } from '../../components/ListCards/ListCards'

export default function SearchPage() {
  const { search } = useParams()
  const { data } = useGetSearchByKeywordQuery({ query: search, page: '1' })
  if (data) {
    const { films } = data
    return films[0] ? (
      <ListCards films={films} />
    ) : (
      <h1>Совпадений не найдено</h1>
    )
  }
}
