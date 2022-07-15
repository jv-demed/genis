import styled from 'styled-components';
import { BsPhone } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { infos } from '../../assets/infos';

const InfoCompanyStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    span{
        align-items: center;
        display: flex;
        gap: 8px;
        justify-content: right;
    }
    @media(max-width: 650px){
        padding-left: 20px;
        span{
            flex-direction: row-reverse;
            justify-content: left;
        }
    }
`

export default function InfoCompany(){
    return(
        <InfoCompanyStyled>
            <span>
                {infos.whatsapp}
                <BsPhone size={20} />
            </span>
            <span>
                {infos.gmail}
                <HiOutlineMail size={20} />
            </span>
        </InfoCompanyStyled>
    )
}