import apiUtil from '../apis/lizardApi';

export const getProjects = (userId) => async dispatch => {
    const response = await apiUtil.get(`/project/${userId}`);
    dispatch({
        type: 'GET_PROJECT_LIST',
        payload: response.data
    });
};

export const saveProject = (project, userId) => dispatch => {
    var config = {
        headers: {'Content-Type': 'application/json'}
      };
    apiUtil.post("/project", project, config).then(async () => {
        const response = await apiUtil.get(`/project/${userId}`);
        dispatch({
            type: 'GET_PROJECT_LIST',
            payload: response.data
        });
    });

};

export const deleteProject = (id, userId) => dispatch => {
    var config = {
        headers: {'Content-Type': 'application/json'}
      };
    apiUtil.delete(`/project/${id}`, config).then(async () => {
        const response = await apiUtil.get(`/project/${userId}`);
        dispatch({
            type: 'GET_PROJECT_LIST',
            payload: response.data
        });
    });

};

export const getProject = (projectId, userId) => async dispatch => {
    const response = await apiUtil.get(`/project/${userId}/${projectId}`);
    dispatch({
        type: 'GET_PROJECT',
        payload: response.data
    });
};

export const updateProject = (project, userId) => dispatch => {
    var config = {
        headers: {'Content-Type': 'application/json'}
        };
    apiUtil.put("/project", project, config)
    .then(()=> dispatch({type: 'GET_PROJECT', payload: null}))
    .then(async () => {
        const response = await apiUtil.get(`/project/${userId}`);
        dispatch({type: 'GET_PROJECT_LIST', payload: response.data});
    });

};

export const clearProjectState = () => dispatch => {
    dispatch({type: 'GET_PROJECT', payload: null});
};

