import * as api from '../api/index.js';

export const signin = (formData, navigate) => async (dispatch) => {
    try {
        // log in the user
        const { data } = await api.signIn(formData);
        // console.log('This is the data from auth actions signin', data)
        dispatch({ type: 'AUTH', data });
        // navigate('/');
    } catch (error) {
        console.log(error);
    }
}