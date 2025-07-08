import { FiArrowRight } from 'react-icons/fi';
import monitorCardImg from '../assets/monitor-card.jpg';

// Monitor component: displays a two-column section with text and an image
const Monitor = () => {
    return (
        // Section container with max width and responsive padding
        <section className='max-w-7xl mx-auto px-4 py-16 md:py-24'>

            {/* Flex container for left (text) and right (image) columns */}
            <div className='flex flex-col md:flex-row justify-between items-center gap-12 md:gap-24'>
                
                {/* Left column: text content */}
                <div className='md:w-1/2 w-full'>
                    {/* Section label */}
                    <p className='text-green-500 font-semibold'>not copy pasted something</p>

                    {/* Section heading */}
                    <h2 className='text-3xl md:text-4xl font-bold mb-6 mt-4 text-neutral-900 md:w-4/5'>
                        a not copy pasted heading
                    </h2>

                    {/* Supporting paragraph */}
                    <p className='text-gray-600 mb-8'>
                        a paragraph of something here without using 
                        ctrl+cand ctrl+v
                    </p>

                    {/* Call-to-action link with arrow icon */}
                    <a href="#" className='text-green-700 font-semibold flex 
                        items-center gap-2 hover:gap-4 transition-all'>
                        another new Something seriously without using copy paste
                        <FiArrowRight className='size-4' />
                    </a>
                </div>

                {/* Right column: image */}
                <div className='md:w-1/2 w-full'>
                    <img src={monitorCardImg} alt="image" className='w-full h-auto' />
                </div>
            </div>
        </section>
    )
}

export default Monitor