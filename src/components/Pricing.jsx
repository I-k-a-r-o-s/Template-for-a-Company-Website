import { useState } from 'react'

// Pricing component displays two pricing plans and allows the user to adjust the number of products with a slider
const Pricing = () => {
    // State to keep track of the number of products selected by the user (default is 1)
    const [productCount, setProductCount] = useState(1);

    // Calculate the price for the starter plan based on the number of products
    const starterPrice = Math.round(4000 * (productCount / 50));
    // Calculate the price for the business plan based on the number of products
    const businessPrice = Math.round(8000 * (productCount / 50));

    return (
        // Main section for the pricing component with padding
        <section className='py-20 px-4'>
            <div className='max-w-6xl mx-auto'>
                {/* Heading for the pricing section */}
                <h2 className='text-3xl md:text-4xl font-bold text-center mb-16'>Pricing</h2>
                
                {/* Pricing cards for starter and business plans */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-12'>
                    {/* Starter plan card */}
                    <div className='bg-white shadow-lg rounded-lg p-8 '>
                        {/* Plan name */}
                        <h3 className='text-xl text-gray-600 mb-4'>starter</h3>
                        {/* Display the calculated starter price */}
                        <p className='text-3xl font-bold mb-4'>${starterPrice}</p>
                    </div>
                    {/* Business plan card */}
                    <div className='bg-white shadow-lg rounded-lg p-8'>
                        {/* Plan name */}
                        <h3 className='text-xl text-gray-600 mb-4'>business</h3>
                        {/* Display the calculated business price */}
                        <p className='text-3xl font-bold mb-6'>${businessPrice}</p>
                    </div>
                </div>

                {/* Product count slider and display */}
                <div className='max-w-xl mx-auto'>
                    {/* Show the current number of products selected */}
                    <p className='text-center text-gray-600 mb-4'>{productCount} Products</p>
                    <div className='relative px-4'>
                        <div className='flex items-center gap-2'>
                            {/* Minimum value label for the slider */}
                            <span className='text-xs sm:text-sm text-gray-600'>1</span>
                            {/* Range slider to select product count */}
                            <input
                                type="range"
                                min="1"
                                max="50"
                                value={productCount}
                                // When the slider changes, update the productCount state
                                onChange={(e) => setProductCount(parseInt(e.target.value))}
                                className=' flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer'
                            />
                            {/* Maximum value label for the slider */}
                            <span>50</span>
                        </div>
                    </div>
                    {/* Call to action section */}
                    <div className='text-center mt-12'>
                        {/* Prompt for the user */}
                        <p className='text-xl text-gray-600 mb-4'>ready to get started?</p>
                        {/* Button to proceed with the selected plan */}
                        <button className='bg-blue-600 text-white px-6 py-3 rounded-lg
                         hover:bg-blue-700 transition-colors cursor-pointer'>
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricing