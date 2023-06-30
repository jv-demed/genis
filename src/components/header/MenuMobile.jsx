import Link from 'next/link';
import styled from 'styled-components';
import { Popover } from '@headlessui/react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { VscChromeClose } from 'react-icons/vsc';
import { menuItems } from './menu';

const MenuMobileStyled = styled.nav`
    @keyframes slide{
        0%{
            right: -100%;
        }100%{
            right: 0;
        }
    }
    .hamburger{
        background-color: rgba(0,0,0,0);
        border: none;
        color: ${({ theme }) => theme.palette.basics.white};
        display: flex;
        font-size: 1.6rem;
        outline: none;
    }
    .menu{
        animation: slide 0.2s linear;
        background-color: ${({ theme }) => theme.palette.primary.nileBlue};
        display: flex;
        flex-direction: column;
        height: 100vh;
        width: 100%;
        position: fixed;
            right: 0;
            top: 0;
        .defaultBtn{
            background-color: rgba(0,0,0,0);
            border: none;
            color: ${({ theme }) => theme.palette.basics.white};
        }
        .header{
            align-items: center;
            display: flex;
            justify-content: right;
            height: 75px;
            .closeBtn{
                font-size: 2rem;
            }
        }
        ul{
            display: flex;
            flex-direction: column;
            gap: 10px;
            li{
                border-bottom: 2px solid ${({ theme }) => theme.palette.basics.white};
                display: flex;
                justify-content: center;
                .item{
                    font-size: 1.4rem;
                }
            }
        }
    }
`

export default function MenuMobile(){
    return(
        <MenuMobileStyled>
            <Popover>
                <Popover.Button className='hamburger'>
                    <GiHamburgerMenu />
                </Popover.Button>
                <Popover.Panel className='menu container'>
                    <div className='header'>
                        <Popover.Button className='defaultBtn closeBtn'>
                            <VscChromeClose />
                        </Popover.Button>
                    </div>
                    <ul>
                        {menuItems.map(item => {
                            return(
                                <li>
                                    <Link href={item.link}>
                                        <a>
                                            <Popover.Button className='defaultBtn item'>
                                                {item.section}
                                            </Popover.Button>
                                        </a>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </Popover.Panel>
            </Popover>
        </MenuMobileStyled>
    )
}