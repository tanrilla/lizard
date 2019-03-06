
import React from 'react';
import { Route} from 'react-router-dom';
import IssueList from './../modules/issues/IssueList';

const Router = () => {

    return (
        <div>
                
          <Route path="/issue-list" component={IssueList} />

        </div>

    );

};

export default Router;
