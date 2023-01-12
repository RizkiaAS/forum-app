import { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import UserProfile from './UserProfile'
import { AppContext } from '../context/AppContext'
import { discardProfile } from '../states/ownProfile/action'
import StyledHeader from './styled/StyledHeader'
import StyledLogo from './styled/StyleLogo'

function CustomHeader () {
  const location = useLocation()
  const dispatch = useDispatch()
  const { ownProfile } = useSelector(state => state)
  const { setLastOpenedPage } = useContext(AppContext)

  const onMovePage = () => setLastOpenedPage(location.pathname)
  const logOut = () => dispatch(discardProfile())

  return (
    <StyledHeader>
      <nav>
          <StyledLogo>
            <span className="material-symbols-outlined">forum</span>
            <h1>NGOCEH V2</h1>
          </StyledLogo>
          {ownProfile.name &&
            <div>
              <UserProfile profilePicture={ownProfile.avatar} userName={ownProfile.name}/>
              <button><span className="material-symbols-outlined" onClick={logOut}>logout</span></button>
            </div>
          }

          {!ownProfile.name &&
            <div>
              <Link to="/login" onClick={onMovePage}><p className="text-button blue">Log In</p></Link>
              <Link to="/register" onClick={onMovePage}><p className="text-button">Sign Up</p></Link>
            </div>
          }
        </nav>
    </StyledHeader>
  )
}

export default CustomHeader
