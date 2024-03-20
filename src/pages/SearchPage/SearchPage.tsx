import { useParams } from 'react-router-dom'
import { useGetSearchByKeywordQuery } from '../../app/store/kinopoiskApi'
import { ListCards } from '../../components/ListCards/ListCards'

export default function SearchPage() {
  const { search } = useParams()
  const { data } = useGetSearchByKeywordQuery(search)

  return data ? <ListCards films={data.films} /> : null
}
