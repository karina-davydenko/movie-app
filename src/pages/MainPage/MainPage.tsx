import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'

export default function MainPage() {
  return (
    <div className='main'>
      <Autocomplete
        freeSolo
        id='free-solo-2-demo'
        disableClearable
        options={['clearable', 'disableClearable', 'disableClearable']}
        renderInput={params => (
          <TextField
            {...params}
            label='Search input'
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      />

      <section className='cards'></section>
    </div>
  )
}
