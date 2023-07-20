import styled from 'styled-components';

const TextLabelInputStyled = styled.label`
    color: ${({ theme }) => theme.palette.white};
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 100%;
    input{
        color: ${({ theme }) => theme.palette.txt};
        font-size: 1.2rem;
        height: 30px;
        padding: 0 5px;
    }
`

export function TextLabelInput({ type, label, info, obj, setObj }){
    return(
        <TextLabelInputStyled>
            {label}:
            <input 
                type={type ? type : 'text'}
                placeholder='...'
                onChange={e => {
                    setObj({
                        ...obj,
                        [info]: e.target.value
                    })
                }} 
            />
        </TextLabelInputStyled>
    )
}