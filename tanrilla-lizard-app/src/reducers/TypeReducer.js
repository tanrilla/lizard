const initialState = {
    'typeList': []
};

 export default (state = initialState, action) => {
    
    switch (action.type) {
        case 'GET_TYPE_LIST': {
            return { ...state, typeList: action.payload };
        }
        default:
            return state;
    }
 };