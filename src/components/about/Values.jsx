import styled from 'styled-components';
import { about } from '../../assets/texts';

const ValuesStyled = styled.section`
        color: black;
        display: flex;
        flex-direction: column;
        gap: 30px;
        padding-top: 30px;
        h2{
            color: ${({ theme }) => theme.palette.primary.sunsetOrange};
        }
        .txt-group{
            display: flex;
            gap: 2%;
            justify-content: space-between;
            text-align: center;
            .txt{
                background-color: rgba(0,0,0,0.1);
                border-radius: 40px;
                display: flex;
                font-size: 1.6rem;
                padding: 20px;
                padding-bottom: 10px;
                width: 32%;
            }
    }
    @media(max-width: 650px){
        .txt-group{
            flex-direction: column;
            row-gap: 15px;
            .txt{
                width: 100%;
            }
        }
    }
`

export default function Values(){
    return(
        <ValuesStyled className='container'>
            <h2 className='txtHighlight'>{about.values.title}</h2>
            <div className='txt-group'>
                <div className='txt'>
                    <p>{about.values.v1}</p>
                </div>
                <div className='txt'>
                    <p>{about.values.v2}</p>
                </div>
                <div className='txt'>
                    <p>{about.values.v3}</p>
                </div>
            </div>
        </ValuesStyled>
    )
}