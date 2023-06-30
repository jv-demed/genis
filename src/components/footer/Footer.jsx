import styled from 'styled-components';
import InfoCopy from './InfoCopy';
import InfoCompany from './InfoCompany';

const FooterStyled = styled.footer`
    align-items: center;
    background-color: ${({ theme }) => theme.palette.purple};
    color: ${({ theme }) => theme.palette.white};
    display: flex;
    font-family: 'Roboto', sans-serif;
    font-size: 1.2rem;
    justify-content: space-between;
    padding-bottom: 40px;
    padding-top: 40px;
    @media(max-width: 650px){
        flex-direction: column;
        gap: 30px;
    }
`

export default function Footer(){
    return(
        <FooterStyled className='container'>
            <InfoCopy />
            <InfoCompany />
        </FooterStyled>
    )
}