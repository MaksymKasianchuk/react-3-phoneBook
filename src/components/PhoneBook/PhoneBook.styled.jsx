import styled from '@emotion/styled';
import { Form, ErrorMessage } from 'formik';


export const PhoneBookFormStyled = styled(Form)`
    border-radius:  ${props => props.theme.radii.cardBorderRadius}px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    border: 1px solid  ${props => props.theme.colors.border};
`;

export const FormGroup = styled.div`
    margin-bottom: 10px;
    width: 100%;
    &>label{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        &>input{
            display: inline-block;

            margin-top: 5px;
        }
    }
`;
export const ErrorMessageStyled = styled(ErrorMessage)`
    width: 100%;
    color: ${props => props.theme.colors.dangerColor}; 
    background-color: ${props => props.theme.colors.dangerBg};
    border-radius:  ${props => props.theme.radii.cardBorderRadius}px;
    margin-top: 5px;
    text-align: center;
    padding: 10px;
    border: 1px solid  ${props => props.theme.colors.border};
`; 

export const FormButton = styled.button`
    display: inline-block;
    border-radius:  ${props => props.theme.radii.button}px;
    outline: none;
    border: 1px solid ${props => props.theme.colors.border};
    background: cardBgColorDarker;
    padding: 10px 20px;
    margin-top: 20px;
    cursor: pointer;
    transition: opacity 250ms linear;
    &:hover{
        opacity: 0.5;
    }
`;

export const PhoneBookListStyled = styled.div`
    list-style: none;
    padding: 0;
    margin: 0;
    &>li{
        display: flex;
        justify-content: space-between;
        align-items: center;
        &:not(:last-child){
            margin-bottom: 10px;
        }
        &>p{
            margin: 0 20px 0 0;
            &>span{
                font-weight: 700;
            }
        }
    }
`;

export const PhoneBookListEmpty = styled.p`
    text-align: center;
    color: ${props => props.theme.colors.dangerColor}; 
`;

export const ListButton = styled.button`
    display: inline-block;
    border-radius: ${props => props.theme.radii.button}px;
    outline: none;
    border: 1px solid ${props => props.theme.colors.border};
    background: cardBgColorDarker;
    padding: 5px 10px;
    cursor: pointer;
    transition: all 250ms linear;
    &:hover{
        opacity: 0.5;
        background: ${props => props.theme.colors.dangerBg};
    }
`;