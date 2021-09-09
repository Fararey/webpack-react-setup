import { useSelector } from 'react-redux'

const OnlyCounter = () => {
  const value = useSelector((s) => s.counter.value)
  return <div>{value} </div>
}

export default OnlyCounter
