const initialState = {
    'priorityList': []
};

 export default (state = initialState, action) => {
    
    switch (action.type) {
        case 'GET_PRIORITY_LIST': {
            return { ...state, priorityList: action.payload };
        }
        default:
            return state;
    }
 };