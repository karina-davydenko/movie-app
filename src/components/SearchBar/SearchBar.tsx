import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import { useEffect, useState } from 'react'

export const API_KEY = '1c68be81-6e26-4818-a996-38844f390f6b'

type PropsSearchBar = {
  setFilms: (v: any) => void
}

export default function SearchBar() {
  const [value, setValue] = useState<string>('')
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
    }
    fetchData()
  }, [value])
  return (
    <Autocomplete
      freeSolo
      filterOptions={x => x}
      options={[]}
      onChange={console.log}
      renderInput={params => <TextField {...params} label='Search movies' />}
      sx={{ paddingBottom: '20px' }}
    />
  )
}
