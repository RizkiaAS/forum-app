import { useState, useContext } from 'react'
import CustomInput from '../components/Forms/CustomInput'
import { asyncRegisterUser } from '../states/users/action'
import { useDispatch } from 'react-redux'
import { AppContext } from '../context/AppContext'
import { Link } from 'react-router-dom'
import StyledForm from '../components/styled/StyleForm'

function RegisterPage () {
  const dispatch = useDispatch()
  const { navigate } = useContext(AppContext)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onNameChangeEventHandler = value => setName(value)
  const onEmailChangeEventHandler = value => setEmail(value)
  const onPasswordChangeEventHandler = value => setPassword(value)

  const onSubmitEventHandler = event => {
    event.preventDefault()
    dispatch(asyncRegisterUser(name, email, password, navigate, '/login'))
  }

  return (
    <div className="page-container">
      <StyledForm>
        <h1 className="section-tag">Daftar Akun</h1>
        <form action="" onSubmit={onSubmitEventHandler}>
          <CustomInput id='name-input' type="text" placeholder="Nama" value={name} onChange={onNameChangeEventHandler}/>
          <CustomInput id='email-input' type="email" placeholder="Email" value={email} onChange={onEmailChangeEventHandler}/>
          <CustomInput id="password-input" type="password" placeholder="Password" value={password} onChange={onPasswordChangeEventHandler}/>
          <button className="blue" type="submit">Daftar</button>
        </form>
      </StyledForm>

      <Link className='ask-and-link' to='/login'>Sudah punya akun ? silahkan login</Link>
    </div>
  )
}

export default RegisterPage
