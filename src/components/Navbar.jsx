import { FaGithub } from 'react-icons/fa6'
import Logo from '../assets/images/logo.jpeg'

const Navbar = () => {
    return (
        <>
            <div className="flex justify-between items-center px-5 py-3 fixed top-0 left-0 w-full h-[80px] border-b border-gray-200/50 z-10 bg-white/5 backdrop-blur-sm">
                <h1 className='caveat text-2xl font-bold tracking-tight text-blue-800'>
                    <a href="https://whatisthis.pxxl.click" className="flex items-center gap-3 underline">
                        WhatIsThis
                    </a>
                </h1>
                <a href="https://github.com/isaacszn/WhatIsThis" target="_blank" className="poppins hover:text-gray-700 text-2xl focus:text-gray-700"><FaGithub /></a>
            </div>
        </>
    )
}

export default Navbar;
