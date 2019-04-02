import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import IssueList from './IssueList';
import IssueDetail from './IssueDetail';
import ProjectList from './ProjectList';

const Main = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home}/>

      <Route path='/issue-list' component={IssueList}/>
      <Route path='/issue-detail/:issueId' component={IssueDetail}/>

      <Route path='/project-list' component={ProjectList}/>
      <Route path='/project-issues/:projectId' component={IssueList}/>

    </Switch>
  );
};

export default Main
