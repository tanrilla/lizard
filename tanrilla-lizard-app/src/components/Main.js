import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../modules/Home'
import IssueList from '../modules/IssueList'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/issue-list' component={IssueList}/>
    </Switch>
  </main>
)

export default Main
