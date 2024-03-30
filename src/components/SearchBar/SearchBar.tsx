import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'

import { useParams } from 'react-router-dom'
import { useHistory } from '../../shared/hooks/useAddHistory'

export default function SearchBar() {
  const { search } = useParams()
  const handleOnChange = useHistory()

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
