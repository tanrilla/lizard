const initialState = {
    'project': null,
    'projectList': []
};

 export default (state = initialState, action) => {
    
    switch (action.type) {
        case 'GET_PROJECT': {
            return { ...state, project: action.payload };
        }
        case 'GET_PROJECT_LIST': {
            return { ...state, projectList: action.payload };
        }
        default:
            return state;
    }
 };