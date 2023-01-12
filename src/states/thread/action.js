import { hideLoading, showLoading } from 'react-redux-loading-bar'
import { api, local } from '../../tools'

const ActionType = {
  STORE_THREAD: 'STORE_THREAD',
  UPDATE_THREAD_COMMENTS: 'UPDATE_THREAD_COMMENTS',
  UPVOTE_THREAD: 'UPVOTE_THREAD',
  DOWNVOTE_THREAD: 'DOWNVOTE_THREAD',
  UPVOTE_COMMENT: 'UPVOTE_COMMENT',
  DOWNVOTE_COMMENT: 'DOWNVOTE_COMMENT'
}

function storeThreadActionCreator (thread) {
  return {
    type: ActionType.STORE_THREAD,
    payload: { thread }
  }
}

function updateThreadCommentsActionCreator (newComments) {
  return {
    type: ActionType.UPDATE_THREAD_COMMENTS,
    payload: { newComments }
  }
}

function upVoteThreadActionCreator (newVoter) {
  return {
    type: ActionType.UPVOTE_THREAD,
    payload: { newVoter }
  }
}

function downVotesThreadActionCreator (newVoter) {
  return {
    type: ActionType.DOWNVOTE_THREAD,
    payload: { newVoter }
  }
}

function upVoteCommentActionCreator (commentId, newVoter) {
  return {
    type: ActionType.UPVOTE_COMMENT,
    payload: {
      commentId,
      newVoter
    }
  }
}

function downVoteCommentActionCreator (commentId, newVoter) {
  return {
    type: ActionType.DOWNVOTE_COMMENT,
    payload: {
      commentId,
      newVoter
    }
  }
}

function asyncPostComment (threadId, comment) {
  return async dispatch => {
    dispatch(showLoading())
    try {
      const newComments = await api.postComment(local.getAccessToken(), threadId, comment)
      dispatch(updateThreadCommentsActionCreator(newComments))
    } catch (error) {
      alert(error.message)
    } finally {
      dispatch(hideLoading())
    }
  }
}

function asyncGetThread (id) {
  return async dispatch => {
    dispatch(showLoading())
    try {
      const thread = await api.getThread(id)
      dispatch(storeThreadActionCreator([thread]))
    } catch (error) {
      alert(error.message)
    } finally {
      dispatch(hideLoading())
    }
  }
}

function asyncToggleUpVoteThread (threadId) {
  return async (dispatch, getState) => {
    dispatch(showLoading())
    const { ownProfile, thread } = getState()
    dispatch(upVoteThreadActionCreator(ownProfile.id))
    thread[0].downVotesBy.includes(ownProfile.id) && dispatch(downVotesThreadActionCreator(ownProfile.id))

    try {
      await api.neutralizedVote(local.getAccessToken(), threadId)
      !thread[0].upVotesBy.includes(ownProfile.id) && await api.upVoteThread(local.getAccessToken(), threadId)
    } catch (error) {
      dispatch(upVoteThreadActionCreator(ownProfile.id))
      dispatch(downVotesThreadActionCreator(ownProfile.id))

      alert(error.message)
    } finally {
      dispatch(hideLoading())
    }
  }
}

function asyncToggleDownVoteThread (threadId) {
  return async (dispatch, getState) => {
    dispatch(showLoading())
    const { ownProfile, thread } = getState()
    dispatch(downVotesThreadActionCreator(ownProfile.id))
    thread[0].upVotesBy.includes(ownProfile.id) && dispatch(upVoteThreadActionCreator(ownProfile.id))

    try {
      await api.neutralizedVote(local.getAccessToken(), threadId)
      !thread[0].downVotesBy.includes(ownProfile.id) && await api.downVoteThread(local.getAccessToken(), threadId)
    } catch (error) {
      dispatch(downVotesThreadActionCreator(ownProfile.id))
      dispatch(upVoteThreadActionCreator(ownProfile.id))
      alert(error.message)
    } finally {
      dispatch(hideLoading())
    }
  }
}

function asyncToggleDownVoteComment (commentId) {
  return async (dispatch, getState) => {
    dispatch(showLoading())
    const { ownProfile, thread } = getState()
    dispatch(downVoteCommentActionCreator(commentId, ownProfile.id))
    const selectedComment = thread[0].comments.find(comment => comment.id === commentId)
    selectedComment.upVotesBy.includes(ownProfile.id) && dispatch(upVoteCommentActionCreator(commentId, ownProfile.id))

    try {
      await api.neutralizedComment(local.getAccessToken(), thread[0].id, commentId)
      !selectedComment.downVotesBy.includes(ownProfile.id) && await api.downComment(local.getAccessToken(), thread[0].id, commentId)
    } catch (error) {
      dispatch(downVoteCommentActionCreator(commentId, ownProfile.id))
      dispatch(upVoteCommentActionCreator(commentId, ownProfile.id))
      alert(error.message)
    } finally {
      dispatch(hideLoading())
    }
  }
}

function asyncToggleUpVoteComment (commentId) {
  return async (dispatch, getState) => {
    dispatch(showLoading())
    const { ownProfile, thread } = getState()
    dispatch(upVoteCommentActionCreator(commentId, ownProfile.id))
    const selectedComment = thread[0].comments.find(comment => comment.id === commentId)
    selectedComment.downVotesBy.includes(ownProfile.id) && dispatch(downVoteCommentActionCreator(commentId, ownProfile.id))

    try {
      await api.neutralizedComment(local.getAccessToken(), thread[0].id, commentId)
      !selectedComment.upVotesBy.includes(ownProfile.id) && await api.upComment(local.getAccessToken(), thread[0].id, commentId)
    } catch (error) {
      dispatch(downVoteCommentActionCreator(commentId, ownProfile.id))
      dispatch(upVoteCommentActionCreator(commentId, ownProfile.id))
      alert(error.message)
    } finally {
      dispatch(hideLoading())
    }
  }
}

export {
  ActionType,
  storeThreadActionCreator,
  upVoteThreadActionCreator,
  updateThreadCommentsActionCreator,
  downVotesThreadActionCreator,
  upVoteCommentActionCreator,
  downVoteCommentActionCreator,
  asyncGetThread,
  asyncPostComment,
  asyncToggleUpVoteThread,
  asyncToggleDownVoteThread,
  asyncToggleDownVoteComment,
  asyncToggleUpVoteComment
}
