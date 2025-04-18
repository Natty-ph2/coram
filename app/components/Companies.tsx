import Image from "next/image";


const companiesData = [
    {
        id: 1,
        name: 'Thrive Software Technologies',
        img: '/green.jpg', 
        desc: 'Your digital solution'

    },

    {
        id: 2,
        name: 'HAB- Harverst Bridge',
        img: '/hab.png',
        desc: 'Your Harverst Bridge'
    },

    {
        id: 3,
        name: 'SELO- HOMES',
        img: '/seloR.png',
        desc: 'Where Tranquility Meets Your Dream Home'
    },

    {
        id: 4,
        name: 'LUKE- Health',
        img: '/lukeHealth.png',
        desc: 'Healthcare for all'
    },

    {
        id: 5,
        name: 'MENA- Manfucturing',
        img: '/mena.png',
        desc: 'At Mena, profit and purpose go hand in hand.'
    },


    {
        id: 6,
        name: 'V- Ventures',
        img: '/vventure.png',
        desc: 'Where Tranquility Meets Your Dream Home'
    },



]



const Companies = () => {
    return (
        <div className="w-full max-w-6xl mx-auto p-5">
            <h1 className="text-4xl font-bold text-center mb-8">Our Companies</h1>
            
            <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                {companiesData.map(company => (
                    <div 
                        key={company.id} 
                        className="flex flex-col items-center justify-between bg-white p-4 rounded-lg shadow-md h-full text-center"
                    >
                        <Image 
                            src={company.img} 
                            alt={company.name} 
                            width={150} 
                            height={150} 
                            className="w-32 h-32 object-fit rounded-lg"
                        />
                        <h1 className="text-lg font-bold mt-4">{company.name}</h1>
                        <p className="text-sm text-gray-600">{company.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Companies;