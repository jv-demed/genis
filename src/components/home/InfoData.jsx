import styled from 'styled-components';
import { EdgeSection } from '../globals/EdgeSection';
import { elements } from '../../assets/images';
import { home } from '../../assets/texts';

const InfoDataStyled = styled.section`
    display: flex;
    flex-direction: column;
    font-size: 1.6rem;
    gap: 20px;
    .content{
        display: flex;
        flex-direction: column;
        gap: 80px;
        .infoPizza{
            display: flex;
            gap: 40px;
            img{
                height: 100%;
                width: 50%;
            }
            .txt{
                display: flex;
                flex-direction: column;
                padding-top: 140px;
                width: 50%;
            }
        }
        .infoArrow{
            padding: 0 12%;
            .part1{
                align-items: center;
                display: flex;
                justify-content: center;
                .highlight{
                    font-size: 3rem;
                }
            }
            .part2{
                align-items: center;
                display: flex;
                flex-direction: column;
                gap: 10px;
            }
        }
    }
    @media(max-width: 650px){
        .content{
            .infoPizza{
                align-items: center;
                flex-direction: column;
                img{
                    width: 60%;
                }
                .txt{
                    padding-top: 0;
                    width: 100%;
                }
            }
            .infoArrow{
                padding: 0;
                .part1{
                    flex-direction: column-reverse;
                }
            }
        }
    }
`

export default function InfoData(){
    return(
        <InfoDataStyled>
            <div className='container section content'>
                <div className='infoPizza'>
                    <img src={elements.graphPizza.img} alt={elements.graphPizza.alt} />
                    <div className='txt'>
                        <span>{home.infoData.infoPizza.txt}</span>
                        <span>{home.infoData.infoPizza.quote}</span>
                    </div>
                </div>
                <div className='infoArrow'>
                    <div className='part1'>
                        <div className='txt'>
                            <span>{home.infoData.infoArrow.txt1}</span><br/>
                            <span className='highlight txtOrange'>{home.infoData.infoArrow.txt2}</span>
                        </div>
                        <img src={elements.arrow.img} alt={elements.arrow.alt} />
                    </div>
                    <div className='part2'>
                        <span>{home.infoData.infoArrow.txt3}</span>
                        <span>{home.infoData.infoArrow.quote}</span>
                    </div>
                </div>
            </div>
            <EdgeSection />
        </InfoDataStyled>
    )
}