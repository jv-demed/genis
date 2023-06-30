import styled from 'styled-components';
import { EdgeSection } from '../globals/EdgeSection';
import { imgs } from '../../assets/images';
import { about } from '../../assets/texts';

const AboutSectionStyled = styled.section`
    background-color: ${({ theme }) => theme.palette.blue};
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding-top: 30px;
    span{
        color: ${({ theme }) => theme.palette.white};
    }
    .about{
        align-items: center;
        font-size: 2.6rem;
        justify-content: space-between;
        .dna{
            border-radius: 65% 35% 46% 54% / 43% 62% 38% 57%;
            box-shadow: 1px 1px 1px black;
            width: 25%;
        }
    }
    .group{
        font-size: 1.5rem;
        gap: 10px;
        padding-bottom: 30px;
        .boxes{
            gap: 10px;
            .box{
                align-items: center;
                background-color: ${({ theme }) => theme.palette.green};
                border-radius: 5px;
                padding: 15px;
                text-align: center;
                width: 100%;
            }
        }
    }
    @media(max-width: 650px){
        .about{
            flex-direction: column;
            .dna{
                width: 80%;
            }
        }
        .group{
            .boxes{
                flex-direction: column;
            }
        }
    }
`

export default function AboutSection(){
    return(
        <AboutSectionStyled id='sobre'>
            <div className='about container flexRow'>
                <span>{about.slogan}</span>
                <img className='dna'
                    src={imgs.dna.img} 
                    alt={imgs.dna.alt} 
                />
            </div>
            <div className='group flexColumn container'>
                <span>{about.values.title}</span>
                <div className='boxes flexRow'>
                    <div className='box flexRow'>
                        <span>{about.values.v1}</span>
                    </div>
                    <div className='box flexRow'>
                        <span>{about.values.v2}</span>
                    </div>
                    <div className='box flexRow'>
                        <span>{about.values.v3}</span>
                    </div>
                </div>
            </div>
            <div className='group flexColumn container'>
                <span>{about.mission.title}</span>
                <div className='boxes flexRow'>
                    <div className='box flexRow'>
                        <span>{about.mission.txt}</span>
                    </div>
                </div>
            </div>
            <EdgeSection />
        </AboutSectionStyled>
    )
}