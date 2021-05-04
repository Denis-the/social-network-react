import { InputText } from "primereact/inputtext";
import styled from "styled-components";

export const InlineFormElemWrapper = styled.div`
    display:inline-block;
    padding:1.5rem 0.5rem 1rem 0.5rem;
`;


export const StyledInputText = styled(InputText)`
    width:${ props => props.styled?.width ? props => props.styled.width  : 'unset'};

`


export const ButtonBase = styled.button`
    justify-content:center;
    position:${ props => props.styled?.position ? props => props.styled.position  : 'unset'};
    width:${ props => props.styled?.width ? props => props.styled.width  : 'unset'};

`;