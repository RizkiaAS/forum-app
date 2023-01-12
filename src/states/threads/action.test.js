/**
 * skenario test
 *
 * asyncPostThread thunk :
 * - harus dispatch addThreadActionCreator saat request api berhasil
 * - harus menampilkan pesan error saat request api gagal
 * - harus men-dispatch showLoading diawal dan di akhiri dngan men-dispatch hideLoading saat request gagal
 * - harus men-dispatch showLoading diawal dan di akhiri dngan men-dispatch hideLoading saat request berhasil
 */

import { asyncPostThread, addThreadActionCreator } from './action'
import { showLoading, hideLoading } from 'react-redux-loading-bar'
import { api } from '../../tools'

describe('asyncPostThread thunk', () => {
  const fakePostThreadResponse = {
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

  const fakeErrorResponse = new Error('Terjadi kesalahan')

  it('harus dispatch addThreadActionCreator saat request api berhasil', async () => {
    // arrange
    api.postThread = () => Promise.resolve(fakePostThreadResponse)

    // mock dispatch
    const dispatch = jest.fn()
    window.alert = jest.fn()

    // action
    await asyncPostThread()(dispatch)

    // assert
    expect(dispatch).toHaveBeenCalledWith(addThreadActionCreator(fakePostThreadResponse))
  })

  it('harus menampilkan pesan error saat request api gagal', async () => {
    // arrange
    api.postThread = () => Promise.reject(fakeErrorResponse)

    // mock dispatch
    const dispatch = jest.fn()
    window.alert = jest.fn()

    // action
    await asyncPostThread()(dispatch)

    // assert
    expect(window.alert).toHaveBeenCalledWith
  })

  it('harus men-dispatch showLoading diawal dan di akhiri dngan men-dispatch hideLoading saat request berhasil', async () => {
    // arrange
    api.postThread = () => Promise.resolve(fakePostThreadResponse)

    // mock dispatch
    const dispatch = jest.fn()

    // action
    await asyncPostThread()(dispatch)

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
  })

  it('harus men-dispatch showLoading diawal dan di akhiri dngan men-dispatch hideLoading saat request gagal', async () => {
    // arrange
    api.postThread = () => Promise.reject(fakePostThreadResponse)

    // mock dispatch
    const dispatch = jest.fn()

    // action
    await asyncPostThread()(dispatch)

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
  })
})
