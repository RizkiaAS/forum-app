/**
 * skenario
 *
 * threadReducer function :
 * - harus mengembalikan nilai state yang semula jika diberikan action yang tidak terdaftar
 * - mengembalikan nilai thread yang diperbaharui atau berbeda dengan nilai inisial saat diberikan action dengan type STORE_THREAD
 * - mengembalikan nilai thread dengan upvote yang bertambah jika user belum pernah melakukan upvote sebelumnya saat diberikan action dengan type UPVOTE_THREAD
 * - mengembalikan nilai thread dengan upvote yang berkurang jika user pernah melakukan upvote sebelumnya saat diberikan action dengan type UPVOTE_THREAD
 * - mengembalikan nilai thread dengan downVote yang bertambah jika user belum pernah melakukan downVote sebelumnya saat diberikan action dengan type DOWNVOTE_THREAD
 * - mengembalikan nilai thread dengan downVote yang berkurang jika user pernah melakukan downVote sebelumnya saat diberikan action dengan type DOWNVOTE_THREAD
 * - mengembalikan nilai thread dengan upVote pada bagian comment yang bertambah jika user belum pernah melakukan upVote sebelumnya saat diberikan action dengan type UPVOTE_COMMENT
 * - mengembalikan nilai thread dengan upVote pada bagian comment yang berkurang jika user pernah melakukan upVote sebelumnya saat diberikan action dengan type UPVOTE_COMMENT
 * - mengembalikan nilai thread dengan downVote pada bagian comment yang bertambah jika user belum pernah melakukan downVote sebelumnya saat diberikan action dengan type DOWNVOTE_COMMENT
 * - mengembalikan nilai thread dengan downVote pada bagian comment yang berkurang jika user pernah melakukan downVote sebelumnya saat diberikan action dengan type DOWNVOTE_COMMENT
 */
import threadReducer from './reducer'
import { ActionType } from './action'

