import { Box, Tooltip, IconButton, Menu, MenuItem, Avatar } from '@mui/material'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getUserEmail } from '../../shared/reducers/Firestore/Auth/selectors'

export default function UserAvatar() {
  const userEmail = useSelector(getUserEmail)
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null)

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }
  return (
    <Box>
      <Tooltip title='Ваш профиль'>
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, flexGrow: 0 }}>
          <Avatar alt={userEmail || ''} src='/static/images/avatar/2.jpg' />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        id='menu-appbar'
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <MenuItem onClick={handleCloseUserMenu}>
          <Link to={'/profile'}>{userEmail}</Link>
        </MenuItem>
        <MenuItem onClick={handleCloseUserMenu}>
          <Link to={'/favorites'}>Избранное</Link>
        </MenuItem>
        <MenuItem onClick={handleCloseUserMenu}>
          <Link to={'/history'}>История</Link>
        </MenuItem>
        <MenuItem onClick={handleCloseUserMenu}>
          <Link to={'/'}>Выход</Link>
        </MenuItem>
      </Menu>
    </Box>
  )
}
