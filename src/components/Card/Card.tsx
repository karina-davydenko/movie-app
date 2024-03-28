import {
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  Checkbox,
  Grid,
  Typography,
} from '@mui/material'

import { useNavigate } from 'react-router-dom'
import { Favorite, FavoriteBorder } from '@mui/icons-material'
import type { ResultFilms } from '../../app/store/api/transformResponses/types'
import { useFavorites } from '../../shared/hooks/useFavorites'

export default function FilmCard({ film }: { film: ResultFilms }) {
  const navigate = useNavigate()

  const handleClick = (id: number | null) => {
    if (id) {
      navigate('/film/' + id)
    }
  }

  const { isFavorites, handleFavorites } = useFavorites(film.id || 1)
  return (
    <Grid width='300px' height='500px' item>
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
          <Checkbox
            checked={isFavorites}
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite />}
            onChange={handleFavorites}
          />
        </CardActions>
      </Card>
    </Grid>
  )
}
