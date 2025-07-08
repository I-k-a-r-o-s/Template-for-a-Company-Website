import scheduleImage from '../assets/stats.jpg'
import { FiArrowRight } from "react-icons/fi";

// Schedule component: displays a two-column section with an image and text
const Schedule = () => {
    return (
        // Section container with max width and responsive padding
        <section className='max-w-7xl mx-auto px-4 py-16 md:py-24'>

            {/* Flex container for left (image) and right (text) columns */}
            <div className='flex flex-col md:flex-row justify-between items-center gap-12 md:gap-24'>
                {/* Left column: image */}
                <div className='md:w-1/2 w-full'>
                    <img src={scheduleImage} alt="image" className='w-full h-auto' />
                </div>

                {/* Right column: text content */}
                <div className='md:w-1/2 w-full'>
                    {/* Section label */}
                    <p className='text-orange-500 font-semibold'>something</p>

                    {/* Section heading */}
                    <h2 className='text-3xl md:text-4xl font-bold mb-6 mt-4 text-neutral-900'>
                        a heading
                    </h2>

                    {/* Supporting paragraph */}
                    <p className='text-gray-600 mb-8'>a paragraph of something here</p>

                    {/* Call-to-action link with arrow icon */}
                    <a href="#" className='text-green-700 font-semibold flex 
                    items-center gap-2 hover:gap-4 transition-all'>
                         another new Something<FiArrowRight className='size-4' />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Schedule