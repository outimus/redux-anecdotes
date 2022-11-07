import { setFilter } from '../reducers/filterReducer'
import { connect } from 'react-redux'

const Filter = (props) => {
  const style = {
    marginBottom: 10
  }
  
  const handleChange = (event) => {
    event.preventDefault()  
    const input = String(event.target.value)
    console.log(input, props.filter)                  
    props.setFilter(input)
}

return (
  <div style={style}>
    filter <input onChange={handleChange} />
  </div>
)
}

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes,
    filter: state.filter
  }
}

  
export default connect(
  mapStateToProps,
  { setFilter }
  )(Filter)


// FILTER KOMPONENTTI 5.18 SAAKKA (ilman connectia)

/*import { setFilter } from '../reducers/filterReducer'
import { useDispatch} from "react-redux"

const Filter = () => {
    const dispatch = useDispatch()

    const handleChange = (event) => {
        event.preventDefault()  
        const input = String(event.target.value)
        console.log(input)                  
        dispatch(setFilter(input))
    }
    const style = {
      marginBottom: 10
    }
  
    return (
      <div style={style}>
        filter <input onChange={handleChange} />
      </div>
    )
  }
  
  export default Filter*/