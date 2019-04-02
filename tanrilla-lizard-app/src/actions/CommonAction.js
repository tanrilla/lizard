import apiUtil from '../apis/lizardApi';

export const getStatusList = () => async dispatch => {
    const reponse = await apiUtil.get("/status");
    dispatch({
        type: 'GET_STATUS_LIST',
        payload: reponse.data
    });
};

export const getUsers = () => async dispatch => {
    const reponse = await apiUtil.get("/user");
    dispatch({
        type: 'GET_USERS',
        payload: reponse.data
    });
};

export const getProjectList = () => async dispatch => {
    const reponse = await apiUtil.get("/project");
    dispatch({
        type: 'GET_PROJECT_LIST',
        payload: reponse.data
    });
};

export const getTypeList = () => async dispatch => {
    const reponse = await apiUtil.get("/type");
    dispatch({
        type: 'GET_TYPE_LIST',
        payload: reponse.data
    });
};

export const getPriorityList = () => async dispatch => {
    const reponse = await apiUtil.get("/priority");
    dispatch({
        type: 'GET_PRIORITY_LIST',
        payload: reponse.data
    });
};