import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import UserProfile from '../components/UserProfile'
import { asyncGetLeaderboards } from '../states/leaderboards/action'

function LeaderboardPage () {
  const dispatch = useDispatch()

  useEffect(() => { dispatch(asyncGetLeaderboards()) }, [])

  const { leaderboards } = useSelector(state => state)
  return (
    <div className="page-container">
      <h1 className="section-tag">Leaderboard</h1>
      <div className="leaderboard">
        {leaderboards.map(leader => {
          return <UserProfile
            key={leader.user.id}
            profilePicture={leader.user.avatar}
            userName={leader.user.name}
            score={leader.score}
          />
        })}
      </div>
    </div>
  )
}

export default LeaderboardPage
