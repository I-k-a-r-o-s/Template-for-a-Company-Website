import { BiTime } from "react-icons/bi"
import { BsStack } from "react-icons/bs"
import { FiSettings } from "react-icons/fi"
import { HiLightBulb } from "react-icons/hi"

// Array of service objects, each with an icon, title, description, and link
const services = [
    {
        icon: <BsStack className="w-8 h-8 text-indigo-600" />, // Service icon
        title: "anything", // Service title
        description: "any description.", // Service description
        link: "#learn-more" // Link for more info
    },
    {
        icon: <HiLightBulb className="w-8 h-8 text-amber-400" />,
        title: "anything",
        description: "any descriptiond.",
        link: "#learn-more"
    },
    {
        icon: <FiSettings className="w-8 h-8 text-red-400" />,
        title: "anything",
        description: "any description.",
        link: "#learn-more"
    },
    {
        icon: <BiTime className="w-8 h-8 text-cyan-400" />,
        title: "anything",
        description: "any description.",
        link: "#learn-more"
    }
]

// Services component: displays a section with a heading, features, and service cards
const Services = () => {
    return (
        // Main section container with responsive padding and anchor id for navigation
        <section className='py-20 container mx-auto px-4 sm:px-6 lg:px-8' id="services">
            <div className='flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24'>
                {/* Header section: heading, paragraph, and feature bullets */}
                <div className='md:w-1/3 w-full'>
                    {/* Section heading */}
                    <h2 className='text-3xl md:text-4xl font-bold mb-6 md:w-4/5'>any heading</h2>
                    {/* Section description */}
                    <p className='text-gray-600 text-lg mb-4 md:w-4/5'>
                        Lorem ipsum dolor sit something something....
                    </p>
                    {/* Feature bullet points */}
                    <div className='space-y-3'>
                        <div className='flex items-center gap-2'>
                            {/* Colored dot for bullet */}
                            <div className='w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center'>
                                <div className='w-2.5 h-2.5 rounded-full bg-indigo-600'></div>
                            </div>
                            <span className='text-gray-600'>whatever you want</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div className='w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center'>
                                <div className='w-2.5 h-2.5 rounded-full bg-indigo-600'></div>
                            </div>
                            <span className='text-gray-600'>another whatever you want</span>
                        </div>
                    </div>
                    {/* Call-to-action button */}
                    <button className='mt-8 bg-indigo-600 text-white px-8 py-3 cursor-pointer
                rounded-full hover:bg-indigo-700 transition-colors'>get started</button>
                </div>
                {/* Service cards section */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    {
                        // Map over the services array to render each service card
                        services.map((service, index) => (
                            <div key={index} className="bg-white max-w-72 cursor-pointer
                            rounded-2xl p-6 hover:shadow-xl hover:scale-105 transition-all duration-300">
                                {/* Service icon */}
                                <div className="mb-4">{service.icon}</div>
                                {/* Service title */}
                                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                                {/* Service description */}
                                <p className="text-gray-600 mb-4">{service.description}</p>
                                {/* Learn more link */}
                                <a href={service.link} className="text-indigo-400 font-medium hover:text-indigo-700">
                                    Learn More
                                </a>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Services