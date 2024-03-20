import {
  AppBar,
  Box,
  Button,
  Container,
  Slide,
  Switch,
  Toolbar,
  Typography,
  useScrollTrigger,
} from '@mui/material'
import type { ReactElement } from 'react'

import AdbIcon from '@mui/icons-material/Adb'
import UserAvatar from '../UserAvatar/UserAvatar'
import { Link } from 'react-router-dom'

interface Props {
  window?: () => Window
  children: ReactElement
}

function HideOnScroll({ children, window }: Props) {
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  })

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  )
}

let logOut: boolean = true

export default function Header() {
  return (
    <HideOnScroll>
      <AppBar position='fixed' color='default'>
        <Container maxWidth='xl'>
          <Toolbar
            disableGutters
            sx={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <Box sx={{ display: 'flex', flexGrow: 1 }}>
              <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
              <Typography
                variant='h6'
                noWrap
                component='a'
                href='/'
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                LOGO
              </Typography>

              <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
              <Typography
                variant='h5'
                noWrap
                component='a'
                href='/'
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                LOGO
              </Typography>
            </Box>
            {logOut ? (
              <Box>
                <Link to='/singin'>
                  <Button>Sing In</Button>
                </Link>
                <Link to='/singout'>
                  <Button>Sing Out</Button>
                </Link>
              </Box>
            ) : (
              <UserAvatar name='wpk' />
            )}
            <Switch />
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  )
}
