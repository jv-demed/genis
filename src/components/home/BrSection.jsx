import styled from 'styled-components';
import { useMedia } from 'use-media';
import { EdgeSection } from '../globals/EdgeSection';
import { bgs } from '../../assets/images';

const BrSectionStyled = styled.section`
    display: flex;
    flex-direction: column;  
    img{
        width: 100%;
    }
`

export default function BrSection(){

    const isMobile = useMedia({ maxWidth: 650 });

    return(
        <BrSectionStyled>
            <img 
                src={isMobile ?
                    bgs.brSection.imgMobile :
                    bgs.brSection.imgDesktop
                }
                alt={bgs.brSection.alt} 
            />
            <EdgeSection />
        </BrSectionStyled>
    )
}