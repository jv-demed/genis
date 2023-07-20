import styled from 'styled-components';
import { contact } from '../../assets/texts';
import { EdgeSection } from '../globals/EdgeSection';
import { TextLabelInput } from '../inputs/TextLabelInput';
import { useState } from 'react';
import { insertRecord } from '../../services/supabaseService';

const ContactSectionStyled = styled.section`
    background-color: ${({ theme }) => theme.palette.blue};
    padding-top: 30px;
    .contact{
        gap: 15px;
        span{
            color: ${({ theme }) => theme.palette.white};
            font-size: 2rem;
        }
        form{
            background-color: ${({ theme }) => theme.palette.green};
            border-radius: 5px;
            gap: 25px;
            margin-bottom: 30px;
            padding: 10px;
            .inputs{
                gap: 10px;
                .group{
                    gap: 5px;
                }
            }
            .submit{
                justify-content: center;
                width: 100%;
                button{
                    border: none;
                    border-radius: 5px;
                    height: 30px;
                    width: 100px;
                }
            }
        }
    }
    @media(max-width: 650px){
        
    }
`

export default function ContactSection(){

    const [infos, setInfos] = useState({
        nome: '',
        whatsapp: '',
        email: ''
    })

    return(
        <ContactSectionStyled id='contato'>
            <div className='contact container flexColumn'>
                <span>{contact.title}</span>
                <form className='flexColumn' onSubmit={async e => {
                    e.preventDefault();
                    await insertRecord('contatos', infos)
                    .then(alert('Informação salva com sucesso!'));
                }}>
                    <div className='inputs flexColumn'>
                        <div className='group flexRow'>
                            <TextLabelInput 
                                label='Nome'
                                info='nome'
                                obj={infos}
                                setObj={setInfos}
                            />
                            <TextLabelInput 
                                label='Whatsapp'
                                info='whatsapp'
                                obj={infos}
                                setObj={setInfos}
                            />
                        </div>
                        <div className='group'>
                            <TextLabelInput 
                                type='email'
                                label='E-Mail'
                                info='email'
                                obj={infos}
                                setObj={setInfos}
                            />
                        </div>
                    </div>
                    <div className='submit flexRow'>
                        <button>Concluir</button>
                    </div>
                </form>
            </div>
            <EdgeSection />
        </ContactSectionStyled>
    )
}