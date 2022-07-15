import styled from 'styled-components';
import InfoCopy from './InfoCopy';
import InfoCompany from './InfoCompany';

const FooterStyled = styled.footer`
    align-items: center;
    background-color: ${({ theme }) => theme.palette.primary.nileBlue};
    color: ${({ theme }) => theme.palette.basics.white};
    display: flex;
    font-family: 'Roboto', sans-serif;
    justify-content: space-between;
    padding-bottom: 20px;
    padding-top: 20px;
    @media(max-width: 650px){
        flex-direction: column;
        gap: 20px;
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