import styled from 'styled-components';
import { elements } from '../../../assets/images';
import { home } from '../../../assets/texts';

const InfoMapStyled = styled.div`
    align-items: center;
    display: flex;
    .txt{
        display: flex;
        flex-direction: column;
        text-align: center;
    }
    @media(max-width: 650px){
        flex-direction: column-reverse;
        gap: 20px;
    }
`

export default function InfoMap(){
    return(
        <InfoMapStyled>
            <div className='txt'>
                <span className='txtHighlight'>{home.infoData.infoMap.num}</span>
                <span>{home.infoData.infoMap.txt}</span>
                <span>{home.infoData.infoMap.quote}</span>
            </div>
            <img src={elements.brazilMap.img} alt={elements.brazilMap.alt}/>
        </InfoMapStyled>
    )
}