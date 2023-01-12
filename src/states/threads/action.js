import { hideLoading, showLoading } from 'react-redux-loading-bar'
import { api, local } from '../../tools'

const ActionType = {
  STORE_ALL_THREADS: 'STORE_ALL_THREADS',
  ADD_THREAD: 'ADD_THREAD',
  UPVOTE_A_THREAD: 'UPVOTE_A_THREAD',
  DOWNVOTE_A_THREAD: 'DOWNVOTE_A_THREAD'
}

function storeAllThreadsActionCreator (threads) {
  return {
    type: ActionType.STORE_ALL_THREADS,
    payload: { threads }
  }
}

function addThreadActionCreator (newThread) {
  return {
    type: ActionType.ADD_THREAD,
    payload: { newThread }
  }
}

function upVoteAThreadActionCreator (threadId, newVoter) {
  return {
    type: ActionType.UPVOTE_A_THREAD,
    payload: {
      threadId,
      newVoter
    }
  }
}

function downVoteAThreadActionCreator (threadId, newVoter) {
  return {
    type: ActionType.DOWNVOTE_A_THREAD,
    payload: {
      threadId,
      newVoter
    }
  }
}

function asyncGetAllThreads () {
  return async dispatch => {
    dispatch(showLoading())
    try {
      const threads = await api.getAllThreads()
      dispatch(storeAllThreadsActionCreator(threads))
    } catch (error) {
      alert(error.message)
    } finally {
      dispatch(hideLoading())
    }
  }
}

function asyncPostThread (newThread) {
  return async dispatch => {
    dispatch(showLoading())
    try {
      const uploadedThread = await api.postThread(local.getAccessToken(), newThread)
      dispatch(addThreadActionCreator())
    } catch (error) {
      alert(error.message)
    } finally {
      dispatch(hideLoading())
    }
  }
}

function asyncToggleUpVoteAThread (threadId) {
  return async (dispatch, getState) => {
    dispatch(showLoading())
    const { ownProfile, threads } = getState()
    dispatch(upVoteAThreadActionCreator(threadId, ownProfile.id))
    threads.find(thread => thread.id === threadId).downVotesBy.includes(ownProfile.id) && dispatch(downVoteAThreadActionCreator(threadId, ownProfile.id))

    try {
      await api.neutralizedVote(local.getAccessToken(), threadId)
      !threads.find(thread => thread.id === threadId).upVotesBy.includes(ownProfile.id) && await api.upVoteThread(local.getAccessToken(), threadId)
    } catch (error) {
      dispatch(upVoteAThreadActionCreator(threadId, ownProfile.id))
      dispatch(downVoteAThreadActionCreator(threadId, ownProfile.id))
      alert(error.message)
    } finally {
      dispatch(hideLoading())
    }
  }
}

function asyncToggleDownVoteAThread (threadId) {
  return async (dispatch, getState) => {
    dispatch(showLoading())
    const { ownProfile, threads } = getState()
    dispatch(downVoteAThreadActionCreator(threadId, ownProfile.id))
    threads.find(thread => thread.id === threadId).upVotesBy.includes(ownProfile.id) && dispatch(upVoteAThreadActionCreator(threadId, ownProfile.id))

    try {
      await api.neutralizedVote(local.getAccessToken(), threadId)
      !threads.find(thread => thread.id === threadId).downVotesBy.includes(ownProfile.id) && await api.downVoteThread(local.getAccessToken(), threadId)
    } catch (error) {
      dispatch(upVoteAThreadActionCreator(threadId, ownProfile.id))
      dispatch(downVoteAThreadActionCreator(threadId, ownProfile.id))
      alert(error.message)
    } finally {
      dispatch(hideLoading())
    }
  }
}

export {
  ActionType,
  storeAllThreadsActionCreator,
  upVoteAThreadActionCreator,
  downVoteAThreadActionCreator,
  addThreadActionCreator,
  asyncGetAllThreads,
  asyncPostThread,
  asyncToggleUpVoteAThread,
  asyncToggleDownVoteAThread
}
