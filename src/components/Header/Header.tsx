import { Switch } from '@mui/material'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <Link className='logo' to={'/'}>
        Logo
      </Link>

      <nav>
        <ul className='nav'>
          <Switch />
          <li>
            <Link className='navlink' to={'/singup'}>
              Sign Up
            </Link>
          </li>
          <li>
            <Link className='navlink' to={'/singin'}>
              Sign In
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
