import styled from 'styled-components';
import { infos } from '../../assets/infos';
import { AiOutlineTrademarkCircle, AiOutlineLinkedin } from 'react-icons/ai';
import { BsWhatsapp, BsInstagram, BsFacebook } from 'react-icons/bs';

const InfoCopyStyled = styled.div`
    text-align: center;
    span, a{
        color: ${({ theme }) => theme.palette.white};
    }
    .icons{
        align-items: center;
        display: flex;
        gap: 10px;
        margin-top: 10px
    }
    @media(max-width: 650px){
        .icons{
            justify-content: center;
        }
    }
`

export default function InfoCopy(){
    return(
        <InfoCopyStyled>
            <span>
                Desenvolvido por <b>GenIS - Genetics and Innovative Solutions</b>.
                <br />Todos os direitos reservados 
                <AiOutlineTrademarkCircle />
            </span>
            <div className='icons'>
                <a href={`https://wa.me/${infos.whatsapp}`} target='_blank'>
                    <BsWhatsapp size={25} />
                </a>
                <a href={`https://www.instagram.com/${infos.instagram}`} target='_blank'>
                    <BsInstagram size={25} />
                </a>
                <a href={`https://www.linkedin.com/in//${infos.linkedin}`} target='_blank'>
                    <AiOutlineLinkedin size={28} />
                </a>
            </div>
        </InfoCopyStyled>
    )
}