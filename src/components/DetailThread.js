import UserProfile from './UserProfile'
import PostBodySection from './PostSections/PostBodySection'
import PostFooterSection from './PostSections/PostFooterSection'
import { convertDate } from '../tools'
import { useSelector } from 'react-redux'
import SytledContectWrapper from './styled/StyleContentWrapper'

function DetailThread () {
  const { thread, ownProfile } = useSelector(state => state)
  const {
    id,
    owner,
    createdAt,
    category,
    title,
    body,
    upVotesBy,
    downVotesBy,
    comments
  } = thread[0]

  const votedByMe = upVotesBy.includes(ownProfile.id)
  const downVotedByMe = downVotesBy.includes(ownProfile.id)

  return (
    <SytledContectWrapper marginBottom='20px'>
        <UserProfile profilePicture={owner.avatar} userName={owner.name} date={convertDate(createdAt)} hashTag={category}/>
        <PostBodySection title={title} article={body} isPlain={false}/>
        <PostFooterSection
          totalComments={comments.length}
          upVotes={upVotesBy.length}
          votedByMe={votedByMe}
          downVotes={downVotesBy.length}
          downVotedByMe={downVotedByMe}
          id={id}
          isListOfThread={false}
        />
    </SytledContectWrapper>
  )
}

export default DetailThread
