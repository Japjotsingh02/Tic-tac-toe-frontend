import React from 'react';
import { Button } from './CommonButton.style';

function CommonButton({text,callback}) {
    return (
        <Button onClick={callback}>{text}</Button>
    );
}

export default CommonButton;