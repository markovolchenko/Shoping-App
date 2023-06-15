import BrandSlider from "./BrandSlider/BrandSlider.js";
import Title from "./Title/Title.tsx";
import NewArrivalsSlider from "./NewArrivalsSlider/NewArrivalsSlider.tsx";
import MainBanner from "./MainBanner/MainBanner.tsx";


const Main = () => {
    return (
        <>
            <BrandSlider/>
            <Title/>
            <NewArrivalsSlider/>
            <MainBanner/>
        </>
    )
}

export default Main