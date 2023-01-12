import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { asyncPostThread } from '../../states/threads/action'
import StyledForm from '../styled/StyleForm'
import CustomInput from './CustomInput'

function ThreadForm () {
  const dispatch = useDispatch()
  const [text, setText] = useState('')
  const [title, setTitle] = useState('')
  const [tag, setTag] = useState('')

  const onTextFormInputEventHandler = event => setText(event.target.innerText)
  const onTitleChangeEventHandler = value => setTitle(value)
  const onTagChangeEventHandler = value => setTag(value)

  const clearForm = () => {
    setText('')
    setTitle('')
    setTag('')
    document.getElementsByClassName('text-form')[0].innerHTML = ''
  }

  const onSubmitEventHandler = event => {
    event.preventDefault()
    dispatch(asyncPostThread({
      title,
      category: tag,
      body: text
    }))
    clearForm()
  }

  return (
    <StyledForm>
      <h1 className="section-tag">Create a thread</h1>

      <form action="" onSubmit={onSubmitEventHandler}>
        <CustomInput id="title-input" type="text" placeholder="Title" value={title} onChange={onTitleChangeEventHandler}/>
        <CustomInput id="tag-input" type="text" placeholder="Tag" value={tag} onChange={onTagChangeEventHandler}/>
        <div className="text-form" contentEditable="" onInput={onTextFormInputEventHandler}></div>
        <button className="blue" type="submit">Post</button>
      </form>
    </StyledForm>
  )
}

export default ThreadForm
