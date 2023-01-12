/**
 * skenario test
 *
 * asyncPostComment thunk :
 * - harus dispatch updateThreadCommentsActionCreator saat api request sukses
 * - harus menampilkan alert saat api request gagal dilakukan
 * - harus men-dispatch showLoading diawal dan di akhiri dngan men-dispatch hideLoading saat request gagal
 * - harus men-dispatch showLoading diawal dan di akhiri dngan men-dispatch hideLoading saat request berhasil
 */
import { hideLoading, showLoading } from 'react-redux-loading-bar'
import { asyncPostComment, updateThreadCommentsActionCreator } from './action'
import { api } from '../../tools'

describe('asyncPostComment thunk', () => {
  const fakePostResponse = {
    id: 'comment-1',
    content: 'Ini adalah komentar pertama',
    createdAt: '2021-06-21T07:00:00.000Z',
    upVotesBy: [],
    downVotesBy: [],
    owner: {
      id: 'users-1',
      name: 'John Doe',
      email: 'john@example.com'
    }
  }

  const fakeErrorResponse = new Error('Terjadi kesalahan')

  it('harus dispatch updateThreadCommentsActionCreator saat api request sukses', async () => {
    // arrange
    api.postComment = () => Promise.resolve(fakePostResponse)

    // mock dispatch
    const dispatch = jest.fn()
    window.alert = jest.fn()

    // action
    await asyncPostComment()(dispatch)

    // assert
    expect(dispatch).toHaveBeenCalledWith(updateThreadCommentsActionCreator(fakePostResponse))
  })

  it('harus menampilkan alert saat api request gagal dilakukan', async () => {
    // arrange
    api.postComment = () => Promise.reject(fakeErrorResponse)

    // mock dispatch
    const dispatch = jest.fn()
    window.alert = jest.fn()

    // action
    await asyncPostComment()(dispatch)

    // assert
    expect(window.alert).toHaveBeenCalledWith
  })

  it('harus men-dispatch showLoading diawal dan di akhiri dngan men-dispatch hideLoading saat request berhasil', async () => {
    // arrange
    api.postComment = () => Promise.resolve(fakePostResponse)

    // mock dispatch
    const dispatch = jest.fn()

    // action
    await asyncPostComment()(dispatch)

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
  })

  it('harus men-dispatch showLoading diawal dan di akhiri dngan men-dispatch hideLoading saat request gagal', async () => {
    // arrange
    api.postComment = () => Promise.reject(fakePostResponse)

    // mock dispatch
    const dispatch = jest.fn()

    // action
    await asyncPostComment()(dispatch)

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
  })
})
