import { ActionType } from './action'

function leaderboardsReducer (leaderboards = [], action = {}) {
  switch (action.type) {
    case ActionType.STORE_LEADERBOARDS:
      return action.payload.leaderboards
    default:
      return leaderboards
  }
}

export default leaderboardsReducer
