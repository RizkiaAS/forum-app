/**
 * skenario
 *
 * leaderboardsReducer function :
 *  - harus mengembalikan nilai state yang semula jika diberikan action yang tidak sesuai
 *  - mengembalikan nilai leaderboards yang diperbaharui saat diberikan action dengan type yang terdaftar
 */
import leaderboardsReducer from './reducer'
import { ActionType } from './action'

describe('leaderboardsReducer function', () => {
  it('harus mengembalikan nilai state yang semula jika diberikan action yang tidak sesuai', () => {
    // arrange
    const initialState = []
    const action = {
      type: 'RANDOMAJA',
      payload: { leaderboards: ['random shitpost', 'meme gak jelas', 'jumpscare'] }
    }

    // action
    const nextState = leaderboardsReducer(initialState, action)

    // assert
    expect(nextState).toEqual(initialState)
  })

  it('mengembalikan nilai leaderboards yang diperbaharui saat diberikan action dengan type yang terdaftar', () => {
    // arrange
    const initialState = []
    const action = {
      type: ActionType.STORE_LEADERBOARDS,
      payload: {
        leaderboards: [
          {
            user: {
              id: 'users-1',
              name: 'John Doe',
              email: 'john@example.com',
              avatar: 'https://generated-image-url.jpg'
            },
            score: 10
          },
          {
            user: {
              id: 'users-2',
              name: 'Jane Doe',
              email: 'jane@example.com',
              avatar: 'https://generated-image-url.jpg'
            },
            score: 5
          }
        ]
      }
    }

    // action
    const nextState = leaderboardsReducer(initialState, action)

    // assert
    expect(nextState).toEqual(action.payload.leaderboards)
  })
})
