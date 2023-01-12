import { ActionType } from './action'

function ownProfileReducer (ownProfile = {}, action = {}) {
  switch (action.type) {
    case ActionType.STORE_OWN_PROFILE:
      return action.payload.ownProfile
    case ActionType.DISCARD_OWN_PROFILE:
      return {}
    default:
      return ownProfile
  }
}

export default ownProfileReducer
