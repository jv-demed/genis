import styled from 'styled-components';
import { home } from '../../../assets/texts';

const InfoArticlesStyled = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 15%;
    text-align: center;
    @media(max-width: 650px){
        padding: 0;
    }
`

export default function InfoArticles(){
    return(
        <InfoArticlesStyled>
            <span className='txtHighlight'>{home.infoData.infoArticles.num}</span>
            <span>{home.infoData.infoArticles.txt}</span>
            <span>{home.infoData.infoArticles.quote}</span>
        </InfoArticlesStyled>
    )
}