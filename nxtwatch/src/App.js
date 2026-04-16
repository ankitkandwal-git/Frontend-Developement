import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from './Components/Login'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/home" component={Home} />
    </Switch>
  </BrowserRouter>
)

export default App