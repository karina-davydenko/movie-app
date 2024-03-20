import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import { useNavigate } from 'react-router-dom'

export const API_KEY = '1c68be81-6e26-4818-a996-38844f390f6b'

type PropsSearchBar = {
  setFilms: (v: any) => void
}

export default function SearchBar() {
  const nav = useNavigate()

  function handleOnChange(e, value: string | null) {
    nav('/search/' + value)
  }

  return (
    <Autocomplete
      freeSolo
      filterOptions={x => x}
      options={[]}
      onChange={handleOnChange}
      renderInput={params => <TextField {...params} label='Search movies' />}
      sx={{ padding: '100px' }}
    />
  )
}
