import MainLayout from "../Layouts/MainLayout";
import Carousel, {CarouselItems} from "../Components/Carousel";

export default function Home() {
    return(
        <MainLayout>
            <Carousel>
                <CarouselItems>1</CarouselItems>
                <CarouselItems>2</CarouselItems>
                <CarouselItems>3</CarouselItems>
                <CarouselItems>4</CarouselItems>
                <CarouselItems>5</CarouselItems>
            </Carousel>
        </MainLayout>
    )
}