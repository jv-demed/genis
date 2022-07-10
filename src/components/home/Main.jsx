import styled from 'styled-components';
import { bgs } from '../../assets/images';
import { home } from '../../assets/texts';

const MainStyled = styled.main`
    .content{
        align-items: flex-end;
        background-image: url(${bgs.main.img});
        background-position: center;
        background-size: cover;
        display: flex;
        flex-direction: column;
        font-family: 'Roboto', sans-serif;
        font-size: 3.4rem;
        height: 60vh;
        justify-content: center;
        margin: 30px 0;
        span{
            line-height: 3.2rem;
        }
        .txt1, .txt3{
            color: ${({ theme }) => theme.palette.basics.white};
            margin-right: 20%;
        }
        .txt2{
            color: ${({ theme }) => theme.palette.primary.sunsetOrange};
            margin-right: 15%;
        }
    }
    .edge{
        border-bottom: 4px solid ${({ theme }) => theme.palette.primary.sunsetOrange};
        margin: 0 25%;
    }
    @media(max-width: 650px){
        .content{
            background-position: right;
            .txt1, .txt3{
                margin-right: 15%;
            }
            .txt2{
                margin-right: 7%;
            }
        }
    }
`

export default function Main(){
    return(
        <MainStyled>
            <div className='content'>
                <span className='txt1'>{home.main.t1}</span>
                <span className='txt2'>{home.main.t2}</span>
                <span className='txt3'>{home.main.t3}</span>
            </div>
            <div className='edge' />
        </MainStyled>
    )
}