import { useEffect, useState } from 'react'
import SearchBar, { API_KEY } from '../../components/SearchBar/SearchBar'
import { ListCards } from '../../components/ListCards/ListCards'

type Genre = {
  genre: string
}

type Film = {
  filmId: number
  nameRu: string
  genres: Genre[]
  posterUrlPreview: string
  year: string
}

export default function MainPage() {
  const [items, setItems] = useState<Film[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        'https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_POPULAR_MOVIES&page=1',
        {
          method: 'GET',
          headers: {
            'X-API-KEY': '0151e40e-32be-43a0-977d-0cb0257f5604',
          },
        },
      )
      const data = await res.json()
      console.log(data)
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
