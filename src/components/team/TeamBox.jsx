import styled from 'styled-components';

const TeamBoxStyled = styled.div`
    align-items: center;
    background-color: ${({ theme }) => theme.palette.green};
    border-radius: 5px;
    display: flex;
    font-size: 1rem;
    justify-content: space-evenly;
    padding: 5px 10px;
    text-align: center;
    width: 100%;
    img{
        border-radius: 50%;
        width: 60px;
    }
    .infos{
        .name{
            font-size: 1.2rem;
        }
    }
    @media(max-width: 650px){
        gap: 10px;
        justify-content: center;
        padding: 5px 20px;
        img{
            width: 90px;
        }
        .infos{
            width: 65%;
        }
    }
`

export default function TeamBox({ team }){
    return(
        <TeamBoxStyled>
            <img src={team.img} alt={team.name} />
            <div className='infos flexColumn'>
                <span className='name'>{team.name}</span>
                <span>{team.job}</span>
                <span>{team.study}</span>
            </div>
        </TeamBoxStyled>
    )
}