import apiUtil from '../apis/lizardApi';

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
        await dispatch(getIssues());
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

export const saveIssueComment = (comment, issueId) => dispatch => {
    var config = {
        headers: {'Content-Type': 'application/json'}
      };
    apiUtil.post("/comment", comment, config).then(async () => {
        const reponse = await apiUtil.get(`/comment/${issueId}`);
        dispatch({
            type: 'GET_COMMENTS',
            payload: reponse.data
        });
    });

};

export const getIssueComments = (issueId) => async dispatch => {
    const reponse = await apiUtil.get(`/comment/${issueId}`);
    dispatch({
        type: 'GET_COMMENTS',
        payload: reponse.data
    });
};

export const updateIssueFields = (issueId, issue) =>async dispatch => {
    var config = {
            headers: {'Content-Type': 'application/json'}
        };
    const reponse = await apiUtil.patch(`/issue/${issueId}`, issue, config);
    dispatch({type: 'GET_ISSUE', payload: reponse.data});

};

export const getIssuesByProject = (projectId) => async dispatch => {
    const reponse = await apiUtil.get(`/issue/project/${projectId}`);
    dispatch({
        type: 'GET_ISSUES',
        payload: reponse.data
    });
};