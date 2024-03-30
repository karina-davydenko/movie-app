import { Grid } from '@mui/material'
import type { ResultFilms } from '../../app/store/api/transformResponses/types'
import FilmCard from '../Card/Card'

type PropsListCards = {
  films: ResultFilms[]
}

export function ListCards({ films }: PropsListCards) {
  return (
    <Grid
      direction='row'
      justifyContent='space-between'
      container
      columnSpacing={4}
    >
      {films.map(film => {
        return <FilmCard key={film.id} film={film} />
      })}
    </Grid>
  )
}
