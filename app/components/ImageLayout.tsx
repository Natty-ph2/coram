import Image from "next/image";

const ImageLayout = () => {
    return (
        <div className="relative w-full h-screen flex justify-center items-center">
            {/* Base Image (Centered) */}
            <Image
                src="/agri1.jpg"
                alt="Center Image"
                width={500}
                height={300}
                className="absolute top-50 right-15 rounded-lg shadow-lg"
            />

            {/* Top Left Image */}
            <Image
                src="/health1.jpg"
                alt="Top Left"
                width={200}
                height={100}
                className="hidden lg:block absolute top-10 left-10 rotate-45  shadow-md"
            />

            {/* Top Right Image */}
            <Image
                src="/manu1.jpg"
                alt="Top Right"
                width={350}
                height={100}
                className="absolute top-1 right-10 rotate-12 shadow-md"
            />



            {/* Bottom Left Image */}
            <Image
                src="/realestate1.jpg"
                alt="Bottom Left"
                width={300}
                height={150}
                className=" absolute bottom-60 left-2 rotate-45  rounded-2xl shadow-md"
            />

             <Image
                src="/vc.jpg"
                alt="Bottom Left"
                width={250}
                height={150}
                className="hidden xl:block absolute bottom-45 left-70 -rotate-45  rounded-4xl shadow-md"
            />

            {/* Bottom Right Image */}
            <Image
                src="/digtrans.jpg"
                alt="Bottom Right"
                width={200}
                height={150}
                className="hidden 2xl:block absolute bottom-50 right-2 -rotate-45 rounded-2xl shadow-md"
            />
        </div>
    );
};

export default ImageLayout;
