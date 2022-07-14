import styled from 'styled-components';
import MemberTeam from './MemberTeam';
import { about } from '../../../assets/texts';
import { logos } from '../../../assets/images';

const TeamStyled = styled.section`
    background-color: ${({ theme }) => theme.palette.primary.pine};
    color: ${({ theme }) => theme.palette.basics.white};
    display: flex;
    flex-direction: column;
    padding-bottom: 40px;
    padding-top: 20px;
    h2{
        font-size: 3rem;
    }
    .content{
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding-top: 20px;
    }
    @media(max-width: 650px){
        
    }
`

export default function Team(){
    return(
        <TeamStyled className='container'>
            <h2>Conheça a Equipe</h2>
            <div className='content'>
                <MemberTeam imgMember={logos.logo} txtMember={about.team.mayara} />
                <MemberTeam imgMember={logos.logo} txtMember={about.team.rubia} />
            </div>
        </TeamStyled>
    )
}