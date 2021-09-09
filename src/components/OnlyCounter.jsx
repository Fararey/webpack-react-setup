import { useSelector } from 'react-redux'

const OnlyCounter = () => {
  const value = useSelector((s) => s.counter.value)
  return <div className="w-10 h-10 bg-green-500">{value} </div>
}

export default OnlyCounter
