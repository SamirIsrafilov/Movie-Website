import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Img from '../img/login.png';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import admin from '../data/users';
import Home from './Home';



const Login = () => {
    // Make Error when input be empty
    const [username, setUser] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleUsername = (e) => {
        //get name value
        setUsernameError('')
        setUser(e.target.value)
    }
    const handlePassword = (e) => {
        //get password value

        setPasswordError('')
        setPassword(e.target.value)
    }

    const authenticationSignIn = (e) => {
        e.preventDefault();
        if (username !== "") {
            //check username
            if (username === admin[0].username) {
                // is username  true 
                setUsernameError('')
                if (password === admin[0].password) {
                    // is password true 
                    localStorage.setItem('password', admin[0].password) // info set to localStorage
                    localStorage.setItem('username', admin[0].username)
                    localStorage.setItem('name', admin[0].name)
                    window.location.assign('/')
                }
                else {
                    setPasswordError('Password does not match with the e-mail address')
                }
            }
            else {
                setUsernameError('UserName does not match with our database')
            }

        }
        else {
            setUsernameError('UserName Required')
        }
        if (password === '') {
            setPasswordError('Password Required')
        }
    }
    const getUserName = localStorage.getItem('username')
    const getPassword = localStorage.getItem('password')
    // const getName=localStorage.getItem("name")
    return (
      <>
      {
        getUserName && getPassword ? <Home/>:
          <div className='my-5 py-5 login_page'>
          <div className='d-flex flex-column justify-content-center align-items-center'>
              <h2 className='text-white fw-bold'>Welcome Back !</h2>
              <p className='text-center text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
          <div className="container mt-5">
              <div className=" row" >
                  <div className="col-12 col-lg-6 " id='login_form'>
                      <form  onSubmit={authenticationSignIn}>
                          <div className="mb-3">
                              <label className="form-label text-white">Username</label>
                              <input
                                  type="text" className="form-control bg-transparent text-white rounded-0" required onChange={handleUsername} />
                                   {usernameError && <div className='text-danger'>{usernameError}</div>}
                          </div>
                          <div className="mb-3">
                              <label className="form-label text-white">Password</label>
                              <input
                                  type="password" onChange={handlePassword} className="form-control bg-transparent text-white rounded-0" required />
                                  {passwordError && <div className='text-danger'>{passwordError}</div>}
                          </div>
                          <div className="mb-3 form-check ">
                              <input type="checkbox" className="form-check-input" style={{ height: "13px", width: "13px" }} />
                              <label className="form-check-label text-white" >Save password</label>
                          </div>
                          <button type="submit" className="btn rounded-0 fs-5 mb-3" id='login_btn'><span>Login</span></button>
                          <Link to="/resetpassword" id='lost_password' >Lost your Password?</Link>

                          <div className="row mt-3" id='login_social_btn'>
                              <div className="col-12 col-sm-6 my-2">
                                  <button className='btn rounded-0' id='facebook_btn'><span><FaFacebookF /> Facebook</span></button>
                              </div>
                              <div className="col-12 col-sm-6 my-2">
                                  <button className='btn rounded-0' id='twitter_btn'><span><FaTwitter /> Twitter</span></button>
                              </div>
                          </div>
                          <p className='text-white text-center mt-4'>Don't have an account? Sign up here!</p>
                      </form>
                  </div>
                  <div className="col-12 col-lg-6 ">
                      <img src={Img} alt="Login img" className='img-fluid' />
                  </div>
              </div>
          </div>
      </div>
      }
      </>
    )
}
export default Login