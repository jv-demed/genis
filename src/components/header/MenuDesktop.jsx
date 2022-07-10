import Link from 'next/link';
import styled from 'styled-components';

const MenuDesktopStyled = styled.nav`
    ul{
        display: flex;
        font-size: 1.2rem;
        gap: 20px;
        a:hover{
            color: ${({ theme }) => theme.palette.basics.grayI200};
        }
    }
`

export default function MenuDesktop(){
    return(
        <MenuDesktopStyled>
            <ul>
                <li>
                    <Link href='/'>
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href='/produtos'>
                        <a>Produtos</a>
                    </Link>
                </li>
                <li>
                    <Link href='/contato'>
                        <a>Contato</a>
                    </Link>
                </li>
                <li>
                    <Link href='/sobre'>
                        <a>Sobre Nós</a>
                    </Link>
                </li>
                <li>
                    <Link href='/parceiros'>
                        <a>Parceiros</a>
                    </Link>
                </li>
            </ul>
        </MenuDesktopStyled>
    )
}