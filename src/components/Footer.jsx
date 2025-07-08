import React from 'react'
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'

// Object containing footer navigation links grouped by category
const footerLinks = {
    company: [
        { name: 'About', href: '#' },
        { name: 'Terms of Use', href: '#' },
        { name: 'Privacy Policy', href: '#' },
        { name: 'How it Works', href: '#' },
        { name: 'Contact Us', href: '#' },
    ],
    getHelp: [
        { name: 'Support Carrer', href: '#' },
        { name: '24h Service', href: '#' },
        { name: 'Quick Chat', href: '#' },
    ],
    support: [
        { name: 'FAQ', href: '#' },
        { name: 'Policy', href: '#' },
        { name: 'Business', href: '#' },
    ],
    contact: [
        { name: 'WhatsApp', href: '#' },
        { name: 'Support 24', href: '#' },
    ],
}

// Footer component renders the website's footer section
const Footer = () => {
    return (
        <footer className='bg-gray-50'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8'>
                <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12'>
                    {/* Brand column: logo, description, and social icons */}
                    <div className='lg:col-span-4'>
                        {/* Logo and brand name */}
                        <div className='flex gap-1 items-center mb-6'>
                            <div className='flex items-center gap-1 cursor-pointer animate-pulse'>
                                {/* Animated colored dots as part of the logo */}
                                <div className='w-4 h-4 bg-red-600 rounded-full opacity-60 hover:opacity-100 transition-opacity'></div>
                                <div className='w-4 h-4 bg-green-600 -ml-2.5 rounded-full opacity-100 hover:opacity-60 transition-opacity'></div>
                            </div>
                            <span className='text-xl font-medium ml-1'>some text here</span>
                        </div>
                        {/* Brand description */}
                        <p className='text-gray-600 mb-6 md:w-3/4'>some paragraph.</p>
                        {/* Social media icons */}
                        <div className='flex gap-4'>
                            <a href="#" className='w-10 h-10 bg-gray-200 rounded-full
                            flex items-center justify-center text-gray-600
                            hover:bg-blue-600 hover:text-white transition-all
                            duration-200'>
                                <FaFacebook className='size-5' />
                            </a>
                            <a href="#" className='w-10 h-10 bg-gray-200 rounded-full
                            flex items-center justify-center text-gray-600
                            hover:bg-blue-600 hover:text-white transition-all
                            duration-200'>
                                <FaTwitter className='size-5' />
                            </a>
                            <a href="#" className='w-10 h-10 bg-gray-200 rounded-full
                            flex items-center justify-center text-gray-600
                            hover:bg-blue-600 hover:text-white transition-all
                            duration-200'>
                                <FaLinkedin className='size-5' />
                            </a>
                        </div>
                    </div>
                    {/* Footer navigation links, grouped by category */}
                    <div className='lg:col-span-8'>
                        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                            {/* Loop through each category and its links */}
                            {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
                                <div key={category}>
                                    {/* Category heading */}
                                    <h3 className='text-lg font-medium mb-4 uppercase'>{category}</h3>
                                    <ul className='space-y-2'>
                                        {/* List each link in the category */}
                                        {links.map((link, index) => (
                                            <li key={index}>
                                                <a href="#" className='text-gray-600 hover:text-gray-900'>{link.name}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Footer bottom section: copyright */}
                <div className='mt-12 border-t border-gray-200 pt-8'>
                    <div>
                        <p className='text-gray-600'>
                            copyright {new Date().getFullYear()} text
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer