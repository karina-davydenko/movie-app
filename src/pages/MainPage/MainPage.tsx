import { useState } from 'react'
import SearchBar from '../../components/Search/Search'

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
  const [films, setFilms] = useState<Film[]>([])
  return (
    <div className='main'>
      <SearchBar setFilms={setFilms} />
      {films.length !== 0 ? (
        <section className='cards-films'>
          {films.map(film => {
            return (
              <div>
                <p>{film.nameRu}</p>
                <img src={film.posterUrlPreview} alt='' />
                <p>{film.year}</p>
                <p>{film.genres[0]['genre']}</p>
              </div>
            )
          })}
        </section>
      ) : (
        <h1>Результатов нет</h1>
      )}
    </div>
  )
}
