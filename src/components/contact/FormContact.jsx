import { useRef } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';

const FormContactStyled = styled.form`
    align-items: center;
    background-color: rgba(0,0,0,0.2);
    background-color: ${({ theme }) => theme.palette.primary.pine};
    border-radius: 40px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 20px;
    input{
        border: none;
        border-radius: 40px;
        font-size: 1.5rem;
        height: 40px;
        padding: 0 15px;
        width: 100%;
    }
    textarea{
        border: none;
        border-radius: 20px;
        font-size: 1.5rem;
        height: 150px;
        padding: 10px 15px;
        resize: none;
        width: 100%;
    }
    button{
        border: none;
        border-radius: 20px;
        font-size: 1.5rem;
        height: 40px;
        width: 50%;
    }
    button:hover{
        background-color: ${({ theme }) => theme.palette.primary.sunsetOrange};
        color: ${({ theme }) => theme.palette.basics.white};
        transition: 0.3s;
    }
    @media(max-width: 650px){
        button{
            width: 100%;
        }
    }
`

export default function FormContact(){

    const emailJsData = {
        serviceId: 'service_5ix1r2s',
        templateId: 'template_w523fdt',
        userId: 'user_vr3jUy6AfdfYlYsbdi5fA',
        successMessage: 'Mensagem enviada com sucesso!',
        failedMessage: 'Erro ao enviar sua mensagem!'
    }

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();    
        emailjs.sendForm(emailJsData.serviceId, emailJsData.templateId, 
                        form.current, emailJsData.userId)
            .then((result) => {
              console.log(result.text);
              alert(emailJsData.successMessage);
            }, (error) => {
              console.log(error.text);
              alert(emailJsData.failedMessage);
            });
            e.target.reset();
    };

    return(
        <FormContactStyled ref={form} onSubmit={sendEmail}>
            <input type='text' placeholder='Nome*' name='name' required />
            <input type='email' placeholder='E-Mail*' name='email' required />
            <input type='text' placeholder='Whatsapp' name='whatsapp' />
            <input type='text' placeholder='Assunto' name='subject'/>
            <textarea placeholder='Sua mensagem*' name='message' required />
            <button>Enviar</button>
        </FormContactStyled>
    )
}