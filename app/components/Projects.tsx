

import Image from "next/image"

const completedProj = [
    {
        id: 1,
        name: 'HAB- Harvest Bridge',
        img: '/habproj.jpg',
        desc: 'We are here to establish a leading Harvest Bridge system between smallholder farmers and food processing industries and exporters. By embracing technology, we empower farmers with access to broader markets, facilitate fair trade practices, and promote sustainability across the entire value chain.'
    },
    {
        id: 2,
        name: 'HAB- Harvest Bridge',
        img: '/habproj.jpg',
        desc: ''
  },
    // Repeat your projects...
];

const ongoingProj = [
    {
        id: 1,
        name: 'SELO-HOMES: Where Tranquility Meets Your Dream Home',
        img: '/selo.jpeg',
        desc: 'SELO-HOMES isn’t just about houses—it’s about creating a lifestyle of peace, comfort, and elegance. Imagine a home where modern design harmonizes with nature, where every corner exudes warmth, and where serenity is a part of daily life.'
    },
    {
        id: 2,
        name: 'Tari: Eco-ride sustainable innovation',
        img: '/tari3.png',
        desc: 'Tari: Eco-Ride is a dynamic new startup revolutionizing urban transportation through. Focused on electric vehicle (EV) ridesharing, Tari offers an eco-friendly alternative to traditional ride services by operating a fleet of stylish, zero-emission vehicles.'
    }


];

const upcomingProj = [
    {
        id: 1,
        name: 'Luke Health - Healthcare for All',
        img: '/lukeH.jpg',
        desc: 'Luke Health is a diverse healthcare organization dedicated to delivering high-quality medical services to all. Our mission goes beyond care—we strive to make healthcare accessible, especially for underserved communities. Through donations, free clinics, and outreach programs, we are committed to helping those in need and building a healthier future for everyone'
    },
    {
        id: 2,
        name: 'Mena Manufacturing- At Mena, profit and purpose go hand in hand.',
        img: '/manu2.jpg',
        desc: 'Mena Manufacturing is a dynamic food processing company and a thriving social enterprise. While focused on producing high-quality food products and achieving sustainable growth, we are equally committed to making a positive social impact'
    },
    {
        id: 3,
        name: 'V-Ventures - Empowering Startups and Small Businesses',
        img: '/vv.png',
        desc: ' V-Ventures is an angel investment firm dedicated to empowering startups and small businesses. We provide early-stage funding, strategic guidance, and mentorship to help visionary entrepreneurs turn their ideas into impactful, scalable ventures.'
    },
    {
        id: 4,
        name: 'Cozy Coffee - hub for coffee lovers',
        img: '/cozy.png',
        desc: (
            <p>
                Cozy Coffee is a small, warm coffee shop owned by a 
                <span className="text-pink-600 font-semibold"> crazy</span>, 
                <span className="italic font-bold text-yellow-600"> አዝግ</span>, and 
                <span className="text-purple-600 font-bold "> beautiful</span> woman. 
                Most people don’t just come for the coffee — they come to see her smile,
                hear her laugh, and maybe stay a little longer than they planned 
                <span className="line-through text-gray-800 font-extrabold"> except me</span>.
            </p>
        )
    }
    
];

const Projects = () => {
    return (
        <div className="container mx-auto px-4 my-16">
            <h1 className="text-5xl md:text-6xl font-bold text-center mb-16">Our Works</h1>

            {/* Completed Projects */}
            <section className="mb-20">
                <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10">Completed Projects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {completedProj.map(project => (
                        <div key={project.id} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
                            <Image 
                                src={project.img} 
                                alt={project.name} 
                                width={300} 
                                height={200} 
                                className="rounded-lg object-cover"
                            />
                            <h3 className="text-xl font-bold mt-4">{project.name}</h3>
                            <p className="mt-2 text-gray-600 text-sm">{project.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Ongoing Projects */}
            <section className="mb-20">
                <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10">Ongoing Projects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {ongoingProj.map(project => (
                        <div key={project.id} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
                            <Image 
                                src={project.img} 
                                alt={project.name} 
                                width={300} 
                                height={200} 
                                className="h-58 rounded-lg object-cover"
                            />
                            <h3 className="text-xl font-bold mt-4">{project.name}</h3>
                            <p className="mt-2 text-gray-600 text-sm">{project.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Upcoming Projects */}
            <section>
                <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10">Upcoming Projects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {upcomingProj.map(project => (
                        <div key={project.id} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
                            <Image 
                                src={project.img} 
                                alt={project.name} 
                                width={300} 
                                height={200} 
                                className="h-58 rounded-lg object-cover"
                            />
                            <h3 className="text-xl font-bold mt-4">{project.name}</h3>
                            <p className="mt-2 text-gray-600 text-sm">{project.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Projects;
