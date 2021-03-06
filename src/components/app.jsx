import React from "react"
import { Route, Switch } from "react-router-dom"

import HomePage from "./home/homePage.jsx"

const App = () => (
  <Switch>
    <Route exact path="/" component={HomePage}/>
  </Switch>
)

export default App;