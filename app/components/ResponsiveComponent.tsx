import Carousel from "../components/Carousel";
import ImageLayout from "../components/ImageLayout";

const ResponsiveComponent = () => {
    return (
        <div className="w-full">
            {/* Show Carousel on Mobile (smaller than md) */}
            <div className="block lg:hidden">
                <Carousel />
            </div>

            {/* Show Image Layout on Medium (md) and Larger Screens */}
            <div className="hidden lg:block">
                <ImageLayout />
            </div>
        </div>
    );
};

export default ResponsiveComponent;
