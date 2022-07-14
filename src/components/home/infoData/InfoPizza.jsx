import styled from 'styled-components';
import { elements } from '../../../assets/images';
import { home } from '../../../assets/texts';

const InfoPizzaStyled = styled.div`
    display: flex;
    gap: 40px;
    img{
        height: 100%;
        width: 40%;
    }
    .txt{
        display: flex;
        flex-direction: column;
        padding-top: 100px;
        width: 50%;
    }
    @media(max-width: 650px){
        align-items: center;
        flex-direction: column;
        img{
            width: 60%;
        }
        .txt{
            padding-top: 0;
            text-align: center;
            width: 100%;
        }
    }
`

export default function InfoPizza(){
    return(
        <InfoPizzaStyled>
            <img src={elements.graphPizza.img} alt={elements.graphPizza.alt} />
            <div className='txt'>
                <span>{home.infoData.infoPizza.txt}</span>
                <span>{home.infoData.infoPizza.quote}</span>
            </div>
        </InfoPizzaStyled>
    )
}