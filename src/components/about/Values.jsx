import styled from 'styled-components';
import { imgs } from '../../assets/images';
import { about } from '../../assets/texts';

const ValuesStyled = styled.section`
    background-color: ${({ theme }) => theme.palette.primary.sunsetOrange};
    display: flex;
    flex-direction: column;
    gap: 20px;
    h2{
        font-size: 2rem;
        padding: 15px 0;
    }
    .box{
        display: flex;
        gap: 0.5%;
        justify-content: space-between;
        padding-bottom: 15px;
        .box-values{
            background-color: ${({ theme }) => theme.palette.primary.tangerine};
            border-radius: 40px;
            display: flex;
            font-size: 1.4rem;
            padding: 20px;
            width: 33%;
        }
    }
    @media(max-width: 650px){
        .box{
            flex-direction: column;
            row-gap: 15px;
            .box-values{
                width: 100%;
            }
        }
    }
`

export default function Values(){
    return(
        <ValuesStyled className='container section'>
            <h2>{about.values.title}</h2>
            <div className='box'>
                <div className='box-values'>
                    <p>{about.values.v1}</p>
                </div>
                <div className='box-values'>
                    <p>{about.values.v2}</p>
                </div>
                <div className='box-values'>
                    <p>{about.values.v3}</p>
                </div>
            </div>
        </ValuesStyled>
    )
}