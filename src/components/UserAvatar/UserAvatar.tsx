import { Box, Tooltip, IconButton, Menu, MenuItem, Avatar } from '@mui/material'
import { useState } from 'react'
import { Link } from 'react-router-dom'

type PropsUser = {
  name: string
}

export default function UserAvatar({ name }: PropsUser) {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null)

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }
  return (
    <Box>
      <Tooltip title='Open settings'>
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, flexGrow: 0 }}>
          <Avatar alt={name} src='/static/images/avatar/2.jpg' />
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
          <Link to={'/profile'}>Profile</Link>
        </MenuItem>
        <MenuItem onClick={handleCloseUserMenu}>
          <Link to={'/favorites'}>Favorites</Link>
        </MenuItem>
        <MenuItem onClick={handleCloseUserMenu}>
          <Link to={'/history'}>History</Link>
        </MenuItem>
        <MenuItem onClick={handleCloseUserMenu}>
          <Link to={'/'}>Logout</Link>
        </MenuItem>
      </Menu>
    </Box>
  )
}
