import styled from 'styled-components';

const LeaderBoxStyled = styled.div`
    align-items: center;
    background-color: ${({ theme }) => theme.palette.green};
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    font-size: 1.2rem;
    padding: 6px;
    text-align: center;
    width: 100%;
    img{
        border-radius: 50%;
        width: 90px;
    }
    .name{
        font-size: 1.4rem;
    }
    .bio{
        align-items: center;
        height: 100%;
        margin-top: 5px;
    }
`

export default function LeaderBox({ leader }){
    return(
        <LeaderBoxStyled>
            <img src={leader.img} alt={leader.name} />
            <span>{leader.job}</span>
            <span className='name'>{leader.name}</span>
            <span className='bio flexRow'>{leader.bio}</span>
        </LeaderBoxStyled>
    )
}