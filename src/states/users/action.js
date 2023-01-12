import { hideLoading, showLoading } from 'react-redux-loading-bar'
import { api } from '../../tools'

const ActionType = {
  STORE_USERS: 'STORE_USERS'
}

function storeUsersActionCreator (users) {
  return {
    type: ActionType.STORE_USERS,
    payload: { users }
  }
}

function asyncRegisterUser (name, email, password, navigateFunction, path) {
  return async dispatch => {
    dispatch(showLoading())
    try {
      const registeredUser = await api.register(name, email, password)
      alert(`user ${registeredUser} berhasil didaftarkan`)
      navigateFunction(path)
    } catch (error) {
      alert(error.message)
    } finally {
      dispatch(hideLoading())
    }
  }
}

function asyncGetAllUsers () {
  return async dispatch => {
    dispatch(showLoading())
    try {
      const users = await api.getUsers()
      dispatch(storeUsersActionCreator(users))
    } catch (error) {
      alert(error.message)
    } finally {
      dispatch(hideLoading())
    }
  }
}

export { ActionType, asyncRegisterUser, asyncGetAllUsers }
