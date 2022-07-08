import Purpose from '../src/components/about/Purpose';
import Values from '../src/components/about/Values';
import styled from 'styled-components';

const SobreStyled = styled.main`
    color: ${({ theme }) => theme.palette.basics.white};
    font-family: 'Roboto', sans-serif;
`

export default function Sobre(){
    return(
        <SobreStyled>
            <Purpose />
            <Values />
        </SobreStyled>
    )
}