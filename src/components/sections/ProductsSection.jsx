import styled from 'styled-components';
import { bgs, elements } from '../../assets/images';
import { home, products } from '../../assets/texts';
import { EdgeSection } from '../globals/EdgeSection';

const ProductsSectionStyled = styled.section`
    .presentation{
        align-items: start;
        background-image: url(${bgs.products.img});
        background-position: top;
        background-size: cover;
        gap: 5px;
        height: 60vh;
        justify-content: center;
        span{
            line-height: 3.4rem;
        }
        .title1, .title2, .title3, .title4{
            color: ${({ theme }) => theme.palette.white};
            font-size: 3.4rem;
            margin-right: 22%;
            padding: 0 5px;
        }.title2, .title4{
            font-size: 4rem;
        }.title1{
            margin-left: 15%;
        }.title2{
            margin-left: 13%;
        }.title3{
            margin-left: 22%;
        }.title4{
            margin-left: 18%;
        }
    }
    .content{
        font-size: 1.6rem;
        gap: 15px;
        padding-bottom: 30px;
        padding-top: 30px;
        text-align: justify;
        .group{
            align-items: center;
            gap: 20px;
        }
        .pizza{
            width: 35%;
        }
    }
    @media(max-width: 650px){
        .content{
            .g1{
                flex-direction: column-reverse;
                .pizza{
                    width: 50%;
                }
            }
            .g2{
                flex-direction: column;
            }
        }
    }
`

export default function ProductsSection(){
    return(
        <ProductsSectionStyled id='produtos'>
            <div className='presentation flexColumn'>
                <span className='title1'>{products.presentation.t1}</span>
                <span className='title2'>{products.presentation.t2}</span>
                <span className='title3'>{products.presentation.t3}</span>
                <span className='title4'>{products.presentation.t4}</span>
            </div>
            <EdgeSection />
            <div className='content container flexColumn'>
                <div className='group g1 flexRow'>
                    <img className='pizza'
                        src={elements.graphPizza.img} 
                        alt={elements.graphPizza.alt} 
                    />
                    <span>{products.content[0]}</span>
                </div>
                <div className='group g2 flexRow'>
                    <span>{products.content[1]}</span>
                    <img 
                        src={elements.brazilMap.img} 
                        alt={elements.brazilMap.alt} 
                    />
                </div>
                {products.content.map((txt, i) => {
                    if(i >= 2){
                        return(
                            <span>{products.content[i]}</span>
                        )
                    }
                })}
            </div>
            <EdgeSection />
        </ProductsSectionStyled>
    )
}