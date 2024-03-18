import {
  Card,
  CardActions,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'

type Film = {
  filmId: number
  nameRu: string
  posterUrlPreview: string
}

type PropsListCards = {
  films: Film[]
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
        <Grid width='300px' height='500px' item>
          <Card key={film.filmId}>
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
