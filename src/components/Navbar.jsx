import { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [activeLink, setActiveLink] = useState('#home')

    const navLinks = [
        { href: '#home', label: 'Home' },
        { href: '#services', label: 'Services' },
        { href: '#about', label: 'About' },
    ];

    return (
        <nav className='fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm'>
            <div className='w-full container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 md:h-20 h-16'>
                {/* Logo or Brand Name */}
                <div className='flex items-center gap-1 cursor-pointer animate-pulse'>
                    <div className='w-4 h-4 bg-red-600 rounded-full opacity-60 hover:opacity-100 transition-opacity'></div>
                    <div className='w-4 h-4 bg-green-600 -ml-2.5 rounded-full opacity-100 hover:opacity-60 transition-opacity'></div>
                </div>

                {/*mobile menu button*/}
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='md:hidden text-gray-800 hover:text-green-600 transition-colors'>
                    {
                        isMenuOpen ? <HiX className='size-6' /> : <HiMenu className='size-6' />
                    }
                </button>

                {/*desktop navitems*/}
                <div>
                    <ul className='hidden md:flex items-center gap-8 text-gray-800 font-semibold'>
                        {/* Loop through navLinks array to render each navigation link */}
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                {/* Navigation link: highlights when active */}
                                <a
                                    onClick={() => setActiveLink(link.href)} // Set the active link when clicked
                                    href={link.href} // Anchor link to section
                                    className={`hover:text-green-600 hover:underline underline-offset-4 transition-all ${activeLink === link.href ? 'text-red-600 underline' : ''}`}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* "Get in Touch" button for desktop view */}
                <button className='hidden md:block bg-green-800 text-white px-6 py-2 rounded-full
                 hover:bg-red-700 transition-colors'>
                    {/* Anchor link to the newsletter section */}
                    <a href="#newsletter">Get in Touch</a></button>
            </div>
            {/*mobile navitems*/}
            {
                isMenuOpen && (
                    <div className='md:hidden bg-white/90 backdrop-blur-sm border-t
                     border-gray-100 shadow-sm py-4 px-6'>
                        <div className='container mx-auto px-4 space-y-4'>
                            {
                                navLinks.map((link, index) => (
                                    <a key={index}
                                        onClick={() => { setActiveLink(link.href); setIsMenuOpen(false) }}
                                        className={`block text-sm font-medium py-2 ${activeLink === link.href ? "text-green-700" : "text-red-700 hover:text-gr"}`}
                                        href={link.href}>{link.label}</a>))
                            }
                            <button className='hidden md:block bg-green-800 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors'>Get in Touch</button>
                        </div>
                    </div>
                )
            }
        </nav>
    )
}

export default Navbar