import { useState } from 'react'
import Search from '../../components/Search/Search'

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
  const [value, setValue] = useState<string>('')
  const [films, setFilms] = useState<Film[] | null>(null)
  return (
    <div className='main'>
      <Search value={value} setValue={setValue} setFilms={setFilms} />

      <section className='cards-films'>
        {films ? (
          films.map(film => {
            return (
              <div>
                <p>{film.nameRu}</p>
                <img src={film.posterUrlPreview} alt='' />
                <p>{film.year}</p>
                <p>{film.genres[0]['genre']}</p>
              </div>
            )
          })
        ) : (
          <h1>Нет</h1>
        )}
      </section>
    </div>
  )
}
