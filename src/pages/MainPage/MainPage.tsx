import { ListCards } from '../../components/ListCards/ListCards'
import { useGetTopMoviesQuery } from '../../app/store/kinopoiskApi'

export default function MainPage() {
  const { data } = useGetTopMoviesQuery(null)

  if (data) {
    const { items } = data
    return (
      <>
        <h1>Топ 20 фильмов</h1>
        <ListCards films={items} />
      </>
    )
  }
}
