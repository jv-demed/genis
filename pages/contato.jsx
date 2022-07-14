import styled from 'styled-components'
import FormContact from '../src/components/contact/FormContact';

const ContatoStyled = styled.main`
    display: flex;
    flex-direction: column;
    font-family: 'Roboto', sans-serif;
    gap: 20px;
    padding-bottom: 30px;
    padding-top: 30px;
`

export default function Contato(){
    return(
        <ContatoStyled className='container'>
            <h2 className='txtHighlight'>Contato</h2>
            <FormContact />
        </ContatoStyled>
    )
}