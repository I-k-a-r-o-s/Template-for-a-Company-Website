import { HiArrowRight } from 'react-icons/hi';

// NewsLetter component: renders a newsletter signup section with a background, heading, input, and button
const NewsLetter = () => {
  return (
    // Main section container with responsive padding and unique id for anchor navigation
    <section className='container mx-auto px-4 sm:px-6 lg:px-8 py-16' id='newsletter'>
      {/* Blue background box with rounded corners and hidden overflow */}
      <div className=' bg-blue-600 rounded-2xl overflow-hidden'>
        {/* Relative container for content and absolutely positioned background */}
        <div className='relative md:px-16 py-16 px-6 md:py-24'>
          {/* Decorative gradient background with slanted edge, visible only on medium+ screens */}
          <div className='absolute top-0 right-0 w-1/2 h-full bg-blue-700 clip-path-slant hidden md:block'></div>
          {/* Flex container for left (text) and right (form) content */}
          <div className='relative flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12'>
            {/* Left content: heading and description */}
            <div className='text-white max-w-lg text-center md:text-left'>
              <h2 className='text-2xl sm:text-4xl font-medium mb-4'>any heading again</h2>
              <p className='text-blue-100 text-sm sm:text-base'>another paragraph</p>
            </div>
            {/* Right content: email input and submit button */}
            <div className='flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-0 w-full sm:w-auto'>
              {/* Email input field */}
              <input
                type="email"
                placeholder='Enter email'
                className='w-full bg-white sm:w-auto md:w-80 px-4 sm:px-6 py-3 sm:py-4
              rounded-xl sm:rounded-l-xl sm:rounded-r-none focus:outline-none'
              />
              {/* Submit button with arrow icon */}
              <button className='w-full sm:w-auto cursor-pointer bg-green-500 text-white px-6 sm:px-8 py-3 
              sm:py-4 rounded-xl sm:rounded-l-none sm:rounded-r-xl flex items-center gap-2'>
                <span>Any Text</span>
                <HiArrowRight className='size-5'/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsLetter;