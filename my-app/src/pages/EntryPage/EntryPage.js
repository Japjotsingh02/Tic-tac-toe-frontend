import React from 'react';
import { NavLink } from 'react-router-dom';
import CommonButton from '../../components/CommonButton/CommonButton';
import { Wrapper } from './EntryPage.style';

const EntryPage=()=> {
    return (
        <Wrapper>
            <div className='async'>async</div>
            <div className='appName'>tic tac toe</div>
            <NavLink to="/login">
                <CommonButton text="login" colorName="yellow"/>
            </NavLink>
            <NavLink to="/register">
                <button className='register'>Register</button>
            </NavLink>
        </Wrapper>
    );
}

export default EntryPage;