import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './users/reducer'
import ownProfileReducer from './ownProfile/reducer'
import threadsReducer from './threads/reducer'
import threadReducer from './thread/reducer'
import isLoginReducer from './isLogin/reducer'
import leaderboardsReducer from './leaderboards/reducer'
import { loadingBarReducer } from 'react-redux-loading-bar'

const store = configureStore({
  reducer: {
    users: usersReducer,
    ownProfile: ownProfileReducer,
    threads: threadsReducer,
    thread: threadReducer,
    isLogin: isLoginReducer,
    leaderboards: leaderboardsReducer,
    loadingBar: loadingBarReducer
  }
})

export default store
