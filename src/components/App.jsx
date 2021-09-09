import Whatever from './Whatever'
import Recipes from './Recipes'
import Counter from './Counter'

import flowerGif from '../images/flower.gif'
import fileIcon from '../images/file.png'
import logo from '../images/logo.svg'

import '../styles/index.scss'

const App = () => {
  return (
    <>
      <section className="hero"></section>
      <main>
        <section>
          <img src={flowerGif} alt="flower" />
          <img src={fileIcon} alt="fileIcon" />
          <img src={logo} alt="logo" />
          <h1>Oh hi, React </h1>
        </section>
        <Recipes />
        <Whatever />
        <Counter />
      </main>
    </>
  )
}

export default App
