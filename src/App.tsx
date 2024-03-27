import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import { useAppSelector } from './app/store/store'
import SearchBar from './components/SearchBar/SearchBar'
import { useCheckAuth } from './shared/hooks/useCheckAuth'
import { getIsAuth } from './shared/reducers/Auth/selectors'

const App = () => {
  useCheckAuth()
  const isAuth = useAppSelector(getIsAuth)
  return (
    (isAuth && (
      <>
        <Header />
        <SearchBar />
        <Outlet />
      </>
    )) ||
    (!isAuth && <h1>Загрузка</h1>)
  )
}
export default App
