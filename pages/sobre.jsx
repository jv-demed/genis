import Purpose from '../src/components/about/Purpose';
import Values from '../src/components/about/Values';
import Mission from '../src/components/about/Mission';
import Team from '../src/components/about/team';
import styled from 'styled-components';

const SobreStyled = styled.main`
    font-family: 'Roboto', sans-serif;
`

export default function Sobre(){
    return(
        <SobreStyled>
            <Purpose />
            <Values />
            <Mission />
            <Team />
        </SobreStyled>
    )
}