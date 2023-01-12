const ActionType = {
  SET_lOGIN: 'SET_lOGIN'
}

function setLoginActionCreator (isLogin) {
  return {
    type: ActionType.SET_lOGIN,
    payload: { isLogin }
  }
}

export {
  ActionType,
  setLoginActionCreator
}
