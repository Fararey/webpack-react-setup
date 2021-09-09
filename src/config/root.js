import { Provider } from 'react-redux'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import store from '../redux'

import App from '../components/App'
import PageNotFound from '../components/PageNotFound'
import OnlyCounter from '../components/OnlyCounter'

const RootComponent = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/counter" component={OnlyCounter} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </Provider>
  )
}

export default RootComponent
