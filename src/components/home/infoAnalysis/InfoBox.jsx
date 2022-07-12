import styled from 'styled-components';

const InfoBoxStyled = styled.div`
    align-items: center;
    display: flex;
    flex-direction: ${props => props.row};
    gap: 20px;
    text-align: center;
    @media(max-width: 650px){
        flex-direction: column
    }
`

export default function InfoBox({ img, row, txt }){
    return(
        <InfoBoxStyled row={row}>
            <span>{txt}</span>
            <img src={img.img} alt={img.alt} />
        </InfoBoxStyled>
    )
}