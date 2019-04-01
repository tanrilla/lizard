import { combineReducers } from 'redux';
import issueReducer from './IssueReducer';
import userReducer from './UserReducer';
import statusReducer from './StatusReducer';
import loginReducer from './LoginReducer';
import projectReducer from './ProjectReducer';
import typeReducer from './TypeReducer';
import priorityReducer from './PriorityReducer';

export default combineReducers({
    issue: issueReducer,
    user: userReducer,
    status: statusReducer,
    login: loginReducer,
    project: projectReducer,
    type: typeReducer,
    priority: priorityReducer
});