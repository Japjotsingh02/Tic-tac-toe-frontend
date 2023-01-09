import React, { useState } from 'react';
import CommonButton from '../../components/CommonButton/CommonButton';
import { Wrapper } from './Register.style';
import back from '../../images/back.svg';
import { NavLink } from 'react-router-dom';
import Axios from 'axios';
import Cookies from 'universal-cookie';

function Register(props) {
    const [created,setCreated]=useState(false);
    const [user,setUser]=useState(null);
    const cookies=new Cookies();

    const registerUser=()=>{
        setCreated(true);
    };

    const signUp=()=>{
        Axios.post("http://localhost:3001/auth/register",user).then(res=>{
            const {token,userId,name,username,email,hashedPassword }=res.data;
            cookies.set("token",token);
            cookies.set("userId",userId);
            cookies.set("userName",username);
            cookies.set("name",name);
            cookies.set("email",email);
            cookies.set("hashedPassword",hashedPassword);
        })
    };

    return (
        <Wrapper>
            <NavLink to="/">
                <img src={back} alt="back"></img>
            </NavLink>
            <div className='heading'>Create Account</div>
            <div className='desc'>Let’s get to know you better!</div>
            <form className='form'>
                <div className='flex'>
                    <label className="label">Your Name</label>
                    <input className="input" type="text"  placeholder='Type your name here' onChange={(e)=>{
                        setUser({...user,name:e.target.value});
                    }}/>
                </div>
                <div className='flex'>
                    <label className="label">UserName</label>
                    <input className="input" type="text"  placeholder='Type your username here' onChange={(e)=>{
                        setUser({...user,userName:e.target.value});
                    }}/>
                </div>
                {!created &&
                    <div className='flex'>
                        <label className="label" >Email</label>
                        <input className="input" type="email" placeholder='Type your email here' onChange={(e)=>{
                        setUser({...user,email:e.target.value});
                    }}/>
                    </div>
                }
                <div  className='flex'>
                    <label className="label" >Password</label>
                    <input className="input" type="password" placeholder='Type your password here' onChange={(e)=>{
                        setUser({...user,password:e.target.value});
                    }}/>
                </div>
            </form>
            {created && <div className='congratulations'>Congratulations!!! Account created.</div>}
            <CommonButton text="register" callback={registerUser} colorName="yellow"/>
        </Wrapper>
    );
}

export default Register;