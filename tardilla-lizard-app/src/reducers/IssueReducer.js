
import  assign from  'object-assign';
 

const initialState = {
    'issueList': []
};

 export default (state = initialState, action) => {
    
    switch (action.type) {
        case 'GET_ISSUES': {
            return assign({}, state, {'issueList': action.payload});
        }
        default:
            return state;
    }
 };