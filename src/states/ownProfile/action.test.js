/**
 * skenario test
 *
 * asyncGetTokenAndStoreProfile thunk :
 * - harus men-dispatch action creator yang tepat ketika berhasil mendapatkan data
 * - harus menampilkan pesan error ketika terjadi kesalahan pada proses request api
 * - harus men-dispatch showLoading diawal dan di akhiri dngan men-dispatch hideLoading saat request berhasil
 */
import { hideLoading, showLoading } from 'react-redux-loading-bar'
import { api } from '../../tools'
import { setLoginActionCreator } from '../isLogin/action'
import { asyncGetTokenAndStoreProfile, storeOwnProfileActionCreator, asyncStoreProfile } from './action'

const fakeToken = 'token palsu ges'
const fakeOwnProfileResponse = {
  id: 'user-Aq6ixK68Ejjv3PkE',
  name: 'kim',
  email: 'kim@gmail.com',
  avatar: 'https://ui-avatars.com/api/?name=kim&background=random'
}

const fakeErrorResponse = new Error('Terjadi kesalahan')

describe('asyncGetTokenAndStoreProfile thunk', () => {
  it('harus men-dispatch action creator yang tepat ketika berhasil mendapatkan data', async () => {
    // arrange
    api.login = () => Promise.resolve(fakeToken)
    api.getOwnProfile = () => Promise.resolve(fakeOwnProfileResponse)

    // mock dispatch
    const dispatch = jest.fn()
    window.alert = jest.fn()

    // action
    await asyncGetTokenAndStoreProfile()(dispatch)

    // assert
    expect(dispatch).toHaveBeenCalledWith(storeOwnProfileActionCreator(fakeOwnProfileResponse))
    expect(dispatch).toHaveBeenCalledWith(setLoginActionCreator(true))
  })

  it('harus menampilkan pesan error ketika terjadi kesalahan pada proses request api', async () => {
    // arrange
    api.getOwnProfile = () => Promise.reject(fakeErrorResponse)

    // mock dispatch
    const dispatch = jest.fn()
    window.alert = jest.fn()

    // action
    await asyncGetTokenAndStoreProfile()(dispatch)

    // assert
    expect(window.alert).toHaveBeenCalled()
  })

  it('harus men-dispatch showLoading diawal dan di akhiri dngan men-dispatch hideLoading saat request berhasil', async () => {
    // arrange
    api.getOwnProfile = () => Promise.resolve(fakeOwnProfileResponse)

    // mock dispatch
    const dispatch = jest.fn()

    // action
    await asyncGetTokenAndStoreProfile()(dispatch)

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
  })

  it('harus men-dispatch showLoading diawal dan di akhiri dngan men-dispatch hideLoading saat request gagal', async () => {
    // arrange
    api.getOwnProfile = () => Promise.resolve(fakeErrorResponse)

    // mock dispatch
    const dispatch = jest.fn()

    // action
    await asyncGetTokenAndStoreProfile()(dispatch)

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
  })
})

/**
 * skenario test
 *
 * asyncStoreProfile thunk :
 * - harus men-dispatch action creator yang tepat ketika berhasil mendapatkan data
 * - harus men-dispatch showLoading diawal dan di akhiri dngan men-dispatch hideLoading saat request gagal
 * - harus men-dispatch showLoading diawal dan di akhiri dngan men-dispatch hideLoading saat request berhasil
 */

describe('asyncStoreProfile thunk', () => {
  it('harus men-dispatch action creator yang tepat ketika berhasil mendapatkan data', async () => {
    // arrange
    api.getOwnProfile = () => Promise.resolve(fakeOwnProfileResponse)

    // mock dispatch
    const dispatch = jest.fn()
    window.alert = jest.fn()

    // action
    await asyncStoreProfile()(dispatch)

    // assert
    expect(dispatch).toHaveBeenCalledWith(storeOwnProfileActionCreator(fakeOwnProfileResponse))
    expect(dispatch).toHaveBeenCalledWith(setLoginActionCreator(true))
  })

  it('harus men-dispatch showLoading diawal dan di akhiri dngan men-dispatch hideLoading saat request berhasil', async () => {
    // arrange
    api.getOwnProfile = () => Promise.resolve(fakeOwnProfileResponse)

    // mock dispatch
    const dispatch = jest.fn()

    // action
    await asyncStoreProfile()(dispatch)

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
  })

  it('harus men-dispatch showLoading diawal dan di akhiri dngan men-dispatch hideLoading saat request gagal', async () => {
    // arrange
    api.getOwnProfile = () => Promise.reject(fakeErrorResponse)

    // mock dispatch
    const dispatch = jest.fn()

    // action
    await asyncStoreProfile()(dispatch)

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
  })
})
