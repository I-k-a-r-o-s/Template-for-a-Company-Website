// Array of feature objects, each representing a purpose point with an icon, title, and description
const features = [
    {
        icon: "🟣", // Icon for the feature (can be replaced with a component or image)
        title: "anything",
        description: "another anything"
    },
    {
        icon: "🔴", // Icon for the feature (can be replaced with a component or image)
        title: "more anythings",
        description: "also more anythings."
    }
];

// Purpose component: displays a section with a heading and a list of purpose features
const Purpose = () => {
    return (
        // Section container with background color, padding, and anchor id for navigation
        <section className='w-full bg-gray-50 py-16 px-4 sm:px-6 md:px-8' id='about'>
            <div className='max-w-6xl mx-auto'>
                {/* Grid layout: left for heading, right for bullet points */}
                <div className='grid md:grid-cols-3 grid-cols-1 gap-8'>

                    {/* Heading text section */}
                    <div className=''>
                        <p className='text-sm text-purple-600 font-medium mb-2'>something title like</p>
                        <h2 className='text-3xl md:w-4/5 w-full md:text-4xl font-bold text-gray-900'>some purpose</h2>
                    </div>
                    {/* Bullet points section: displays each feature */}
                    <div className='col-span-2 grid grid-cols-1 md:grid-cols-2 justify-between gap-8'>
                        {
                            // Map over features array to render each feature as a bullet point
                            features.map((feature, index) => (
                                <div key={index} className='flex space-x-4'>
                                    {/* Icon for the feature */}
                                    <div className='w-12 h-12 flex items-center justify-start rounded-lg'>{feature.icon}</div>
                                    <div>
                                        {/* Feature title */}
                                        <h3 className='text-xl font-semibold text-gray-900 mb-2'>{feature.title}</h3>
                                        {/* Feature description */}
                                        <p className='text-gray-600'>{feature.description}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Purpose