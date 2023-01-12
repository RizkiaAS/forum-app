import { ActionType } from './action'

function isLoginReducer (isLogin = false, action = {}) {
  switch (action.type) {
    case ActionType.SET_lOGIN:
      return action.payload.isLogin
    default:
      return isLogin
  }
}

export default isLoginReducer
