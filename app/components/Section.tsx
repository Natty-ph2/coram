
import ResponsiveComponent from './ResponsiveComponent';

const Section = () => {
    return (
        <div className="container mx-auto"> 
            <div className="md:grid grid-cols-2 ">
                <div className="flex flex-col items-center justify-center p-5">
                    <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold">Welcome Vera Investment Group</h1>
                    <p className="text-lg">We are a conglomerate of diverse businesses passionate about transforming lives, helping our community, 
                        and making a lasting impact. Our mission is to serve and inspire positive change in our community.</p>
                    <div>
                    <button className="p-2 rounded-lg">Get Started</button>
                    <button className="p-2 rounded-lg">Get Started</button>
                    </div>
                   
                </div>
                <div className="">
                  <ResponsiveComponent />
                </div>
            </div>
        </div>
    )
}

export default Section;