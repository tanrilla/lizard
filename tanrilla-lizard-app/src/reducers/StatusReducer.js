const initialState = {
    'status': null,
    'statusList': []
};

 export default (state = initialState, action) => {
    
    switch (action.type) {
        case 'GET_STATUS': {
            return { ...state, status: action.payload };
        }
        case 'GET_STATUS_LIST': {
            return { ...state, statusList: action.payload };
        }
        default:
            return state;
    }
 };