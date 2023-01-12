import UserProfile from './UserProfile'
import PostBodySection from './PostSections/PostBodySection'
import PostFooterSection from './PostSections/PostFooterSection'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { convertDate } from '../tools'
import { useSelector } from 'react-redux'
import SytledContectWrapper from './styled/StyleContentWrapper'

function PieceOfThread ({ thread }) {
  const {
    id,
    ownerData,
    createdAt,
    category,
    title,
    body,
    totalComments,
    upVotesBy,
    downVotesBy
  } = thread

  const { ownProfile } = useSelector(state => state)

  const croppedArticle = `${body.slice(0, body.indexOf(' ', 110))}...`
  const votedByMe = upVotesBy.includes(ownProfile.id)
  const downVotedByMe = downVotesBy.includes(ownProfile.id)

  return (
      <SytledContectWrapper hoverEffect={true}>
        <Link to={`/detail/${id}`}>
          <UserProfile
            profilePicture={ownerData.avatar}
            userName={ownerData.name}
            date={convertDate(createdAt)}
            hashTag={category}/>
          <PostBodySection title={title} article={croppedArticle} />
        </Link>
        <PostFooterSection
          totalComments={totalComments}
          upVotes={upVotesBy.length}
          votedByMe={votedByMe}
          downVotes={downVotesBy.length}
          downVotedByMe={downVotedByMe}
          isListOfThread={true}
          id={id}/>
      </SytledContectWrapper>
  )
}

PieceOfThread.propTypes = { thread: PropTypes.object.isRequired }

export default PieceOfThread
