import HomeSection from '../src/components/sections/HomeSection';
import AboutSection from '../src/components/sections/AboutSection';
import ProductsSection from '../src/components/sections/ProductsSection';
import PartnersSection from '../src/components/sections/PartnersSection';

export default function LandingPage(){
    return(
        <>
            <HomeSection />
            <ProductsSection />
            <AboutSection />
            <PartnersSection />
        </>
    )
}