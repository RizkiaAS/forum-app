/**
 * skenario test
 *
 * asyncGetLeaderboards thunk :
 * - harus men-dispatch showLoading diawal dan di akhiri dngan men-dispatch hideLoading baik disaat berhasil maupun gagal
 * - harus men-dispatch action creator yang tepat ketika berhasil mendapatkan data
 * - harus menampilkan error ketika terjadi kesalahan pada proses request api
 */
import { hideLoading, showLoading } from 'react-redux-loading-bar'
import { api } from '../../tools'
import { asyncGetLeaderboards, storeLeaderboardsActionCreator } from './action'

const fakeLeaderboardsResponse = [
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
const fakeErrorResponse = new Error('Terjadi sebuah kesalahan')

describe('asyncGetLeaderboards thunk', () => {
  it('harus men-dispatch action creator yang tepat ketika berhasil mendapatkan data', async () => {
    // arrange
    api.getLeaderboards = () => Promise.resolve(fakeLeaderboardsResponse)

    // mock dispatch
    const dispatch = jest.fn()

    // action
    await asyncGetLeaderboards()(dispatch)

    // assert
    expect(dispatch).toHaveBeenCalledWith(storeLeaderboardsActionCreator(fakeLeaderboardsResponse))
  })

  it('harus men-dispatch showLoading diawal dan di akhiri dngan men-dispatch hideLoading saat request berhasil', async () => {
    // arrange
    api.getLeaderboards = () => Promise.resolve(fakeLeaderboardsResponse)

    // mock dispatch
    const dispatch = jest.fn()

    // action
    await asyncGetLeaderboards()(dispatch)

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
  })

  it('harus men-dispatch showLoading diawal dan di akhiri dngan men-dispatch hideLoading saat request gagal', async () => {
    // arrange
    api.getLeaderboards = () => Promise.resolve(fakeErrorResponse)

    // mock dispatch
    const dispatch = jest.fn()

    // action
    await asyncGetLeaderboards()(dispatch)

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
  })

  it('harus menampilkan error ketika terjadi kesalahan pada proses request api', async () => {
    // arrange
    api.getLeaderboards = () => Promise.reject(fakeErrorResponse)

    // mock dispatch
    const dispatch = jest.fn()
    window.alert = jest.fn()

    // action
    await asyncGetLeaderboards()(dispatch)

    // assert
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message)
  })
})
