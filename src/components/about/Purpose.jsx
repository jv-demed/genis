import styled from 'styled-components';
import { imgs } from '../../assets/images';
import { about } from '../../assets/texts';

const PurposeStyled = styled.section`
    background-color: ${({ theme }) => theme.palette.primary.pine};
    color: ${({ theme }) => theme.palette.basics.white};
    display: flex;
    padding-bottom: 20px;
    padding-top: 20px;
    .txt{
        display: flex;
        flex-direction: column;
        justify-content: center;
        h2{
            font-size: 2.5rem;
            padding: 15px 0 10px 0;
        }
        span{
            font-size: 1.4rem;
        }
    }
    img{
        border-radius: 40px;
        width: 40%;
    }
    @media(max-width: 650px){
        flex-direction: column-reverse;
        gap: 15px;
        img{
            width: 100%;
        }
        .txt{
            padding-bottom: 15px;
        }
    }
`

export default function Purpose(){
    return(
        <PurposeStyled className='container'>
            <div className='txt'>
                <h2>{about.purpose.title}</h2>
                <span>{about.purpose.text}</span>
            </div>
            <img src={imgs.dna.img} alt={imgs.dna.alt} />
        </PurposeStyled>
    )
}