import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Avatar } from '@material-ui/core';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import './UserLoginButton.scss'
import jwt_decode from 'jwt-decode';

const UserLoginButton = () => {
    const [user, setUser] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const logout = () => {
        dispatch({ type: 'LOGOUT' });
        navigate('/')
        setUser(null)
    }
    // This useEffect will run every time the location changes. It will grab the user from local storage and set it to the user state.
    useEffect(() => {
        const token = user?.token;
        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    const googleSuccess = async (res) => {
        console.log('Google sign in was successful. Check the console for full profile object.');
        // The ?. is an optional chaining operator that will not throw an error if the object is undefined.

        const result = jwt_decode(res.credential)
        const token = res.credential;
        console.log('This is decoded', result)
        // console.log('this is token from auth', token)
        console.log('This is the email: ', result.email)

        // console.log('this is the result object: ', res)
        // console.log('this is result from auth', result)

        try {
            dispatch({ type: 'AUTH', data: { result, token } });
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }

    const googleFailure = (error) => {
        console.log("Google Sign In was unsuccessful. Try again later.")
        console.log(error)
    }

    return (
        // render div if user logged in
        <div className='user-login-sidebar'>
            {user ? (
                <div className='user-login-button-logged-in'>
                    <div className='user-login-button-logged-in-user'>
                        {/* Render profile image from google Oauth */}
                        <Avatar className='user-photo' alt={user.result.name} src={user.result.picture}> {user.result.name.charAt(0)} </Avatar>
                        <p className='user-login-username'>{user?.result?.name}</p>
                        {/* <p> {user?.result.picture} </p> */}
                    </div>
                    <button className='user-logout-button' onClick={logout}>Logout</button>
                </div>

            ) : (
                // Render div if user is not logged in
                <div className='user-login-sidebar'>
                    <GoogleLogin
                        className='google-login'
                        clientId="322468080997-j5gft9mrr0dqda6633fjthh6hvrn6ocb.apps.googleusercontent.com"
                        onSuccess={googleSuccess}
                        onError={googleFailure}
                        cookiePolicy="single_host_origin">
                    </GoogleLogin>
                </div>
            )}
        </div>
    )
}

export default UserLoginButton