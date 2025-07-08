// Array of feature objects, each with an icon, title, and description
const features = [
    {
      icon: "🟣", // Icon for the feature (can be replaced with an image or component)
      title: "Feature One", // Title of the feature
      description: "Description for feature one." // Short description
    },
    {
      icon: "🔴",
      title: "Feature Two",
      description: "Description for feature two."
    },
    {
      icon: "🟢",
      title: "Feature Three",
      description: "Description for feature three."
    }
];

// Features component displays a section with a heading, feature cards, and a button
const Features = () => {
  return (
    // Main section container with max width and padding
    <section className='max-w-7xl mx-auto px-4 py-16'>
      {/* Section heading and description */}
      <div className='text-center mb-12'>
        <h2 className='text-3xl font-bold mb-4'>a heading</h2>
        <p className='text-gray-600'>a paragraph</p>
      </div>

      {/* Feature cards displayed in a responsive flex layout */}
      <div className='flex flex-wrap justify-center gap-8'>
        {
          // Map over the features array to render each feature card
          features.map((feature, index) => (
            <div key={index} className='flex flex-col items-center p-6 text-center'>
              {/* Icon inside a colored, rounded background */}
              <div className='w-24 h-24 rounded-full mb-6 flex items-center justify-center bg-amber-50'>
                <div className='text-3xl'>{feature.icon}</div>
              </div>
              {/* Feature title */}
              <h3 className='text-2xl font-medium mb-2'>{feature.title}</h3>
              {/* Feature description */}
              <p className='text-gray-600 text-center'>{feature.description}</p>
            </div>
          ))
        }
      </div>
      {/* Call-to-action button below the features */}
      <div className='mt-12 text-center'>
        <button className='bg-blue-600 text-white cursor-pointer px-8 py-3 rounded-full font-medium
        hover:bg-blue-700 transition-colors shadow-2xl backdrop-blur-2xl relative'>
          a button
          {/* Decorative blurred background for the button */}
          <div className='absolute -z-10 w-full h-full rounded-full bg-blue-600/50 blur-xl
        top-0 left-0'></div>
        </button>
      </div>
    </section>
  )
}

export default Features