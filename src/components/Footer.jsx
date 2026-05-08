import { FaFacebook, FaXTwitter, FaLinkedin } from 'react-icons/fa6'

const Footer = () => {
    return (
        <footer className="serif text-gray-800 flex justify-between items-center w-full px-8 py-5 mt-15 mb-[5px]">
            <span>
                Built by <a href="https://x.com/zikk_szn" className="text-blue-800 hover:text-blue-600 underline focus:text-blue-600">Zik</a>
            </span>
            <div className="flex justify-evenly gap-3">
                <a href="https://facebook.com/IsaacUgochukwu" target="_blank" className="hover:text-blue-800 focus:text-blue-800">
                    <FaFacebook />
                </a>
                <a href="https://x.com/zikk_szn" target="_blank" className="hover:text-black focus:text-black">
                     <FaXTwitter />
                </a>
                <a href="https://www.linkedin.com/in/isaac-ugochukwu-9b30a23a8" target="_blank" className="hover:text-blue-600 focus:text-blue-600">
                    <FaLinkedin />
                </a>
            </div>
        </footer>
    )
}

export default Footer
