import { useState } from 'react'
import PropTypes from 'prop-types'
import { asyncPostComment } from '../../states/thread/action'
import { useDispatch } from 'react-redux'
import StyledForm from '../styled/StyleForm'

function CommentForm ({ id }) {
  const dispatch = useDispatch()
  const [text, setText] = useState('')

  const onTextFormInputEventHandler = event => setText(event.target.innerText)

  const clearForm = () => {
    document.getElementsByClassName('text-form')[0].innerHTML = ''
    setText('')
  }

  const onSubmitEventHandler = event => {
    event.preventDefault()
    dispatch(asyncPostComment(id, text))
    clearForm()
  }

  return (
    <StyledForm>
      <h1 className="section-tag">Create a comment</h1>
      <form action="" onSubmit={onSubmitEventHandler}>
        <div className="text-form" contentEditable="" onInput={onTextFormInputEventHandler}></div>
        <button className="blue" type="submit">Post</button>
      </form>
    </StyledForm>
  )
}

CommentForm.propTypes = { id: PropTypes.string }

export default CommentForm
