import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    a{
        text-decoration: none;
    }
    li{
        list-style: none;
    }
    .txtOrange{
        color: ${({ theme }) => theme.palette.primary.sunsetOrange};
    }
`

export default GlobalStyle;