describe('threadReducer function', () => {
  it('harus mengembalikan nilai state yang semula jika diberikan action yang tidak terdaftar', () => {
    // arrange
    const initialState = []
    const action = { type: 'RANDOMAJA' }

    // action
    const nextState = threadReducer(initialState, action)

    // assert
    expect(nextState).toEqual(initialState)
  })

  it('mengembalikan nilai thread yang diperbaharui atau berbeda dengan nilai inisial saat diberikan action dengan type STORE_THREAD', () => {
    // arrange
    const initialState = []
    const action = {
      type: ActionType.STORE_THREAD,
      payload: {
        thread: [
          {
            id: 'thread-1',
            title: 'Thread Pertama',
            body: 'Ini adalah thread pertama',
            category: 'General',
            createdAt: '2021-06-21T07:00:00.000Z',
            owner: {
              id: 'users-1',
              name: 'John Doe',
              avatar: 'https://generated-image-url.jpg'
            },
            upVotesBy: [],
            downVotesBy: [],
            comments: [
              {
                id: 'comment-1',
                content: 'Ini adalah komentar pertama',
                createdAt: '2021-06-21T07:00:00.000Z',
                owner: {
                  id: 'users-1',
                  name: 'John Doe',
                  avatar: 'https://generated-image-url.jpg'
                },
                upVotesBy: [],
                downVotesBy: []
              }
            ]
          }
        ]
      }
    }

    // action
    const nextState = threadReducer(initialState, action)

    // assert
    expect(nextState).toEqual(action.payload.thread)
  })

  it('mengembalikan nilai thread dengan upvote yang bertambah jika user belum pernah melakukan upvote sebelumnya saat diberikan action dengan type UPVOTE_THREAD', () => {
    // arrange
    const initialState = [
      {
        id: 'thread-1',
        title: 'Thread Pertama',
        body: 'Ini adalah thread pertama',
        category: 'General',
        createdAt: '2021-06-21T07:00:00.000Z',
        owner: {
          id: 'users-1',
          name: 'John Doe',
          avatar: 'https://generated-image-url.jpg'
        },
        upVotesBy: [],
        downVotesBy: [],
        comments: [
          {
            id: 'comment-1',
            content: 'Ini adalah komentar pertama',
            createdAt: '2021-06-21T07:00:00.000Z',
            owner: {
              id: 'users-1',
              name: 'John Doe',
              avatar: 'https://generated-image-url.jpg'
            },
            upVotesBy: [],
            downVotesBy: []
          }
        ]
      }
    ]
    const action = {
      type: ActionType.UPVOTE_THREAD,
      payload: { newVoter: 'Khumairah' }
    }

    // action
    const nextState = threadReducer(initialState, action)

    // assert
    expect(nextState).toEqual([
      {
        id: 'thread-1',
        title: 'Thread Pertama',
        body: 'Ini adalah thread pertama',
        category: 'General',
        createdAt: '2021-06-21T07:00:00.000Z',
        owner: {
          id: 'users-1',
          name: 'John Doe',
          avatar: 'https://generated-image-url.jpg'
        },
        upVotesBy: ['Khumairah'],
        downVotesBy: [],
        comments: [
          {
            id: 'comment-1',
            content: 'Ini adalah komentar pertama',
            createdAt: '2021-06-21T07:00:00.000Z',
            owner: {
              id: 'users-1',
              name: 'John Doe',
              avatar: 'https://generated-image-url.jpg'
            },
            upVotesBy: [],
            downVotesBy: []
          }
        ]
      }
    ])
  })

  it('mengembalikan nilai thread dengan upvote yang berkurang jika user pernah melakukan upvote sebelumnya saat diberikan action dengan type UPVOTE_THREAD', () => {
    // arrange
    const initialState = [
      {
        id: 'thread-1',
        title: 'Thread Pertama',
        body: 'Ini adalah thread pertama',
        category: 'General',
        createdAt: '2021-06-21T07:00:00.000Z',
        owner: {
          id: 'users-1',
          name: 'John Doe',
          avatar: 'https://generated-image-url.jpg'
        },
        upVotesBy: ['Khumairah'],
        downVotesBy: [],
        comments: [
          {
            id: 'comment-1',
            content: 'Ini adalah komentar pertama',
            createdAt: '2021-06-21T07:00:00.000Z',
            owner: {
              id: 'users-1',
              name: 'John Doe',
              avatar: 'https://generated-image-url.jpg'
            },
            upVotesBy: [],
            downVotesBy: []
          }
        ]
      }
    ]
    const action = {
      type: ActionType.UPVOTE_THREAD,
      payload: { newVoter: 'Khumairah' }
    }

    // action
    const nextState = threadReducer(initialState, action)

    // assert
    expect(nextState).toEqual([
      {
        id: 'thread-1',
        title: 'Thread Pertama',
        body: 'Ini adalah thread pertama',
        category: 'General',
        createdAt: '2021-06-21T07:00:00.000Z',
        owner: {
          id: 'users-1',
          name: 'John Doe',
          avatar: 'https://generated-image-url.jpg'
        },
        upVotesBy: [],
        downVotesBy: [],
        comments: [
          {
            id: 'comment-1',
            content: 'Ini adalah komentar pertama',
            createdAt: '2021-06-21T07:00:00.000Z',
            owner: {
              id: 'users-1',
              name: 'John Doe',
              avatar: 'https://generated-image-url.jpg'
            },
            upVotesBy: [],
            downVotesBy: []
          }
        ]
      }
    ])
  })

  it('mengembalikan nilai thread dengan downVote yang bertambah jika user belum pernah melakukan downVote sebelumnya saat diberikan action dengan type DOWNVOTE_THREAD', () => {
    // arrange
    const initialState = [
      {
        id: 'thread-1',
        title: 'Thread Pertama',
        body: 'Ini adalah thread pertama',
        category: 'General',
        createdAt: '2021-06-21T07:00:00.000Z',
        owner: {
          id: 'users-1',
          name: 'John Doe',
          avatar: 'https://generated-image-url.jpg'
        },
        upVotesBy: [],
        downVotesBy: [],
        comments: [
          {
            id: 'comment-1',
            content: 'Ini adalah komentar pertama',
            createdAt: '2021-06-21T07:00:00.000Z',
            owner: {
              id: 'users-1',
              name: 'John Doe',
              avatar: 'https://generated-image-url.jpg'
            },
            upVotesBy: [],
            downVotesBy: []
          }
        ]
      }
    ]
    const action = {
      type: ActionType.DOWNVOTE_THREAD,
      payload: { newVoter: 'Khumairah' }
    }

    // action
    const nextState = threadReducer(initialState, action)

    // assert
    expect(nextState).toEqual([
      {
        id: 'thread-1',
        title: 'Thread Pertama',
        body: 'Ini adalah thread pertama',
        category: 'General',
        createdAt: '2021-06-21T07:00:00.000Z',
        owner: {
          id: 'users-1',
          name: 'John Doe',
          avatar: 'https://generated-image-url.jpg'
        },
        upVotesBy: [],
        downVotesBy: ['Khumairah'],
        comments: [
          {
            id: 'comment-1',
            content: 'Ini adalah komentar pertama',
            createdAt: '2021-06-21T07:00:00.000Z',
            owner: {
              id: 'users-1',
              name: 'John Doe',
              avatar: 'https://generated-image-url.jpg'
            },
            upVotesBy: [],
            downVotesBy: []
          }
        ]
      }
    ])
  })

  it('mengembalikan nilai thread dengan downVote yang berkurang jika user pernah melakukan downVote sebelumnya saat diberikan action dengan type DOWNVOTE_THREAD', () => {
    // arrange
    const initialState = [
      {
        id: 'thread-1',
        title: 'Thread Pertama',
        body: 'Ini adalah thread pertama',
        category: 'General',
        createdAt: '2021-06-21T07:00:00.000Z',
        owner: {
          id: 'users-1',
          name: 'John Doe',
          avatar: 'https://generated-image-url.jpg'
        },
        upVotesBy: [],
        downVotesBy: ['Khumairah'],
        comments: [
          {
            id: 'comment-1',
            content: 'Ini adalah komentar pertama',
            createdAt: '2021-06-21T07:00:00.000Z',
            owner: {
              id: 'users-1',
              name: 'John Doe',
              avatar: 'https://generated-image-url.jpg'
            },
            upVotesBy: [],
            downVotesBy: []
          }
        ]
      }
    ]
    const action = {
      type: ActionType.DOWNVOTE_THREAD,
      payload: { newVoter: 'Khumairah' }
    }

    // action
    const nextState = threadReducer(initialState, action)

    // assert
    expect(nextState).toEqual([
      {
        id: 'thread-1',
        title: 'Thread Pertama',
        body: 'Ini adalah thread pertama',
        category: 'General',
        createdAt: '2021-06-21T07:00:00.000Z',
        owner: {
          id: 'users-1',
          name: 'John Doe',
          avatar: 'https://generated-image-url.jpg'
        },
        upVotesBy: [],
        downVotesBy: [],
        comments: [
          {
            id: 'comment-1',
            content: 'Ini adalah komentar pertama',
            createdAt: '2021-06-21T07:00:00.000Z',
            owner: {
              id: 'users-1',
              name: 'John Doe',
              avatar: 'https://generated-image-url.jpg'
            },
            upVotesBy: [],
            downVotesBy: []
          }
        ]
      }
    ])
  })

  it('mengembalikan nilai thread dengan upVote pada bagian comment yang bertambah jika user belum pernah melakukan upVote sebelumnya saat diberikan action dengan type UPVOTE_COMMENT', () => {
    // arrange
    const initialState = [
      {
        id: 'thread-1',
        title: 'Thread Pertama',
        body: 'Ini adalah thread pertama',
        category: 'General',
        createdAt: '2021-06-21T07:00:00.000Z',
        owner: {
          id: 'users-1',
          name: 'John Doe',
          avatar: 'https://generated-image-url.jpg'
        },
        upVotesBy: [],
        downVotesBy: [],
        comments: [
          {
            id: 'comment-1',
            content: 'Ini adalah komentar pertama',
            createdAt: '2021-06-21T07:00:00.000Z',
            owner: {
              id: 'users-1',
              name: 'John Doe',
              avatar: 'https://generated-image-url.jpg'
            },
            upVotesBy: [],
            downVotesBy: []
          }
        ]
      }
    ]
    const action = {
      type: ActionType.UPVOTE_COMMENT,
      payload: {
        commentId: 'comment-1',
        newVoter: 'Khumairah'
      }
    }

    // action
    const nextState = threadReducer(initialState, action)

    // assert
    expect(nextState).toEqual([
      {
        id: 'thread-1',
        title: 'Thread Pertama',
        body: 'Ini adalah thread pertama',
        category: 'General',
        createdAt: '2021-06-21T07:00:00.000Z',
        owner: {
          id: 'users-1',
          name: 'John Doe',
          avatar: 'https://generated-image-url.jpg'
        },
        upVotesBy: [],
        downVotesBy: [],
        comments: [
          {
            id: 'comment-1',
            content: 'Ini adalah komentar pertama',
            createdAt: '2021-06-21T07:00:00.000Z',
            owner: {
              id: 'users-1',
              name: 'John Doe',
              avatar: 'https://generated-image-url.jpg'
            },
            upVotesBy: ['Khumairah'],
            downVotesBy: []
          }
        ]
      }
    ])
  })

  it('mengembalikan nilai thread dengan upVote pada bagian comment yang berkurang jika user pernah melakukan upVote sebelumnya saat diberikan action dengan type UPVOTE_COMMENT', () => {
    // arrange
    const initialState = [
      {
        id: 'thread-1',
        title: 'Thread Pertama',
        body: 'Ini adalah thread pertama',
        category: 'General',
        createdAt: '2021-06-21T07:00:00.000Z',
        owner: {
          id: 'users-1',
          name: 'John Doe',
          avatar: 'https://generated-image-url.jpg'
        },
        upVotesBy: [],
        downVotesBy: [],
        comments: [
          {
            id: 'comment-1',
            content: 'Ini adalah komentar pertama',
            createdAt: '2021-06-21T07:00:00.000Z',
            owner: {
              id: 'users-1',
              name: 'John Doe',
              avatar: 'https://generated-image-url.jpg'
            },
            upVotesBy: ['Khumairah'],
            downVotesBy: []
          }
        ]
      }
    ]
    const action = {
      type: ActionType.UPVOTE_COMMENT,
      payload: {
        commentId: 'comment-1',
        newVoter: 'Khumairah'
      }
    }

    // action
    const nextState = threadReducer(initialState, action)

    // assert
    expect(nextState).toEqual([
      {
        id: 'thread-1',
        title: 'Thread Pertama',
        body: 'Ini adalah thread pertama',
        category: 'General',
        createdAt: '2021-06-21T07:00:00.000Z',
        owner: {
          id: 'users-1',
          name: 'John Doe',
          avatar: 'https://generated-image-url.jpg'
        },
        upVotesBy: [],
        downVotesBy: [],
        comments: [
          {
            id: 'comment-1',
            content: 'Ini adalah komentar pertama',
            createdAt: '2021-06-21T07:00:00.000Z',
            owner: {
              id: 'users-1',
              name: 'John Doe',
              avatar: 'https://generated-image-url.jpg'
            },
            upVotesBy: [],
            downVotesBy: []
          }
        ]
      }
    ])
  })

  it('mengembalikan nilai thread dengan downVote pada bagian comment yang bertambah jika user belum pernah melakukan downVote sebelumnya saat diberikan action dengan type DOWNVOTE_COMMENT', () => {
    // arrange
    const initialState = [
      {
        id: 'thread-1',
        title: 'Thread Pertama',
        body: 'Ini adalah thread pertama',
        category: 'General',
        createdAt: '2021-06-21T07:00:00.000Z',
        owner: {
          id: 'users-1',
          name: 'John Doe',
          avatar: 'https://generated-image-url.jpg'
        },
        upVotesBy: [],
        downVotesBy: [],
        comments: [
          {
            id: 'comment-1',
            content: 'Ini adalah komentar pertama',
            createdAt: '2021-06-21T07:00:00.000Z',
            owner: {
              id: 'users-1',
              name: 'John Doe',
              avatar: 'https://generated-image-url.jpg'
            },
            upVotesBy: [],
            downVotesBy: []
          }
        ]
      }
    ]
    const action = {
      type: ActionType.DOWNVOTE_COMMENT,
      payload: {
        commentId: 'comment-1',
        newVoter: 'Khumairah'
      }
    }

    // action
    const nextState = threadReducer(initialState, action)

    // assert
    expect(nextState).toEqual([
      {
        id: 'thread-1',
        title: 'Thread Pertama',
        body: 'Ini adalah thread pertama',
        category: 'General',
        createdAt: '2021-06-21T07:00:00.000Z',
        owner: {
          id: 'users-1',
          name: 'John Doe',
          avatar: 'https://generated-image-url.jpg'
        },
        upVotesBy: [],
        downVotesBy: [],
        comments: [
          {
            id: 'comment-1',
            content: 'Ini adalah komentar pertama',
            createdAt: '2021-06-21T07:00:00.000Z',
            owner: {
              id: 'users-1',
              name: 'John Doe',
              avatar: 'https://generated-image-url.jpg'
            },
            upVotesBy: [],
            downVotesBy: ['Khumairah']
          }
        ]
      }
    ])
  })

  it('mengembalikan nilai thread dengan downVote pada bagian comment yang berkurang jika user pernah melakukan downVote sebelumnya saat diberikan action dengan type DOWNVOTE_COMMENT', () => {
    // arrange
    const initialState = [
      {
        id: 'thread-1',
        title: 'Thread Pertama',
        body: 'Ini adalah thread pertama',
        category: 'General',
        createdAt: '2021-06-21T07:00:00.000Z',
        owner: {
          id: 'users-1',
          name: 'John Doe',
          avatar: 'https://generated-image-url.jpg'
        },
        upVotesBy: [],
        downVotesBy: [],
        comments: [
          {
            id: 'comment-1',
            content: 'Ini adalah komentar pertama',
            createdAt: '2021-06-21T07:00:00.000Z',
            owner: {
              id: 'users-1',
              name: 'John Doe',
              avatar: 'https://generated-image-url.jpg'
            },
            upVotesBy: [],
            downVotesBy: ['Khumairah']
          }
        ]
      }
    ]
    const action = {
      type: ActionType.DOWNVOTE_COMMENT,
      payload: {
        commentId: 'comment-1',
        newVoter: 'Khumairah'
      }
    }

    // action
    const nextState = threadReducer(initialState, action)

    // assert
    expect(nextState).toEqual([
      {
        id: 'thread-1',
        title: 'Thread Pertama',
        body: 'Ini adalah thread pertama',
        category: 'General',
        createdAt: '2021-06-21T07:00:00.000Z',
        owner: {
          id: 'users-1',
          name: 'John Doe',
          avatar: 'https://generated-image-url.jpg'
        },
        upVotesBy: [],
        downVotesBy: [],
        comments: [
          {
            id: 'comment-1',
            content: 'Ini adalah komentar pertama',
            createdAt: '2021-06-21T07:00:00.000Z',
            owner: {
              id: 'users-1',
              name: 'John Doe',
              avatar: 'https://generated-image-url.jpg'
            },
            upVotesBy: [],
            downVotesBy: []
          }
        ]
      }
    ])
  })
})
