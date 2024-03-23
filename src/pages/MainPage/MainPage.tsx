import { ListCards } from '../../components/ListCards/ListCards'
import { useGetTopMoviesQuery } from '../../app/store/kinopoiskApi'

export default function MainPage() {
  const { data } = useGetTopMoviesQuery()

  if (!data) {
    return <h1>Загрузка</h1>
  } else {
    const { films } = data

    return films[0] ? (
      <>
        <h1>Топ 20 фильмов</h1>
        <ListCards films={films} />
      </>
    ) : (
      <h1>Результаты по поиску отсутствуют</h1>
    )
  }
}
