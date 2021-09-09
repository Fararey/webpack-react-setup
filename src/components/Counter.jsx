import { Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { plusCounter, minusCounter } from '../redux/reducers/counter'

function Counter() {
  const dispatch = useDispatch()
  const value = useSelector((state) => state.counter.value)
  return (
    <div>
      <h1>{value}</h1>
      <button type="button" onClick={() => dispatch(plusCounter())}>
        +
      </button>
      <button type="button" onClick={() => dispatch(minusCounter())}>
        -
      </button>
      <Link to="counter">To counter Page</Link>
    </div>
  )
}

export default Counter
