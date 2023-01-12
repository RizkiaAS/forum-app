/**
 * skenario testing
 *
 * MissingPage Pages :
 * - harus merender halaman missingPage jika path yang diberikan tidak terdaftar
 */

import App from '../App'
import { ContextProvider } from '../context/AppContext'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../states'
import { render } from '@testing-library/react'

describe('MissingPage pages', () => {
  it('harus merender halaman missingPage jika path yang diberikan tidak terdaftar', async () => {
    // Arrange
    const badRoute = '/halaman random'
    const { getByText } = render(
    <MemoryRouter initialEntries={[badRoute]}>
        <Provider store={store}>
            <ContextProvider>
                <App />
            </ContextProvider>
        </Provider>
    </MemoryRouter>
    )
    // Action
    // tidak ada aksi manual yang perlu dilakukan

    // Assert
    expect(getByText('404 Page not found')).toBeInTheDocument
  })
})
