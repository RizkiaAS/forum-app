import CustomHeader from './components/CustomHeader'
import { Routes, Route } from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'
import CustomFooter from './components/CustomFooter'
import LoginPage from './pages/LoginPage'
import DetailThreadPage from './pages/DetailThreadPage'
import LeaderboardPage from './pages/LeaderboardPage'
import HomePage from './pages/HomePage'
import MissingPage from './pages/MissingPage'
import { useDispatch } from 'react-redux'
import { asyncStoreProfile } from './states/ownProfile/action'
import { useEffect } from 'react'
import Loading from './components/Loading'

function App () {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(asyncStoreProfile())
  }, [])

  return (
    <div className="App">
      <CustomHeader/>
      <Loading />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/detail/:id" element={<DetailThreadPage />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
          <Route path="*" element={<MissingPage />} />
        </Routes>
      </main>

      <CustomFooter />
    </div>
  )
}

export default App
