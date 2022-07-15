import styled from 'styled-components';
import { AiOutlineTrademarkCircle } from 'react-icons/ai';
import { BsWhatsapp, BsInstagram, BsFacebook } from 'react-icons/bs';

const InfoCopyStyled = styled.div`
    .icons{
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
                <BsWhatsapp size={18} />
                <BsInstagram size={18} />
                <BsFacebook size={18} />
            </div>
        </InfoCopyStyled>
    )
}