import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        font-family: 'Urbanist', sans-serif;
        margin: 0;
        padding: 0;
    }
    html{
        scroll-behavior: smooth;
    }
    a{
        text-decoration: none;
    }
    li{
        list-style: none;
    }
    span{
        color: ${({ theme }) => theme.palette.txt};;
    }
    .txtHighlight{
        color: ${({ theme }) => theme.palette.primary.sunsetOrange};
        font-size: 3rem;
    }
    .flexRow{
        display: flex;
        flex-direction: row;
    }
    .flexColumn{
        display: flex;
        flex-direction: column;
    }
`

export default GlobalStyle;