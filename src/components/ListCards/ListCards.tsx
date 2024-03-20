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
import { API_KEY } from '../SearchBar/SearchBar'

type Film = {
  kinopoiskId: number
  nameRu: string
  posterUrlPreview: string
}

type PropsListCards = {
  films: Film[]
}

const handleClick = (film: Film) => {
  console.log(film)
}

export function ListCards({ films }: PropsListCards) {
  return (
    <Grid
      direction='row'
      justifyContent='space-between'
      container
      columnSpacing={4}
    >
      {films.map(film => (
        <Grid key={film.kinopoiskId} width='300px' height='500px' item>
          <Card>
            <CardActionArea onClick={() => handleClick(film)}>
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
      ))}
    </Grid>
  )
}
