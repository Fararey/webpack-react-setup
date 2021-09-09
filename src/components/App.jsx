import Whatever from './Whatever'
import Recipes from './Recipes'
import Counter from './Counter'

import flowerGif from '../images/flower.gif'
import fileIcon from '../images/file.png'
import logo from '../images/logo.svg'

const App = () => {
  return (
    <>
      <section className="hero"></section>
      <main>
        <section className="flex">
          <img src={flowerGif} alt="flower" />
          <img src={fileIcon} alt="fileIcon" />
          <img src={logo} alt="logo" />
        </section>
        <h1>Oh hi, React </h1>
        <Recipes />
        <Whatever />
        <Counter />
      </main>
    </>
  )
}

export default App
