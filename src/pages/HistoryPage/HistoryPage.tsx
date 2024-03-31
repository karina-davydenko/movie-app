import {
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material'
import { useAppDispatch, useAppSelector } from '../../app/store/store'
import { getUserHistory } from '../../shared/reducers/Firestore/selectors'
import { useNavigate } from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/DeleteOutlined'
import { getUserId } from '../../shared/reducers/Auth/selectors'
import { deleteFromHistory } from '../../shared/reducers/Firestore/firestoreAction'

export default function HistoryPage() {
  const dispatch = useAppDispatch()
  const userId = useAppSelector(getUserId)
  function deleteHandler(keyword: string) {
    dispatch(deleteFromHistory({ userId, keyword }))
  }
  const history = useAppSelector(getUserHistory)
  const navigate = useNavigate()
  return (
    <List>
      {history?.map(keyword => (
        <ListItem
          key={keyword}
          disablePadding
          secondaryAction={
            <IconButton onClick={() => deleteHandler(keyword)}>
              <DeleteIcon />
            </IconButton>
          }
        >
          <ListItemButton
            sx={{ display: 'flex' }}
            onClick={() => navigate(`/search/${keyword}`)}
          >
            <ListItemText>{keyword}</ListItemText>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  )
}
