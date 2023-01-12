/**
 * skenario
 *
 * usersReducer function :
 * - tetap mempertahankan state dengan nilai inisialnya jika action memiliki type yang tidak terdaftar
 * - menampung state dengan data users yang baru saat action bertype STORE_USERS
 */
import usersReducer from './reducer'
import { ActionType } from './action'

describe('usersReducer function', () => {
  it('tetap mempertahankan state dengan nilai inisialnya jika action memiliki type yang tidak terdaftar', () => {
    // arrange
    const initialState = []
    const action = { type: 'RANDOMAJA' }

    // action
    const nextState = usersReducer(initialState, action)

    // assert
    expect(nextState).toEqual(initialState)
  })

  it('menampung state dengan data users yang baru saat action bertype STORE_USERS', () => {
    // arrange
    const initialState = []
    const action = {
      type: ActionType.STORE_USERS,
      payload: {
        users: {
          id: 'umiii123',
          name: 'Khumairah',
          email: 'umi@gmail.com',
          avatar: 'https://generated-image-url.jpg'
        }
      }
    }

    // action
    const nextState = usersReducer(initialState, action)

    // assert
    expect(nextState).toEqual(action.payload.users)
  })
})
