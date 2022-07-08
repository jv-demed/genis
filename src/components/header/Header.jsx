import Link from 'next/link';
import styled from 'styled-components';
import { useMedia } from 'use-media';
import { logos } from '../../assets/images';
import MenuMobile from './MenuMobile';
import MenuDesktop from './MenuDesktop';

const HeaderStyled = styled.header`
    align-items: center;
    background-color: ${({ theme }) => theme.palette.primary.nileBlue};
    display: flex;
    font-family: 'Roboto', sans-serif;
    height: 75px;
    justify-content: space-between;
    position: sticky;
        top: 0;
    .logo{
        height: 80%;
    }
    a{
        color: ${({ theme }) => theme.palette.basics.white};
    }
`

export default function Header(){

    const isMobile = useMedia({ maxWidth: 650 });

    return(
        <HeaderStyled className='container'>
            <Link href='/'>
                <img className='logo' src={logos.logo.img} alt={logos.logo.alt} />
            </Link>
            {isMobile ? <MenuMobile /> : <MenuDesktop />}
        </HeaderStyled>
    )
}