import { hideLoading, showLoading } from 'react-redux-loading-bar'
import { api } from '../../tools'

const ActionType = { STORE_LEADERBOARDS: 'STORE_LEADERBOARDS' }

function storeLeaderboardsActionCreator (leaderboards) {
  return {
    type: ActionType.STORE_LEADERBOARDS,
    payload: { leaderboards }
  }
}

function asyncGetLeaderboards () {
  return async dispatch => {
    dispatch(showLoading())
    try {
      const leaderboards = await api.getLeaderboards()
      dispatch(storeLeaderboardsActionCreator(leaderboards))
    } catch (error) {
      alert(error.message)
    } finally {
      dispatch(hideLoading())
    }
  }
}

export {
  ActionType,
  storeLeaderboardsActionCreator,
  asyncGetLeaderboards
}
