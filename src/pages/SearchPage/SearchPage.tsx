import { useParams } from 'react-router-dom'
import { useGetSearchByKeywordQuery } from '../../app/store/kinopoiskApi'
import { ListCards } from '../../components/ListCards/ListCards'

export default function SearchPage() {
  const { search } = useParams()
  const { data } = useGetSearchByKeywordQuery({ query: search, page: '1' })

  if (!data) {
    return <h1>Загрузка</h1>
  } else {
    const { films } = data

    return films[0] ? (
      <ListCards films={data.films} />
    ) : (
      <h1>Результаты по поиску отсутствуют</h1>
    )
  }
}
