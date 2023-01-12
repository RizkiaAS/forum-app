import UserProfile from './UserProfile'
import PostBodySection from './PostSections/PostBodySection'
import CommentFooterSection from './PostSections/CommentFooterSection'
import PropTypes from 'prop-types'
import { convertDate } from '../tools'
import { useSelector } from 'react-redux'
import SytledContectWrapper from './styled/StyleContentWrapper'

function Comment ({ comment, replyTo }) {
  const { ownProfile } = useSelector(state => state)
  const {
    owner,
    createdAt,
    content,
    upVotesBy,
    downVotesBy,
    id
  } = comment

  const votedByMe = upVotesBy.includes(ownProfile.id)
  const downVotedByMe = downVotesBy.includes(ownProfile.id)

  return (
    <SytledContectWrapper marginTop='20px'>
      <UserProfile profilePicture={owner.avatar} userName={owner.name} date={convertDate(createdAt)} replyTo={replyTo}/>
        <PostBodySection article={content} />
        <CommentFooterSection
          upVotes={upVotesBy.length}
          votedByMe={votedByMe}
          downVotes={downVotesBy.length}
          downVotedByMe={downVotedByMe}
          commentId={id}
        />
    </SytledContectWrapper>
  )
}

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
  replyTo: PropTypes.string.isRequired
}

export default Comment
