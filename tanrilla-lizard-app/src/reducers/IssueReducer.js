
import  assign from  'object-assign';
 

const initialState = {
    'issueList': [],
    'issue': null,
};

 export default (state = initialState, action) => {
    
    switch (action.type) {
        case 'GET_ISSUES': {
            return assign({}, state, {'issueList': action.payload});
        }
        case 'GET_ISSUE': {
            return assign({}, state, {'issue': action.payload});
        }
        default:
            return state;
    }
 };