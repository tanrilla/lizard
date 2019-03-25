import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import IssueList from './IssueList';
import IssueDetail from './IssueDetail';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/issue-list' component={IssueList}/>
      <Route path='/issue-detail/:issueId' component={IssueDetail}/>
    </Switch>
  </main>
)

export default Main
