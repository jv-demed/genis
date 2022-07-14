import styled from 'styled-components';
import InfoPizza from './InfoPizza';
import InfoArrow from './InfoArrow';
import InfoMap from './infoMap';
import InfoArticles from './InfoArticles';
import { EdgeSection } from '../../globals/EdgeSection';

const InfoDataStyled = styled.section`
    display: flex;
    flex-direction: column;
    font-size: 1.6rem;
    gap: 40px;
    .content{
        display: flex;
        flex-direction: column;
        gap: 60px;
        padding-bottom: 40px;
        padding-top: 60px;
    }
`

export default function InfoData(){
    return(
        <InfoDataStyled>
            <div className='container content'>
                <InfoPizza />
                <InfoArrow />
                <InfoMap />
                <InfoArticles />
            </div>
            <EdgeSection />
        </InfoDataStyled>
    )
}