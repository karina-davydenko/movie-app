import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import SearchBar from './components/SearchBar/SearchBar'
import { useCheckAuth } from './shared/hooks/useCheckAuth'
import { getIsLoadingAuth } from './shared/reducers/Auth/selectors'
import { useAppSelector } from './app/store/store'
import { ErrorBoundary } from 'react-error-boundary'

const App = () => {
  useCheckAuth()
  const isLoadingAuth = useAppSelector(getIsLoadingAuth)
  return isLoadingAuth ? (
    <h1>Проверка авторизации</h1>
  ) : (
    <ErrorBoundary fallback={<h1>Что-то пошло не так!</h1>}>
      <Header />
      <SearchBar />
      <Outlet />
    </ErrorBoundary>
  )
}
export default App
