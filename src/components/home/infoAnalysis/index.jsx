import styled from 'styled-components';
import InfoBox from './InfoBox'
import { EdgeSection } from '../../globals/EdgeSection';
import { home } from '../../../assets/texts';
import { elements } from '../../../assets/images';

const InfoFisioStyled = styled.section`
    display: flex;
    flex-direction: column;
    font-size: 1.6rem;
    gap: 40px;
    padding: 50px 5%;
    .txt{
        text-align: center;
        .orange{
            background-color: ${({ theme }) => theme.palette.primary.sunsetOrange};
            color: ${({ theme }) => theme.palette.basics.white}
        }
    }
`

export default function InfoFisio(){
    return(
        <InfoFisioStyled id='teste'>
            <InfoBox 
                img={elements.icons.fisio}
                row={'row'}
                txt={home.infoAnalysis.info1} 
            />
            <InfoBox 
                img={elements.icons.dna}
                row={'row-reverse'}
                txt={home.infoAnalysis.info2} 
            />
            <div className='txt'>
                <span>{home.infoAnalysis.info3}</span>
                <span className='orange'>{home.infoAnalysis.info4}</span>
            </div>
        </InfoFisioStyled>
    )
}