import { useEffect, useState } from 'react'
import SearchBar, { API_KEY } from '../../components/SearchBar/SearchBar'
import { ListCards } from '../../components/ListCards/ListCards'

export default function MainPage() {
  const [items, setItems] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        'https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_POPULAR_MOVIES&page=1',
        {
          method: 'GET',
          headers: {
            'X-API-KEY': API_KEY,
          },
        },
      )
      const data = await res.json()

      setItems(data.items)
    }
    fetchData()
  }, [])

  return (
    <div className='main'>
      <SearchBar />
      <h1>Топ 20 фильмов</h1>
      <ListCards films={items} />
    </div>
  )
}
