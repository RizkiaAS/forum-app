/**
 * skenario test
 *
 * asyncRegisterUser thunk :
 * - harus menampilkan alert "user {namaUser} berhasil didaftarkan" saat request api berhasil
 * - harus menampilkan pesan error saat request api gagal
 * - harus men-dispatch showLoading diawal dan di akhiri dngan men-dispatch hideLoading saat request gagal
 * - harus men-dispatch showLoading diawal dan di akhiri dngan men-dispatch hideLoading saat request berhasil
 */
import { showLoading, hideLoading } from 'react-redux-loading-bar'
import { asyncRegisterUser } from './action'
import { api } from '../../tools'

describe('asyncPostThread thunk', () => {
  const fakeUser = 'Khumairah'
  const fakeErrorResponse = new Error('Terjadi kesalahan')

  it('harus menampilkan alert "user {namaUser} berhasil didaftarkan" saat request api berhasil', async () => {
    // arrange
    api.register = () => Promise.resolve(fakeUser)

    // mock dispatch
    const dispatch = jest.fn()
    window.alert = jest.fn()

    // action
    await asyncRegisterUser()(dispatch)

    // assert
    expect(window.alert).toHaveBeenCalledWith('user Khumairah berhasil didaftarkan')
  })

  it('harus menampilkan pesan error saat request api gagal', async () => {
    // arrange
    api.register = () => Promise.reject(fakeErrorResponse)

    // mock dispatch
    const dispatch = jest.fn()
    window.alert = jest.fn()

    // action
    await asyncRegisterUser()(dispatch)

    // assert
    expect(window.alert).toHaveBeenCalledWith
  })

  it('harus men-dispatch showLoading diawal dan di akhiri dngan men-dispatch hideLoading saat request berhasil', async () => {
    // arrange
    api.register = () => Promise.resolve(fakeUser)

    // mock dispatch
    const dispatch = jest.fn()

    // action
    await asyncRegisterUser()(dispatch)

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
  })

  it('harus men-dispatch showLoading diawal dan di akhiri dngan men-dispatch hideLoading saat request gagal', async () => {
    // arrange
    api.register = () => Promise.reject(fakeUser)

    // mock dispatch
    const dispatch = jest.fn()

    // action
    await asyncRegisterUser()(dispatch)

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
  })
})
