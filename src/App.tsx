import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import SearchBar from './components/SearchBar/SearchBar'
import { useCheckAuth } from './shared/hooks/useCheckAuth'
import { getIsLoadingAuth } from './shared/reducers/Auth/selectors'
import { useAppSelector } from './app/store/store'

const App = () => {
  useCheckAuth()
  const isLoadingAuth = useAppSelector(getIsLoadingAuth)
  return isLoadingAuth ? (
    <h1>Проверка авторизации</h1>
  ) : (
    <>
      <Header />
      <SearchBar />
      <Outlet />
    </>
  )
}
export default App
