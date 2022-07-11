import styled from 'styled-components';
import Main from '../src/components/home/Main';
import InfoData from '../src/components/home/InfoData';

const HomeStyled = styled.main`
    font-family: 'Roboto', sans-serif;
    height: 1000vh;
`

export default function Home(){
    return(
        <HomeStyled>
            <Main />
            <InfoData />
        </HomeStyled>
    )
}