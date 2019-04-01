const initialState = {
    'isLoggedIn': false,
    'user': null,
    'credentials': null
};

 export default (state = initialState, action) => {
    
    switch (action.type) {
        case 'GET_CREDENTIALS': {
            return { ...state, credentials: action.payload };
        }
        case 'GET_IS_LOGGEDIN': {
            return { ...state, isLoggedIn: action.payload };
        }
        case 'GET_USER_LOGGED': {
            return { ...state, user: action.payload };
        }
        default:
            return state;
    }
 };