import { Provider } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'

import store, { history } from '../redux'

import App from '../components/App'
import PageNotFound from '../components/PageNotFound'
import OnlyCounter from '../components/OnlyCounter'

const RootComponent = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/counter" component={OnlyCounter} />
          <Route component={PageNotFound} />
        </Switch>
      </ConnectedRouter>
    </Provider>
  )
}

export default RootComponent
