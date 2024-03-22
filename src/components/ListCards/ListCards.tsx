import {
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'

import { useNavigate } from 'react-router-dom'

type Film = {
  kinopoiskId?: number
  filmId?: number
  nameRu: string
  posterUrlPreview: string
}

type PropsListCards = {
  films: Film[]
}

export function ListCards({ films }: PropsListCards) {
  const nav = useNavigate()
  const handleClick = (id: number | undefined) => {
    if (id) {
      nav('/film/' + id)
    }
  }
  return (
    <Grid
      direction='row'
      justifyContent='space-between'
      container
      columnSpacing={4}
    >
      {films.map(film => {
        const id = film.kinopoiskId || film.filmId
        return (
          <Grid key={id} width='300px' height='500px' item>
            <Card>
              <CardActionArea onClick={() => handleClick(id)}>
                <CardMedia
                  component='img'
                  height='400'
                  image={film.posterUrlPreview}
                  alt='Paella dish'
                />

                <Typography
                  component='p'
                  sx={{
                    textDecoration: 'ellipsis',
                    fontSize: '18px',
                    padding: '5px',
                  }}
                >
                  {film.nameRu}
                </Typography>
              </CardActionArea>
              <CardActions disableSpacing sx={{ padding: 0 }}>
                <IconButton aria-label='add to favorites'>
                  <FavoriteIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        )
      })}
    </Grid>
  )
}
