import styled from 'styled-components';
import { elements } from '../../../assets/images';
import { home } from '../../../assets/texts';

const InfoArrowStyled = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 12%;
    .part1{
        align-items: end;
        display: flex;
        justify-content: center;
        .txt{
            text-align: center;
        }
    }
    .part2{
        align-items: center;
        display: flex;
        flex-direction: column;
        text-align: center;
    }
    @media(max-width: 650px){
        padding: 0;
        .part1{
            align-items: center;
            flex-direction: column-reverse;
        }
    }
`

export default function InfoArrow(){
    return(
        <InfoArrowStyled>
            <div className='part1'>
                <div className='txt'>
                    <span>{home.infoData.infoArrow.txt1}</span><br/>
                    <span className='txtHighlight'>{home.infoData.infoArrow.txt2}</span>
                </div>
                <img src={elements.arrow.img} alt={elements.arrow.alt} />
            </div>
            <div className='part2'>
                <span>{home.infoData.infoArrow.txt3}</span>
                <span>{home.infoData.infoArrow.quote}</span>
            </div>
        </InfoArrowStyled>
    )
}