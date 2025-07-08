import logo1 from '../assets/logo1.jpg'
import logo2 from '../assets/logo2.jpg'
import logo3 from '../assets/logo3.jpg'
import logo4 from '../assets/logo4.jpg'
import logo5 from '../assets/logo5.jpg' // Importing logo images

// Array of logo images
const logos = [logo1, logo2, logo3, logo4, logo5];
// Duplicate the logos array for seamless marquee animation
const marqueeLogos = [...logos, ...logos];
const Logo = () => {
    return (
        // Main container for the logo section
        <div className='w-full overflow-hidden gap-8 mx-auto py-20 flex flex-row items-center'>
            {/* Description box on the left */}
            <div className='w-[300px] shrink-0 px-5 h-[64px] flex items-center text-gray-600 border-l-4 border-blue-500 bg-white text-xl font-semibold ml-8'>
                Any Logo descriptions
            </div>
            {/* Marquee container for scrolling logos */}
            <div className='relative flex-1 h-[64px] overflow-hidden'>
                {/* Animated row of logos, absolutely positioned for marquee effect */}
                <div className='absolute left-0 top-0 flex items-center animate-marquee whitespace-nowrap w-max h-full'>
                    {marqueeLogos.map((logo, index) => (
                        // Each logo image with grayscale and hover effects
                        <img
                            src={logo}
                            alt={`Logo ${index % logos.length + 1}`}
                            key={index}
                            className='mx-12 h-12 w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all'
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Logo