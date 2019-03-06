import { combineReducers } from 'redux';
import issueReducer from './IssueReducer';

export default combineReducers({
    issue: issueReducer
});