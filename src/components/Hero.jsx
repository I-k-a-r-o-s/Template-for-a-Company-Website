import heroImage from '../assets/hero-image.jpg'

// Hero component: main landing section with heading, description, email input, and image
const Hero = () => {
  return (
    // Main section with responsive layout and padding
    <section
      id='home'
      className='container mx-auto flex flex-col md:flex-row justify-between items-center pt-44 pb-6 px-4 sm:px-6 lg:px-8'
    >

      {/* Left column: text content and input */}
      <div className='w-full md:w-1/2 space-y-8'>
        {/* Star badge with hover effect */}
        <div className='flex items-center gap-2 bg-gray-50 w-fit px-4 py-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer group'>
          <span className='text-blue-500 hover:text-red-700 group-hover:scale-150 transition-transform'>
            ★
          </span>
          <span className='text-sm font-medium'>
            some text here
          </span>
        </div>
        {/* Main heading with highlighted animated word */}
        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight'>
          Main heading of the{' '}
          <span className='text-green-600 relative inline-block animate-pulse'>
            Website
            {/* Underline effect for the highlighted word */}
            <span className='absolute bottom-0 left-0 w-full h-0.5 bg-green-600'></span>
          </span>{' '}
          Here
        </h1>
        {/* Supporting paragraph */}
        <p className='text-gray-600 text-lg md:text-xl max-w-xl'>
          a paragraph of something here
        </p>
        {/* Email input and send button */}
        <div className='flex gap-3 max-w-md'>
          <input
            type="email"
            placeholder='Email Address'
            className='flex-1 px-6 py-4 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-600 
           focus:ring-2 focus:ring-blue-100 transition-all'
          />
          <button
            className='bg-green-500 text-white px-6 py-4 rounded-xl ml-4
           hover:bg-green-700 transition-all hover:shadow-red-400 hover:shadow-lg'
          >
            send
          </button>
        </div>
      </div>

      {/* Right column: hero image */}
      <div className='w-full md:w-1/2 mt-16 md:mt-0 pl-0 md:pl-12'>
        <div className='relative'>
          {/* Main hero image with hover scale effect */}
          <img
            src={heroImage}
            alt="image"
            className='rounded-lg relative z-10 hover:scale-[1.02] transition-transform duration-300'
          />
          {/*Image in right iside*/}
        </div>
      </div>
    </section>
  )
}

export default Hero