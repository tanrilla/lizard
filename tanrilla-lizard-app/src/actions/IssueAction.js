import apiUtil from '../commons/APIUtil';

export const getIssues = () => async dispatch => {
    const reponse = await apiUtil.get("/issue/getAll");
    dispatch({
        type: 'GET_ISSUES',
        payload: reponse.data
    });
};

export const saveIssue = (issue) => dispatch => {
    var config = {
        headers: {'Content-Type': 'application/json'}
      };
    apiUtil.post("/issue", issue, config).then(async () => {
        const reponse = await apiUtil.get("/issue");
        dispatch({
            type: 'GET_ISSUES',
            payload: reponse.data
        });
    });

};

export const deleteIssue = id => dispatch => {
    var config = {
        headers: {'Content-Type': 'application/json'}
      };
    apiUtil.delete(`/issue/${id}`, config).then(async () => {
        const reponse = await apiUtil.get("/issue");
        dispatch({
            type: 'GET_ISSUES',
            payload: reponse.data
        });
    });

};

export const getIssue = (userId, issueId) => async dispatch => {
    const reponse = await apiUtil.get(`/issue/${issueId}`);
    dispatch({
        type: 'GET_ISSUE',
        payload: reponse.data
    });
};

export const updateIssue = (issue) => dispatch => {
    var config = {
        headers: {'Content-Type': 'application/json'}
        };
    apiUtil.put("/issue", issue, config)
    .then(()=> dispatch({type: 'GET_ISSUE', payload: null}))
    .then(async () => {
        const reponse = await apiUtil.get("/issue");
        dispatch({type: 'GET_ISSUES', payload: reponse.data});
    });

};


export const clearState = () => dispatch => {
    dispatch({type: 'GET_ISSUE', payload: null});
};
