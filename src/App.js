import {Route, Switch} from 'react-router-dom'
import {Fragment} from 'react'
import Header from './components/Header/index'
import Home from './components/Home/index'
import About from './components/About/index'
import Contact from './components/Contact/index'
import NotFound from './components/NotFound/index'

import './App.css'

const App = () => (
  <div className="bg-container">
    <div className="nav">
      <Header />
    </div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  </div>
)
export default App
