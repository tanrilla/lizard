import { combineReducers } from 'redux';
import issueReducer from './IssueReducer';
import userReducer from './UserReducer';
import statusReducer from './StatusReducer';
import loginReducer from './LoginReducer';

export default combineReducers({
    issue: issueReducer,
    user: userReducer,
    status: statusReducer,
    login: loginReducer
});