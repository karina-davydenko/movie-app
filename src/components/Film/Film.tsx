import {
  Box,
  Typography,
  Button,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from '@mui/material'
import { ResultFilm } from '../../app/store/api/transformResponses/types'
import { useFavorites } from '../../shared/hooks/useFavorites'

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

type Props = {
  dataFilm: ResultFilm
}

export default function Film({ dataFilm }: Props) {
  const { isFavorites, handleFavorites } = useFavorites(dataFilm.id)

  const countries = dataFilm.countries.map(({ country }) => (
    <span key={country}> {country} </span>
  ))

  const genres = dataFilm.genres.map(({ genre }) => (
    <span key={genre}> {genre} </span>
  ))

  return (
    <Box justifyContent='center' display='flex' maxWidth={'xl'} gap='30px'>
      <img width='400px' src={dataFilm.posterUrl} alt={dataFilm.nameRu} />
      <Box display='flex' gap='30px' flexDirection='column'>
        <Box display='flex' gap='20px' flexDirection='column'>
          <Typography variant='h3'>{dataFilm.nameRu}</Typography>
          <Typography variant='h5'>{dataFilm.nameOriginal}</Typography>
        </Box>
        <Box flexBasis='content'>
          <Button
            onClick={handleFavorites}
            size='large'
            variant={isFavorites ? 'contained' : 'outlined'}
            startIcon={<FavoriteBorderIcon />}
          >
            {isFavorites ? 'Удалить из избранного' : 'Добавить в избранное'}
          </Button>
        </Box>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Год производста</TableCell>
              <TableCell>{dataFilm.year}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Страна</TableCell>
              <TableCell>{...countries}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Жанр</TableCell>
              <TableCell>{...genres}</TableCell>
            </TableRow>
            <TableRow></TableRow>
          </TableBody>
        </Table>
        <Typography variant='body1'>{dataFilm.description}</Typography>
      </Box>
    </Box>
  )
}
