import { hideLoading, showLoading } from 'react-redux-loading-bar'
import { api, local } from '../../tools'
import { setLoginActionCreator } from '../isLogin/action'

const ActionType = {
  STORE_OWN_PROFILE: 'STORE_OWN_PROFILE',
  DISCARD_OWN_PROFILE: 'DISCARD_ACCESS_TOKEN'
}

function storeOwnProfileActionCreator (ownProfile) {
  return {
    type: ActionType.STORE_OWN_PROFILE,
    payload: { ownProfile }
  }
}

function discardOwnProfileActionCreator () {
  return { type: ActionType.DISCARD_OWN_PROFILE }
}

function asyncGetTokenAndStoreProfile (email, password, navigateFunction, path) {
  return async dispatch => {
    dispatch(showLoading())
    try {
      const token = await api.login(email, password)
      local.putAccessToken(token)
      const ownProfile = await api.getOwnProfile(local.getAccessToken())
      dispatch(storeOwnProfileActionCreator(ownProfile))
      dispatch(setLoginActionCreator(true))
      navigateFunction(path)
    } catch (error) {
      alert(error.message)
    } finally {
      dispatch(hideLoading())
    }
  }
}

function asyncStoreProfile () {
  return async dispatch => {
    dispatch(showLoading())
    try {
      const ownProfile = await api.getOwnProfile(local.getAccessToken())
      dispatch(storeOwnProfileActionCreator(ownProfile))
      dispatch(setLoginActionCreator(true))
    } catch (error) {
      dispatch(setLoginActionCreator(false))
    } finally {
      dispatch(hideLoading())
    }
  }
}

function discardProfile () {
  return dispatch => {
    local.removeAccessToken()
    dispatch(discardOwnProfileActionCreator())
    dispatch(setLoginActionCreator(false))
  }
}

export {
  ActionType,
  storeOwnProfileActionCreator,
  discardOwnProfileActionCreator,
  asyncGetTokenAndStoreProfile,
  asyncStoreProfile,
  discardProfile
}
