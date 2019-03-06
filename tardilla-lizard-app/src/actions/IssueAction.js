import apiUtil from '../commons/APIUtil';

export const getIssues = () => async dispatch => {
    const reponse = await apiUtil.get("/mail");
    dispatch({
        type: 'GET_ISSUES',
        payload: reponse.data
    });
};

