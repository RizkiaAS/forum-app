import { ActionType } from './action'

function threadsReducer (threads = [], action = {}) {
  switch (action.type) {
    case ActionType.STORE_ALL_THREADS:
      return action.payload.threads
    case ActionType.ADD_THREAD:
      return [action.payload.newThread, ...threads]

    case ActionType.UPVOTE_A_THREAD:
      return threads.map((thread) => {
        if (thread.id === action.payload.threadId) {
          return {
            ...thread,
            upVotesBy: thread.upVotesBy.includes(action.payload.newVoter)
              ? thread.upVotesBy.filter((id) => id !== action.payload.newVoter)
              : thread.upVotesBy.concat([action.payload.newVoter])
          }
        }

        return thread
      })
    case ActionType.DOWNVOTE_A_THREAD:
      return threads.map((thread) => {
        if (thread.id === action.payload.threadId) {
          return {
            ...thread,
            downVotesBy: thread.downVotesBy.includes(action.payload.newVoter)
              ? thread.downVotesBy.filter((id) => id !== action.payload.newVoter)
              : thread.downVotesBy.concat([action.payload.newVoter])
          }
        }

        return thread
      })
    default:
      return threads
  }
}

export default threadsReducer
