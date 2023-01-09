import styled from 'styled-components';

export const Wrapper=styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Bilbo&family=Epilogue:wght@400;700&family=Work+Sans&display=swap');
    
    margin:1.5rem;

    .heading{
        font-family: 'Epilogue';
        font-weight: 700;
        font-size: 14px;
        margin-top:2.5rem;
        line-height: 14px;
        color: #333333;
    }

    .desc{
        font-family: 'Epilogue';
        font-weight: 700;
        font-size: 28px;
        line-height: 32px;
        letter-spacing: -0.05em;
        color: #333333;
        margin-top:11px;
    }

    .form{
        margin:2.5rem 0 9.5rem;
    }

    .label{
        font-family: 'Epilogue';
        font-weight: 700;
        font-size: 14px;
        line-height: 14px;
        color: #333333;
    }

    .input{
        padding: 20px 16px 16px;
        background: #F4F4F4;
        border-radius: 8px;
        font-family: 'Epilogue';
        border:0;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        color: #333333;
        opacity: 0.5;
    }

    .flex{
        display:flex;
        gap:12px;
        flex-direction:column;
        margin-top:1rem;
    }

    .congratulations{
        padding:26px 16px;
        font-family: 'Epilogue';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 150%;
        color: #FFFFFF;
        background: #EB5757;
        border-radius: 8px;
        margin-bottom:1rem;
    }
`;