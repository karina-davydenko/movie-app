import { Grid } from '@mui/material'
import { useAppSelector } from '../../app/store/store'
import { getUserFavorites } from '../../shared/reducers/Firestore/selectors'
import FavoriteFilmWrapper from '../../components/FavoriteFilmWrapper/FavoriteFilmWrapper'

export default function FavoritesPage() {
  const favorites = useAppSelector(getUserFavorites)
  return (
    <Grid direction='row' container columnSpacing={4}>
      {favorites.map(filmId => {
        return <FavoriteFilmWrapper key={filmId} filmId={filmId} />
      })}
    </Grid>
  )
}
