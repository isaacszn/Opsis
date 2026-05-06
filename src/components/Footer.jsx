import { FaFacebook, FaXTwitter, FaLinkedin } from 'react-icons/fa6'

const Footer = () => {
    return (
        <footer className="serif text-gray-800 flex justify-between items-center w-full px-8 py-5 mb-[5px]">
            <span>
                Built by <a href="" className="text-blue-800 hover:text-blue-600 underline">Zik</a>
            </span>
            <div className="flex justify-evenly gap-3">
                <a href="https://facebook.com/IsaacUgochukwu" className="hover:text-blue-800">
                    <FaFacebook />
                </a>
                <a href="https://x.com/zikk_szn" className="hover:text-black">
                     <FaXTwitter />
                </a>
                <a href="https://www.linkedin.com/in/isaac-ugochukwu-9b30a23a8" className="hover:text-blue-600">
                    <FaLinkedin />
                </a>
            </div>
        </footer>
    )
}

export default Footer
