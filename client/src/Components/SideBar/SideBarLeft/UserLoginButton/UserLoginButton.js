import React from 'react'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';import './UserLoginButton.scss'

const UserLoginButton = () => {
  return (
    <div className='user-login-sidebar'>
        <GoogleLogin className='google-login' clientId="322468080997-j5gft9mrr0dqda6633fjthh6hvrn6ocb.apps.googleusercontent.com"> </GoogleLogin>
    </div>
  )
}

export default UserLoginButton