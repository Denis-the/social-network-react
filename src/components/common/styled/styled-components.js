import styled from "styled-components";

export const InlineFormElemWrapper = styled.div`
    display:inline-block;
    padding:1.5rem 0.5rem 1rem 0.5rem;
`;


export const ButtonBase = styled.button`
    ${console.log(props => props.styled)}
    position:unset;
    margin:0.2rem;
    width:${ props => props.styled?.width || '100px'}
`;