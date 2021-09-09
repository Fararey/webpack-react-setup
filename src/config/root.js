import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import App from '../components/App'
import PageNotFound from '../components/PageNotFound'

const RootComponent = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  )
}

export default RootComponent
