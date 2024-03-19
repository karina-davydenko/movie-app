import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import { useEffect } from 'react'

const API_KEY = '1c68be81-6e26-4818-a996-38844f390f6b'

type PropsSearch = {
  value: string
  setValue: (v: string) => void
  setFilms: (v: any) => void
}

export default function Search({ value, setValue, setFilms }: PropsSearch) {
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${value}&page=1`,
        {
          method: 'GET',
          headers: {
            'X-API-KEY': API_KEY,
          },
        },
      )
      const dats = await res.json()
      setFilms(dats.films)
    }
    fetchData()
  }, [value])
  return (
    <Autocomplete
      freeSolo
      id='free-solo-2-demo'
      disableClearable
      filterOptions={x => x}
      options={[]}
      onChange={(event: any, newValue) => {
        setValue(newValue)
      }}
      renderInput={params => <TextField {...params} label='Search input' />}
    />
  )
}
