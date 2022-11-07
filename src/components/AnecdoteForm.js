import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification  } from '../reducers/notificationReducer'
import { connect } from 'react-redux'

const AnecdoteForm = (props) => {
  
    const addAnecdote = async (event) => {
        event.preventDefault()
        const newAnecdote = event.target.input.value
        event.target.input.value = ''
        props.createAnecdote((newAnecdote))
        props.setNotification(`You added '${newAnecdote}'`, 5)
    }
  
    return (
      <div>
        <h2>create new</h2>
        <form onSubmit={addAnecdote}>
          <input name="input" />
          <button type="submit">add</button>
        </form> 
      </div>
    )
  }

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes,
    filter: state.notification
  }
}

export default connect(
  mapStateToProps,
  { createAnecdote, setNotification }
  )(AnecdoteForm)

// AnecdoteForm ilman connectia

/*import { useDispatch } from "react-redux"
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from "../reducers/notificationReducer"

const AnecdoteForm = () => {
    const dispatch = useDispatch()
  
    const addAnecdote = async (event) => {
        event.preventDefault()
        const newAnecdote = event.target.input.value
        event.target.input.value = ''
        dispatch(createAnecdote(newAnecdote))
        dispatch(setNotification(`You added '${newAnecdote}'`, 5))
    }
  
    return (
      <div>
        <h2>create new</h2>
        <form onSubmit={addAnecdote}>
          <input name="input" />
          <button type="submit">add</button>
        </form> 
      </div>
    )
  }

export default AnecdoteForm*/
    