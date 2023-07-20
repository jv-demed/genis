import styled from 'styled-components';
import { partners } from '../../assets/images';
import { EdgeSection } from '../globals/EdgeSection';

const PartnersSectionStyled = styled.section`
    .imgs{
        align-items: center;
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        justify-content: center;
        padding-bottom: 30px;
        padding-top: 30px;
        img{
            height: 100%;
            width: 30%;
        }
    }
    @media(max-width: 650px){
        .imgs{
            img{
                width: 55%;
            }
        }
    }
`

export default function PartnersSection(){
    return(
        <PartnersSectionStyled id='parceiros'>
            <div className='imgs container'>
                {partners.map(part => {
                    return(
                        <img src={part.img} alt={part.alt} key={part.img} />
                    )
                })}
            </div>
            <EdgeSection />
        </PartnersSectionStyled>
    )
}