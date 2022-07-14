import styled from 'styled-components';

const MemberTeamStyled = styled.div`
    align-items: center;
    background-color: rgba(0,0,0,0.1);
    border-radius: 40px;
    display: flex;
    gap: 20px;
    padding: 20px;
    img{
        width: 15%;
    }
    @media(max-width: 650px){
        flex-direction: column;
    }
`

export default function MemberTeam({ imgMember, txtMember }){
    return(
        <MemberTeamStyled>
            <img src={imgMember.img} alt={imgMember.alt} />
            {txtMember}
        </MemberTeamStyled>
    )
}