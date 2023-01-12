import DetailThread from '../components/DetailThread'
import Comment from '../components/Comment'
import CommentForm from '../components/Forms/CommentForm'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { asyncGetThread } from '../states/thread/action'

function DetailThreadPage () {
  const dispatch = useDispatch()
  const { isLogin, thread } = useSelector(states => states)
  const { id } = useParams()

  useEffect(() => { dispatch(asyncGetThread(id)) }, [])

  return (
    <div className="page-container">
      {thread.map(thread => <DetailThread key={thread.id}/>)}

      {isLogin
        ? <CommentForm id={id}/>
        : <Link className='ask-and-link' to='/login'>Ingin membuat komentar ? silahkan login dahulu</Link>}

      <h1 className="section-tag">Comments</h1>

      <div className="comments">
        {thread.map(thread => thread.comments.map(comment => <Comment key={comment.id} comment={comment} replyTo={thread.owner.name}/>))}
      </div>
    </div>
  )
}

export default DetailThreadPage
