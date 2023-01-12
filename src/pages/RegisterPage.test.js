/**
 * skenario testing
 *
 * RegisterPage Pages :
 * - harus bisa memanage name dengan baik
 * - harus bisa memanage email dengan baik
 * - harus bisa memanage password dengan baik
 */

import RegisterPage from './RegisterPage'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { ContextProvider } from '../context/AppContext'
import { BrowserRouter } from 'react-router-dom'
import store from '../states'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

describe('RegisterPage pages', () => {
  beforeEach(() => {
    render(
        <Provider store={store}>
            <BrowserRouter>
                <ContextProvider>
                    <RegisterPage />
                </ContextProvider>
            </BrowserRouter>
        </Provider>
    )
  })

  it('pages ini harus bisa memanage name dengan baik', async () => {
    // Arrange
    const dummyName = 'Ummii'
    const nameInput = await screen.getByPlaceholderText('Nama')
    // Action
    await userEvent.type(nameInput, dummyName)
    // Assert
    expect(nameInput).toHaveValue(dummyName)
  })

  it('pages ini harus bisa memanage password dengan baik', async () => {
    // Arrange
    const dummyPass = '12345678'
    const passInput = await screen.getByPlaceholderText('Password')
    // Action
    await userEvent.type(passInput, dummyPass)
    // Assert
    expect(passInput).toHaveValue(dummyPass)
  })

  it('pages ini harus bisa memanage password dengan baik', async () => {
    // Arrange
    const dummyPass = '12345678'
    const passInput = await screen.getByPlaceholderText('Password')
    // Action
    await userEvent.type(passInput, dummyPass)
    // Assert
    expect(passInput).toHaveValue(dummyPass)
  })
})
