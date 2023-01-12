import PropTypes from 'prop-types'
import StyledImage from './styled/StyledImage'
import StyledProfileContainer from './styled/StyledProfileContainer'

function UserProfile ({
  profilePicture,
  userName,
  date,
  hashTag,
  replyTo,
  score
}) {
  return (
    <StyledProfileContainer>
      <div className='left'>
        <StyledImage>
          {profilePicture && <img src={profilePicture} alt="" />}
        </StyledImage>
        <div>
          <div className="top">
            {userName && <p>{userName}</p>}
            {date && <p>{date}</p>}
          </div>
          {hashTag && <p className='tag'>#{hashTag}</p>}
          {replyTo && <p>Reply to: @{replyTo}</p>}
        </div>
      </div>
      {score && <span className="score">{score}</span>}
    </StyledProfileContainer>
  )
}

UserProfile.propTypes = {
  profilePicture: PropTypes.string,
  userName: PropTypes.string,
  date: PropTypes.string,
  hashTag: PropTypes.string,
  replyTo: PropTypes.string,
  score: PropTypes.number
}

export default UserProfile
