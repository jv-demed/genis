import styled from 'styled-components';
import { imgs } from '../../assets/images';
import { about } from '../../assets/texts';

const PurposeStyled = styled.section`
    background-color: ${({ theme }) => theme.palette.primary.pine};
    display: flex;
    gap: 20px;
    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        h2{
            font-size: 2rem;
            padding: 15px 0 10px 0;
        }
        span{
            font-size: 1.2rem;
        }
    }
    img{
        border-radius: 40px;
        width: 50%;
    }
    @media(max-width: 650px){
        flex-direction: column-reverse;
        img{
            width: 100%;
        }
        div{
            padding-bottom: 15px;
        }
    }
`

export default function Purpose(){
    return(
        <PurposeStyled className='container section'>
            <div>
                <h2>{about.purpose.title}</h2>
                <span>{about.purpose.text}</span>
            </div>
            <img src={imgs.dna.img} alt={imgs.dna.alt} />
        </PurposeStyled>
    )
}