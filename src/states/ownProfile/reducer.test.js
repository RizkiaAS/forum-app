/**
 * skenario
 *
 * ownProfileReducer function :
 *  - harus mengembalikan nilai state yang semula jika diberikan action yang tidak sesuai
 *  - mengembalikan nilai leaderboards yang diperbaharui atau berbeda dengan nilai inisial saat diberikan action dengan type STORE_OWN_PROFILE
 *  - mengembalikan nilai state berupa objek kosong ({}) atau berbeda dengan nilai inisial saat diberikan action dengan type DISCARD_OWN_PROFILE
 */
import ownProfileReducer from './reducer'
import { ActionType } from './action'

describe('ownProfileReducer function', () => {
  it('harus mengembalikan nilai state yang semula jika diberikan action yang tidak sesuai', () => {
    // arrange
    const initialState = {}
    const action = {
      type: 'RANDOMAJA',
      payload: {
        user: {
          id: 'tzy123',
          name: 'hengker gemink tzy',
          email: 'hengker@example.com',
          avatar: 'https://generated-image-url.jpg'
        }
      }
    }

    // action
    const nextState = ownProfileReducer(initialState, action)

    // assert
    expect(nextState).toEqual(initialState)
  })

  it('mengembalikan nilai leaderboards yang diperbaharui atau berbeda dengan nilai inisial saat diberikan action dengan type STORE_OWN_PROFILE', () => {
    // arrange
    const initialState = {}
    const action = {
      type: ActionType.STORE_OWN_PROFILE,
      payload: {
        ownProfile: {
          id: '3000',
          name: 'khumairah',
          email: 'umi@gmail.com',
          avatar: 'https://generated-image-url.jpg'
        }
      }
    }

    // action
    const nextState = ownProfileReducer(initialState, action)

    // assert
    expect(nextState).toEqual(action.payload.ownProfile)
  })

  it('mengembalikan nilai state berupa objek kosong ({}) atau berbeda dengan nilai inisial saat diberikan action dengan type DISCARD_OWN_PROFILE', () => {
    // arrange
    const initialState = {
      id: '3000',
      name: 'khumairah',
      email: 'umi@gmail.com',
      avatar: 'https://generated-image-url.jpg'
    }
    const action = { type: ActionType.DISCARD_OWN_PROFILE }

    // action
    const nextState = ownProfileReducer(initialState, action)

    // assert
    expect(nextState).toEqual({})
  })
})
