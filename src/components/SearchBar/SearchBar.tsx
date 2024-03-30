import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import type { SyntheticEvent } from 'react'

import { useNavigate, useParams } from 'react-router-dom'

export default function SearchBar() {
  const nav = useNavigate()
  const { search } = useParams()

  function handleOnChange(
    e: SyntheticEvent,
    value: string | null,
    reason: string,
  ) {
    if (reason === 'clear') {
      return
    }
    nav('/search/' + value)
  }

  return (
    <Autocomplete
      freeSolo
      filterOptions={x => x}
      options={[]}
      onChange={handleOnChange}
      value={search}
      renderInput={params => <TextField {...params} label='Search movies' />}
      sx={{ padding: '100px' }}
    />
  )
}
