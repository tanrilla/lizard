import apiUtil, { oauthApi } from '../apis/lizardApi';

export const login = (username, pwd) => async dispatch => {
    var config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic bGl6YXJkQ2xpZW50SWQ6bGlhemFyZEFwcFNlY3JldA=='
        }
    };

    var urlData = `grant_type=password&username=${username}&password=${pwd}&client_id=lizardClientId&client_secret=liazardAppSecret`;

    
    const reponse = await oauthApi.post(`/oauth/token?${urlData}`,{},config).then(async response =>{

        var id = response.headers.userid;
        var rs = await apiUtil.get(`/user/oauth/${id}`);

        /** Setting Global Variable */
        window.currentUser = rs.data;
        
        dispatch({type: 'GET_USER_LOGGED', payload: rs.data});
        dispatch({type: 'GET_IS_LOGGEDIN', payload: true});
        dispatch({type: 'GET_CREDENTIALS', payload: response.data});

    });

};

