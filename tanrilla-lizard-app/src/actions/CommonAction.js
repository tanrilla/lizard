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