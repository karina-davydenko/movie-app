import {
  AppBar,
  Box,
  Button,
  Container,
  CssBaseline,
  Slide,
  Switch,
  Toolbar,
  Typography,
  useScrollTrigger,
} from '@mui/material'
import { Link } from 'react-router-dom'
import './Header.css'
import { ReactElement } from 'react'

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

export default function Header() {
  return (
    <>
      <HideOnScroll>
        <AppBar
          className='header'
          color='default'
          sx={{ flexDirection: 'row' }}
        >
          <Link className='header-logo' to={'/'}>
            MoviesApp
          </Link>

          <nav className='header-nav'>
            <Switch />

            <Link className='nav-link' to={'/singup'}>
              <Button>Sign Up</Button>
            </Link>

            <Link className='nav-link' to={'/singin'}>
              <Button>Sign In</Button>
            </Link>
          </nav>
        </AppBar>
      </HideOnScroll>
    </>
  )
}
