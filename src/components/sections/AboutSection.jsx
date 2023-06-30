import styled from 'styled-components';
import { EdgeSection } from '../globals/EdgeSection';
import { imgs } from '../../assets/images';
import { about } from '../../assets/texts';
import { leaders, team } from '../../assets/team';
import LeaderBox from '../team/LeaderBox';
import TeamBox from '../team/TeamBox';

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
    .info{
        font-size: 1.5rem;
        gap: 20px;
        .group{
            gap: 10px;
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
    }
    .team{
        font-size: 1.5rem;
        gap: 10px;
        .leaders, .team-members{
            gap: 10px;
        }
        .team-members{
            margin-top: 20px;
        }
    }
    @media(max-width: 650px){
        .about{
            flex-direction: column;
            gap: 15px;
            .dna{
                width: 80%;
            }
        }
        .group{
            .boxes{
                flex-direction: column;
            }
        }
        .leaders, .team-members{
            flex-direction: column;
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
            <div className='info flexColumn'>
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
            </div>
            <div className='team flexColumn container'>
                <span>Conheça a Equipe</span>
                <div className='leaders flexRow'>
                    {leaders.map(leader => {
                        return(
                            <LeaderBox key={leader.name} leader={leader} />
                        )
                    })}
                </div>
                <div className='team-members flexRow'>
                    {team.map(t => {
                        return(
                            <TeamBox key={t.name} team={t} />
                        )
                    })}
                </div>
            </div>
            <EdgeSection />
        </AboutSectionStyled>
    )
}