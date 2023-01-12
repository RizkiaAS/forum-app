import { ActionType } from './action'

function threadReducer (thread = [], action = {}) {
  switch (action.type) {
    case ActionType.STORE_THREAD:
      return action.payload.thread
    case ActionType.UPDATE_THREAD_COMMENTS:
      return [{
        ...thread[0],
        comments: [action.payload.newComments, ...thread[0].comments]
      }]
    case ActionType.UPVOTE_THREAD:
      return [{
        ...thread[0],
        upVotesBy: thread[0].upVotesBy.includes(action.payload.newVoter)
          ? thread[0].upVotesBy.filter(vote => vote !== action.payload.newVoter)
          : thread[0].upVotesBy.concat([action.payload.newVoter])
      }]
    case ActionType.DOWNVOTE_THREAD:
      return [{
        ...thread[0],
        downVotesBy: thread[0].downVotesBy.includes(action.payload.newVoter)
          ? thread[0].downVotesBy.filter(vote => vote !== action.payload.newVoter)
          : thread[0].downVotesBy.concat([action.payload.newVoter])
      }]

    case ActionType.DOWNVOTE_COMMENT:
      return [{
        ...thread[0],
        comments: thread[0].comments.map(comment => {
          if (comment.id === action.payload.commentId) {
            return {
              ...comment,
              downVotesBy: comment.downVotesBy.includes(action.payload.newVoter)
                ? comment.downVotesBy.filter(vote => vote !== action.payload.newVoter)
                : comment.downVotesBy.concat([action.payload.newVoter])
            }
          }
          return comment
        })
      }]

    case ActionType.UPVOTE_COMMENT:
      return [{
        ...thread[0],
        comments: thread[0].comments.map(comment => {
          if (comment.id === action.payload.commentId) {
            return {
              ...comment,
              upVotesBy: comment.upVotesBy.includes(action.payload.newVoter)
                ? comment.upVotesBy.filter(vote => vote !== action.payload.newVoter)
                : comment.upVotesBy.concat([action.payload.newVoter])
            }
          }
          return comment
        })
      }]
    default:
      return thread
  }
}

export default threadReducer
