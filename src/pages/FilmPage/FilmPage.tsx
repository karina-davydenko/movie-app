import { useParams } from 'react-router-dom'
import { useGetMovieByIdQuery } from '../../app/store/kinopoiskApi'
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

export default function FilmPage() {
  const { film } = useParams()
  const { data } = useGetMovieByIdQuery(film)

  if (!data) {
    return <h1>Загрузка</h1>
  } else {
    const countries = data.countries.map(({ country }) => (
      <span key={country}> {country} </span>
    ))

    const genres = data.genres.map(({ genre }) => (
      <span key={genre}> {genre} </span>
    ))

    return (
      <Box justifyContent='center' display='flex' maxWidth={'xl'} gap='30px'>
        <img width='400px' src={data.posterUrl} alt={data.nameRu} />
        <Box display='flex' gap='30px' flexDirection='column'>
          <Box display='flex' gap='20px' flexDirection='column'>
            <Typography variant='h3'>{data.nameRu}</Typography>
            <Typography variant='h5'>{data.nameOriginal}</Typography>
          </Box>
          <Box flexBasis='content'>
            <Button
              size='large'
              variant='outlined'
              startIcon={<FavoriteBorderIcon />}
            >
              Избранное
            </Button>
          </Box>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>Год производста</TableCell>
                <TableCell>{data.year}</TableCell>
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
          <Typography variant='body1'>{data.description}</Typography>
        </Box>
      </Box>
    )
  }
}
