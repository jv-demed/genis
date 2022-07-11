import styled from 'styled-components';
import { EdgeSection } from '../globals/EdgeSection';
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
        height: 60vh;
        justify-content: center;
        margin: 30px 0;
        span{
            line-height: 3.4rem;
        }
        .txt1, .txt3{
            color: ${({ theme }) => theme.palette.basics.white};
            font-size: 3.4rem;
            margin-right: 22%;
        }
        .txt2{
            font-size: 4rem;
            margin-right: 14%;
        }
    }
    @media(max-width: 650px){
        .content{
            background-position: right;
            .txt1, .txt3{
                font-size: 3rem;
                margin-right: 17%;
            }
            .txt2{
                font-size: 3.4rem;
                margin-right: 5%;
            }
        }
    }
`

export default function Main(){
    return(
        <MainStyled>
            <div className='content'>
                <span className='txt1'>{home.main.t1}</span>
                <span className='txt2 txtOrange'>{home.main.t2}</span>
                <span className='txt3'>{home.main.t3}</span>
            </div>
            <EdgeSection />
        </MainStyled>
    )
}