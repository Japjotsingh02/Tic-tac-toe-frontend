import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import CommonButton from '../../components/CommonButton/CommonButton';
import back from '../../images/back.svg';
import { Wrapper } from './Login.style';

function Login(props) {
    const [login,setLogin]=useState(false);
    const [username,setUserName]=useState("");
    const [password,setPassword]=useState("");

    const loginUser=()=>{
        setLogin(true);
    }

    return (
        <Wrapper>
            <NavLink to="/">
                <img src={back} alt="back"></img>
            </NavLink>
            <div className='heading'>Login</div>
            <div className='desc'>Please enter your details</div>
            <form className='form'>
                <div  className='flex'>
                    <label className="label">UserName</label>
                    <input className="input" type="text"  placeholder='Type your username here' onChange={(e)=>{
                        setUserName(e.target.value);
                    }}/>
                </div>
                <div  className='flex'>
                    <label className="label" >Password</label>
                    <input className="input" type="password" placeholder='Type your password here' onChange={(e)=>{
                        setPassword(e.target.value);
                    }}/>
                </div>
            </form>
            {!login && <div className='congratulations'>Enter Correct Details</div>}
            <CommonButton text="login" callback={loginUser} colorName="yellow"/>
        </Wrapper>
    );
}

export default Login;