import styled from 'styled-components';
import { bgs } from '../../assets/images';
import { home } from '../../assets/texts';
import { EdgeSection } from '../globals/EdgeSection';

const HomeSectionStyled = styled.section`
    .presentation{
        align-items: flex-end;
        background-image: url(${bgs.home.img});
        background-position: bottom;
        background-size: cover;
        gap: 5px;
        height: 70vh;
        justify-content: center;
        span{
            line-height: 3.4rem;
        }
        .title1, .title2, .title3{
            background-color: white;
            color: ${({ theme }) => theme.palette.orange};
            font-size: 3.4rem;
            margin-right: 22%;
            padding: 0 5px;
        }
        .title2{
            font-size: 4rem;
            margin-right: 14%;
        }
    }
    .content{
        font-size: 1.6rem;
        gap: 15px;
        padding-bottom: 60px;
        padding-top: 60px;
        text-align: justify;
    }
`

export default function HomeSection(){
    return(
        <HomeSectionStyled id='home'>
            <div className='presentation flexColumn'>
                <span className='title1'>{home.presentation.t1}</span>
                <span className='title2'>{home.presentation.t2}</span>
                <span className='title3'>{home.presentation.t3}</span>
            </div>
            <EdgeSection />
            <div className='content container flexColumn'>
                {home.content.map(txt => {
                    return(
                        <span>{txt}</span>
                    )
                })}
            </div>
            <EdgeSection />
        </HomeSectionStyled>
    )
}