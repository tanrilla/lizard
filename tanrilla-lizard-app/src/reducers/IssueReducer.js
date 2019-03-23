const initialState = {
    'issueList': [],
    'issue': null,
};

 export default (state = initialState, action) => {
    
    switch (action.type) {
        case 'GET_ISSUES': {
            return { ...state, issueList: action.payload };
        }
        case 'GET_ISSUE': {
            return { ...state, issue: action.payload };
        }
        default:
            return state;
    }
 };