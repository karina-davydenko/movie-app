import { Grid } from '@mui/material'
import type { ResultFilms } from '../../app/store/api/transformResponses/types'
import FilmCard from '../Card/Card'
import PropTypes from 'prop-types'

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
        const { id, nameRu, posterUrlPreview } = film
        return (
          <FilmCard
            key={id}
            id={id}
            nameRu={nameRu}
            posterUrlPreview={posterUrlPreview}
          />
        )
      })}
    </Grid>
  )
}

ListCards.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      nameRu: PropTypes.string,
      posterUrlPreview: PropTypes.string,
    }),
  ),
}
