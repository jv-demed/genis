import Link from 'next/link';
import styled from 'styled-components';
import { menuItems } from './menu';

const MenuDesktopStyled = styled.nav`
    ul{
        display: flex;
        font-size: 1.2rem;
        gap: 20px;
        a{
            font-size: 1.2rem;
            font-weight: bold;
        }
        a:hover{
            opacity: 0.7;
            transition: all 0.4s;
        }
    }
`

export default function MenuDesktop(){
    return(
        <MenuDesktopStyled>
            <ul>
                {menuItems.map(item => {
                    return(
                        <li key={item.section}>
                            <Link href={item.link}>
                                <a style={{ color: item.color }}>
                                    {item.section}
                                </a>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </MenuDesktopStyled>
    )
}