import styled from 'styled-components';
import Main from '../src/components/home/Main';
import InfoData from '../src/components/home/infoData';
import BrSection from '../src/components/home/BrSection';
import InfoAnalysis from '../src/components/home/infoAnalysis';

const HomeStyled = styled.main`
    font-family: 'Roboto', sans-serif;
`

export default function Home(){
    return(
        <HomeStyled>
            <Main />
            <InfoData />
            <BrSection />
            <InfoAnalysis />
        </HomeStyled>
    )
}