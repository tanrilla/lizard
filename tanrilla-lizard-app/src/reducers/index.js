import { combineReducers } from 'redux';
import issueReducer from './IssueReducer';
import userReducer from './UserReducer';
import statusReducer from './StatusReducer';

export default combineReducers({
    issue: issueReducer,
    user: userReducer,
    status: statusReducer
});