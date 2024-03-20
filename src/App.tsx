import { Suspense } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import { Provider } from 'react-redux'
import { store } from './app/store'
import SearchBar from './components/SearchBar/SearchBar'

const App = () => {
  return (
    <Provider store={store}>
      <Suspense fallback={'Loading'}>
        <Header />
        <SearchBar />
        <Outlet />
      </Suspense>
    </Provider>
  )
}
export default App
