import styled from '@emotion/styled';

export const FilterStyled = styled.div`
    &>label{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        &>input{
            margin-top: 5px;
        }
    }
`;