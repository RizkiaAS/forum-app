import { createContext, useState } from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

const AppContext = createContext()

function ContextProvider ({ children }) {
  const navigate = useNavigate()
  const [lastOpenedPage, setLastOpenedPage] = useState('')
  const [category, setCategory] = useState('all')

  return (
    <AppContext.Provider value={{
      lastOpenedPage,
      category,
      setLastOpenedPage,
      setCategory,
      navigate
    }}>
      {children}
    </AppContext.Provider>
  )
}

ContextProvider.propTypes = { children: PropTypes.element.isRequired }

export { ContextProvider, AppContext }
