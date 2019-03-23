import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import IssueList from './IssueList';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/issue-list' component={IssueList}/>
    </Switch>
  </main>
)

export default Main
