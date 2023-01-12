/**
 * skenario
 *
 * threadsReducer function :
 * - harus mengembalikan nilai state yang semula jika diberikan action yang tidak terdaftar
 * - mengembalikan nilai thread yang diperbaharui atau berbeda dengan nilai inisial saat diberikan action dengan type STORE_THREAD
 * - menambahkan nilai inisial thread jika diberikan action dengan type ADD_THREAD
 * - mengembalikan salah satu nilai thread dengan upVote yang bertambah jika user belum pernah melakukan upvote sebelumnya saat diberikan action dengan type UPVOTE_A_THREAD
 * - mengembalikan salah satu nilai thread dengan upVote yang berkurang jika user pernah melakukan upvote sebelumnya saat diberikan action dengan type UPVOTE_A_THREAD
 * - mengembalikan salah satu nilai thread dengan downVote yang bertambah jika user belum pernah melakukan downVote sebelumnya saat diberikan action dengan type DOWNVOTE_A_THREAD
 * - mengembalikan salah satu nilai thread dengan downVote yang berkurang jika user pernah melakukan downVote sebelumnya saat diberikan action dengan type DOWNVOTE_A_THREAD
 */
import threadsReducer from './reducer'
import { ActionType } from './action'

describe('threadsReducer function', () => {
  it('harus mengembalikan nilai state yang semula jika diberikan action yang tidak terdaftar', () => {
    // arrange
    const initialState = []
    const action = { type: 'RANDOMAJA' }

    // action
    const nextState = threadsReducer(initialState, action)

    // assert
    expect(nextState).toEqual(initialState)
  })

  it('mengembalikan nilai thread yang diperbaharui atau berbeda dengan nilai inisial saat diberikan action dengan type STORE_THREAD', () => {
    // arrange
    const initialState = []
    const action = {
      type: ActionType.STORE_ALL_THREADS,
      payload: {
        threads: [
          {
            id: 'thread-1',
            title: 'Thread Pertama',
            body: 'Ini adalah thread pertama',
            category: 'General',
            createdAt: '2021-06-21T07:00:00.000Z',
            ownerId: 'users-1',
            upVotesBy: [],
            downVotesBy: [],
            totalComments: 0
          },
          {
            id: 'thread-2',
            title: 'Thread Kedua',
            body: 'Ini adalah thread kedua',
            category: 'General',
            createdAt: '2021-06-21T07:00:00.000Z',
            ownerId: 'users-2',
            upVotesBy: [],
            downVotesBy: [],
            totalComments: 0
          }
        ]
      }
    }

    // action
    const nextState = threadsReducer(initialState, action)

    // assert
    expect(nextState).toEqual(action.payload.threads)
  })

  it('menambahkan nilai inisial thread jika diberikan action dengan type ADD_THREAD', () => {
    // arrange
    const initialState = [
      {
        id: 'thread-1',
        title: 'Thread Pertama',
        body: 'Ini adalah thread pertama',
        category: 'General',
        createdAt: '2021-06-21T07:00:00.000Z',
        ownerId: 'users-1',
        upVotesBy: [],
        downVotesBy: [],
        totalComments: 0
      }
    ]
    const action = {
      type: ActionType.ADD_THREAD,
      payload: {
        newThread: {
          id: 'thread-2',
          title: 'Thread yang ditambahkan',
          body: 'Ini adalah thread urutan kedua yang ditambahkan dengan tujuan untuk pengetesan',
          category: 'General',
          createdAt: '2023-01-21T07:00:00.000Z',
          ownerId: 'users-1',
          upVotesBy: [],
          downVotesBy: [],
          totalComments: 0
        }
      }
    }

    // action
    const nextState = threadsReducer(initialState, action)

    // assert
    expect(nextState).toEqual([action.payload.newThread, ...initialState])
  })

  it('mengembalikan salah satu nilai thread dengan upVote yang bertambah jika user belum pernah melakukan upvote sebelumnya saat diberikan action dengan type UPVOTE_A_THREAD', () => {
    // arrange
    const initialState = [
      {
        id: 'thread-1',
        title: 'Thread Pertama',
        body: 'Ini adalah thread pertama',
        category: 'General',
        createdAt: '2021-06-21T07:00:00.000Z',
        ownerId: 'users-1',
        upVotesBy: [],
        downVotesBy: [],
        totalComments: 0
      },
      {
        id: 'thread-2',
        title: 'Thread Kedua',
        body: 'Ini adalah thread kedua',
        category: 'General',
        createdAt: '2021-06-21T07:00:00.000Z',
        ownerId: 'users-2',
        upVotesBy: [],
        downVotesBy: [],
        totalComments: 0
      }
    ]
    const action = {
      type: ActionType.UPVOTE_A_THREAD,
      payload: {
        threadId: 'thread-1',
        newVoter: 'Khumairah'
      }
    }

    // action
    const nextState = threadsReducer(initialState, action)

    // assert
    expect(nextState).toEqual([
      {
        id: 'thread-1',
        title: 'Thread Pertama',
        body: 'Ini adalah thread pertama',
        category: 'General',
        createdAt: '2021-06-21T07:00:00.000Z',
        ownerId: 'users-1',
        upVotesBy: ['Khumairah'],
        downVotesBy: [],
        totalComments: 0
      },
      {
        id: 'thread-2',
        title: 'Thread Kedua',
        body: 'Ini adalah thread kedua',
        category: 'General',
        createdAt: '2021-06-21T07:00:00.000Z',
        ownerId: 'users-2',
        upVotesBy: [],
        downVotesBy: [],
        totalComments: 0
      }
    ])
  })

  it('mengembalikan salah satu nilai thread dengan upVote yang berkurang jika user pernah melakukan upvote sebelumnya saat diberikan action dengan type UPVOTE_A_THREAD', () => {
    // arrange
    const initialState = [
      {
        id: 'thread-1',
        title: 'Thread Pertama',
        body: 'Ini adalah thread pertama',
        category: 'General',
        createdAt: '2021-06-21T07:00:00.000Z',
        ownerId: 'users-1',
        upVotesBy: ['Khumairah'],
        downVotesBy: [],
        totalComments: 0
      },
      {
        id: 'thread-2',
        title: 'Thread Kedua',
        body: 'Ini adalah thread kedua',
        category: 'General',
        createdAt: '2021-06-21T07:00:00.000Z',
        ownerId: 'users-2',
        upVotesBy: [],
        downVotesBy: [],
        totalComments: 0
      }
    ]
    const action = {
      type: ActionType.UPVOTE_A_THREAD,
      payload: {
        threadId: 'thread-1',
        newVoter: 'Khumairah'
      }
    }

    // action
    const nextState = threadsReducer(initialState, action)

    // assert
    expect(nextState).toEqual([
      {
        id: 'thread-1',
        title: 'Thread Pertama',
        body: 'Ini adalah thread pertama',
        category: 'General',
        createdAt: '2021-06-21T07:00:00.000Z',
        ownerId: 'users-1',
        upVotesBy: [],
        downVotesBy: [],
        totalComments: 0
      },
      {
        id: 'thread-2',
        title: 'Thread Kedua',
        body: 'Ini adalah thread kedua',
        category: 'General',
        createdAt: '2021-06-21T07:00:00.000Z',
        ownerId: 'users-2',
        upVotesBy: [],
        downVotesBy: [],
        totalComments: 0
      }
    ])
  })

  it('mengembalikan salah satu nilai thread dengan downVote yang bertambah jika user belum pernah melakukan downVote sebelumnya saat diberikan action dengan type DOWNVOTE_A_THREAD', () => {
    // arrange
    const initialState = [
      {
        id: 'thread-1',
        title: 'Thread Pertama',
        body: 'Ini adalah thread pertama',
        category: 'General',
        createdAt: '2021-06-21T07:00:00.000Z',
        ownerId: 'users-1',
        upVotesBy: [],
        downVotesBy: [],
        totalComments: 0
      },
      {
        id: 'thread-2',
        title: 'Thread Kedua',
        body: 'Ini adalah thread kedua',
        category: 'General',
        createdAt: '2021-06-21T07:00:00.000Z',
        ownerId: 'users-2',
        upVotesBy: [],
        downVotesBy: [],
        totalComments: 0
      }
    ]
    const action = {
      type: ActionType.DOWNVOTE_A_THREAD,
      payload: {
        threadId: 'thread-1',
        newVoter: 'Khumairah'
      }
    }

    // action
    const nextState = threadsReducer(initialState, action)

    // assert
    expect(nextState).toEqual([
      {
        id: 'thread-1',
        title: 'Thread Pertama',
        body: 'Ini adalah thread pertama',
        category: 'General',
        createdAt: '2021-06-21T07:00:00.000Z',
        ownerId: 'users-1',
        upVotesBy: [],
        downVotesBy: ['Khumairah'],
        totalComments: 0
      },
      {
        id: 'thread-2',
        title: 'Thread Kedua',
        body: 'Ini adalah thread kedua',
        category: 'General',
        createdAt: '2021-06-21T07:00:00.000Z',
        ownerId: 'users-2',
        upVotesBy: [],
        downVotesBy: [],
        totalComments: 0
      }
    ])
  })

  it('mengembalikan salah satu nilai thread dengan downVote yang berkurang jika user pernah melakukan downVote sebelumnya saat diberikan action dengan type DOWNVOTE_A_THREAD', () => {
    // arrange
    const initialState = [
      {
        id: 'thread-1',
        title: 'Thread Pertama',
        body: 'Ini adalah thread pertama',
        category: 'General',
        createdAt: '2021-06-21T07:00:00.000Z',
        ownerId: 'users-1',
        upVotesBy: [],
        downVotesBy: ['Khumairah'],
        totalComments: 0
      },
      {
        id: 'thread-2',
        title: 'Thread Kedua',
        body: 'Ini adalah thread kedua',
        category: 'General',
        createdAt: '2021-06-21T07:00:00.000Z',
        ownerId: 'users-2',
        upVotesBy: [],
        downVotesBy: [],
        totalComments: 0
      }
    ]
    const action = {
      type: ActionType.DOWNVOTE_A_THREAD,
      payload: {
        threadId: 'thread-1',
        newVoter: 'Khumairah'
      }
    }

    // action
    const nextState = threadsReducer(initialState, action)

    // assert
    expect(nextState).toEqual([
      {
        id: 'thread-1',
        title: 'Thread Pertama',
        body: 'Ini adalah thread pertama',
        category: 'General',
        createdAt: '2021-06-21T07:00:00.000Z',
        ownerId: 'users-1',
        upVotesBy: [],
        downVotesBy: [],
        totalComments: 0
      },
      {
        id: 'thread-2',
        title: 'Thread Kedua',
        body: 'Ini adalah thread kedua',
        category: 'General',
        createdAt: '2021-06-21T07:00:00.000Z',
        ownerId: 'users-2',
        upVotesBy: [],
        downVotesBy: [],
        totalComments: 0
      }
    ])
  })
})
