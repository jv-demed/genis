import styled from 'styled-components';

const FooterStyled = styled.footer`
    align-items: center;
    background-color: ${({ theme }) => theme.palette.primary.nileBlue};
    color: ${({ theme }) => theme.palette.basics.white};
    display: flex;
    font-family: 'Roboto', sans-serif;
    justify-content: center;
    padding: 40px 0;
`

export default function Footer(){
    return(
        <FooterStyled>
            Footer
        </FooterStyled>
    )
}