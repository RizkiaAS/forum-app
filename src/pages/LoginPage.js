import { useState, useContext } from 'react'
import CustomInput from '../components/Forms/CustomInput'
import { useDispatch } from 'react-redux'
import { asyncGetTokenAndStoreProfile } from '../states/ownProfile/action'
import { AppContext } from '../context/AppContext'
import { Link } from 'react-router-dom'
import StyledForm from '../components/styled/StyleForm'

function LoginPage () {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { navigate, lastOpenedPage } = useContext(AppContext)

  let targetPath = lastOpenedPage
  if (lastOpenedPage === window.location.pathname || lastOpenedPage === '/register' || lastOpenedPage === '') targetPath = '/'

  const onEmailChangeEventHandler = value => setEmail(value)
  const onPasswordChangeEventHandler = value => setPassword(value)

  const onSubmitEventHandler = event => {
    event.preventDefault()
    dispatch(asyncGetTokenAndStoreProfile(email, password, navigate, targetPath))
  }

  return (
    <div className='page-container'>
      <StyledForm>
        <h1 className="section-tag">Login</h1>
        <form action="" onSubmit={onSubmitEventHandler}>
          <CustomInput id='email-input' type="email" placeholder="Email" value={email} onChange={onEmailChangeEventHandler}/>
          <CustomInput id="password-input" type="password" placeholder="Password" value={password} onChange={onPasswordChangeEventHandler}/>
          <button className="blue" type="submit" >Login</button>
        </form>
      </StyledForm>

      <Link className='ask-and-link' to='/register'>Belum punya akun ? silahkan daftar dahulu</Link>
    </div>
  )
}

export default LoginPage
