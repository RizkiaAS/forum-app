import { useDispatch, useSelector } from 'react-redux'
import ThreadForm from './../components/Forms/ThreadForm'
import PieceOfThread from './../components/PieceOfThread'
import { Link } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { asyncGetAllThreads } from '../states/threads/action'
import { AppContext } from '../context/AppContext'
import Hashtag from '../components/Hashtag'
import { asyncGetAllUsers } from '../states/users/action'
import StyledPopularTag from '../components/styled/StyledPopularTag'

function HomePage () {
  const dispatch = useDispatch()
  const { threads, users, isLogin } = useSelector(state => state)
  const { category, setCategory } = useContext(AppContext)

  const categoryChanger = newCategory => newCategory === category ? setCategory('all') : setCategory(newCategory)

  useEffect(() => {
    dispatch(asyncGetAllUsers())
    dispatch(asyncGetAllThreads())
  }, [dispatch])

  const displayedHashtag = []
  for (let index = 0; index < threads.length; index++) {
    if (!displayedHashtag.includes(threads[index].category)) displayedHashtag.push(threads[index].category)
  }

  const filteredThreads = category === 'all' ? threads : threads.filter(thread => thread.category === category)

  const displayedThreads = filteredThreads.map(thread => {
    return {
      ...thread,
      ownerData: users.find(user => user.id === thread.ownerId) || {
        name: '...',
        avatar: '...'
      }
    }
  })

  return (
    <div className='page-container'>
      {isLogin
        ? <ThreadForm/>
        : <Link className='ask-and-link' to='/login'>Ingin membuat thread ? silahkan login dahulu</Link>}

      <h1 className="section-tag">People threads</h1>

      <p>Most popular :</p>

      <StyledPopularTag>
        {displayedHashtag.map(tag =>
        <Hashtag
          key={tag}
          changeCategoryFun={categoryChanger}
          content={tag}
          isActive={tag === category}
        />)}
      </StyledPopularTag>

      {displayedThreads.map(thread => <PieceOfThread key={thread.id} thread={thread}/>)}
    </div>
  )
}

export default HomePage
