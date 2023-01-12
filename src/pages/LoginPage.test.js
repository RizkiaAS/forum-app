/**
 * skenario testing
 *
 * LoginPage Pages :
 * - harus bisa memanage email dengan baik
 * - harus bisa memanage password dengan baik
 */

import LoginPage from './LoginPage'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { ContextProvider } from '../context/AppContext'
import { BrowserRouter } from 'react-router-dom'
import store from '../states'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

describe('LoginPage pages', () => {
  beforeEach(() => {
    render(
        <Provider store={store}>
            <BrowserRouter>
                <ContextProvider>
                    <LoginPage />
                </ContextProvider>
            </BrowserRouter>
        </Provider>
    )
  })

  it('pages ini harus bisa memanage email dengan baik', async () => {
    // Arrange
    const dummyEmail = 'khumairah@gmail.com'
    const emailInput = await screen.getByPlaceholderText('Email')
    // Action
    await userEvent.type(emailInput, dummyEmail)
    // Assert
    expect(emailInput).toHaveValue(dummyEmail)
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
