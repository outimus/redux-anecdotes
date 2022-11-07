import { useSelector, useDispatch } from 'react-redux'
import { addVotes } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'


const AnecdoteList = (props) => {
    const anecdotes = useSelector(state => state.anecdotes)
    const filters = (useSelector(state => state.filter))
    const filtered = anecdotes.filter(a => String(a.content).toLowerCase().includes((filters.content)))

    const dispatch = useDispatch()

    const vote = async (id) => {
        const anecdote = anecdotes.find((a => a.id === id))
        dispatch(addVotes(anecdote))
        dispatch(setNotification(`You voted '${anecdote.content}'`, 5))
      }

    const betterOrder = [ ...filtered ].sort((a,b) => {
        return b.votes - a.votes
    })
   
    return(
        <div>
          <p></p>
        {betterOrder.map(anecdote => 
            <div key={anecdote.id}>
              <div>
                {anecdote.content}
              </div>
              <div>
                has {anecdote.votes}
                <button onClick={() => vote(anecdote.id)}>vote</button>
              </div>
            </div>)}
        </div>
    )}

export default AnecdoteList