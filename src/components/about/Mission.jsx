import styled from 'styled-components';
import { EdgeSection } from '../globals/EdgeSection';
import { bgs } from '../../assets/images';
import { about } from '../../assets/texts';

const MissionStyled = styled.section`
    display: flex;
    flex-direction: column;
    .content{
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 30px 20%;
        text-align: center;
        p{
            background-color: rgba(0,0,0,0.1);
            border-radius: 40px;
            font-size: 2rem;
            padding: 20px
        }
    }
    @media(max-width: 650px){
        .content{
            padding: 30px 20px;
        }
    }
`

export default function Mission(){
    return(
        <MissionStyled>
            <div className='container content'>
                <h2 className='txtHighlight'>{about.mission.title}</h2>
                <p>{about.mission.txt}</p>
            </div>
            <EdgeSection />
        </MissionStyled>
    )
}