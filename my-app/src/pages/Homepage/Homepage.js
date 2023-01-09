import React, { useState } from 'react';
import CommonButton from '../../components/CommonButton/CommonButton';
import { Wrapper } from './Homepage.style';

function Homepage(props) {
    const [games,setgames]=useState(false);

    return (
        <Wrapper>
            <div className='games-text'>Your Games</div>
            {!games &&
            <>
                <div className='no-games-text'>No Games Found</div>
                <CommonButton text="start a new game"/>
            </>
            }   
            { games &&
                <div></div>
            }
        </Wrapper>
    );
}

export default Homepage;