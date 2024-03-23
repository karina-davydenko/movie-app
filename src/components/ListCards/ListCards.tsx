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
import type { ReturnValue } from '../../app/store/transformResponses/types'

type PropsListCards = {
  films: ReturnValue[]
}

export function ListCards({ films }: PropsListCards) {
  const navigate = useNavigate()

  const handleClick = (id: number | null) => {
    if (id) {
      navigate('/film/' + id)
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
        return (
          <Grid key={film.id} width='300px' height='500px' item>
            <Card>
              <CardActionArea onClick={() => handleClick(film.id)}>
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
