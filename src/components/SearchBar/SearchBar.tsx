import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'

import { useNavigate, useParams } from 'react-router-dom'
import { useHistory } from '../../shared/hooks/useAddHistory'
import { useState } from 'react'
import { useGetSearchByKeywordQuery } from '../../app/store/api/kinopoiskApi'
import { useDebounce } from '../../shared/hooks/useDebounce'
import { Box } from '@mui/material'

export default function SearchBar() {
  const { search } = useParams()
  const handleOnChange = useHistory()
  const [inputValue, setInputValue] = useState('')
  const deb = useDebounce(inputValue, 500)
  const { data } = useGetSearchByKeywordQuery({ query: deb, page: '1' })
  const options = data?.films
  const navigate = useNavigate()
  const handleClick = (id: number) => {
    navigate('/film/' + id)
  }

  return (
    <Autocomplete
      freeSolo
      filterOptions={x => x}
      options={options || []}
      onChange={handleOnChange}
      getOptionLabel={option =>
        typeof option === 'string' ? option : option.nameRu
      }
      onInputChange={(e, newValue) => {
        setInputValue(newValue)
      }}
      value={search}
      inputValue={inputValue}
      renderInput={params => <TextField {...params} label='Search movies' />}
      sx={{ margin: '100px' }}
      renderOption={(props, option) => (
        <Box
          {...props}
          onClick={() => handleClick(option.id)}
          sx={{
            borderRadius: '8px',
            margin: '5px',
          }}
          component='li'
          key={option.id}
        >
          {option.nameRu}
        </Box>
      )}
    />
  )
}
