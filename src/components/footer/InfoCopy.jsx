import styled from 'styled-components';
import { AiOutlineTrademarkCircle } from 'react-icons/ai';
import { BsWhatsapp, BsInstagram, BsFacebook } from 'react-icons/bs';

const InfoCopyStyled = styled.div`
    text-align: center;
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
                <BsWhatsapp size={25} />
                <BsInstagram size={25} />
                <BsFacebook size={25} />
            </div>
        </InfoCopyStyled>
    )
}