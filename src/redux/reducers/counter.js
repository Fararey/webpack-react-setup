const PLUS_COUNTER = 'PLUS_COUNTER'
const MINUS_COUNTER = 'MINUS_COUNTER'

const initialState = { value: 0 }

export default (state = initialState, action) => {
  switch (action.type) {
    case PLUS_COUNTER: {
      return { value: state.value + 1 }
    }
    case MINUS_COUNTER: {
      return { value: state.value - 1 }
    }
    default:
      return state
  }
}

export const plusCounter = () => ({ type: PLUS_COUNTER })

export const minusCounter = () => ({ type: MINUS_COUNTER })
