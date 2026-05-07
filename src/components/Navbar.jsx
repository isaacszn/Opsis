import { FaGithub } from 'react-icons/fa6'
import Logo from '../assets/images/logo.jpeg'

const Navbar = () => {
    return (
        <>
            <div className="flex justify-between items-center px-5 py-3 fixed top-0 left-0 w-full h-[80px] border-b border-gray-200/50 z-10 bg-white/5 backdrop-blur-sm">
                <h1 className='caveat text-4xl font-bold text-blue-700'>
                    <a href="https://whatisthis.pxxl.app" className="flex items-center gap-3">
                        <img src={Logo} className="w-[45px] h-[45px]" />
                        WhatIsThis
                    </a>
                </h1>
                <a href="https://github.com/isaacszn/WhatIsThis" className="poppins hover:text-gray-700 text-2xl"><FaGithub /></a>
            </div>
        </>
    )
}

export default Navbar;
