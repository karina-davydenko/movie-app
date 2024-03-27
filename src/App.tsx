import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import SearchBar from './components/SearchBar/SearchBar'
import { useCheckAuth } from './shared/hooks/useCheckAuth'
import { getIsLoadingAuth } from './shared/reducers/Auth/selectors'
import { useSelector } from 'react-redux'

const App = () => {
  useCheckAuth()
  const isLoadingAuth = useSelector(getIsLoadingAuth)
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
