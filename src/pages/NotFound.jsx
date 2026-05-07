import { Link } from 'react-router-dom'
import { FaTriangleExclamation } from 'react-icons/fa6'
import { Camera } from 'lucide-react'

const NotFound = () => {
  return (
    <div className="text-gray-800 poppins flex flex-col items-center justify-center mx-auto text-center gap-20 min-h-screen">
      <FaTriangleExclamation className="text-orange-400 text-8xl mx-auto" />
      <h1 className="text-8xl text-black monospace font-bold flex items-center justify-center gap-[5px]">404</h1>
      <p className="text-2xl serif">Page Not Found</p>
      <Link to="/" className="text-blue-800 hover:text-blue-700 underline">Go to home</Link>
    </div>
  )
}

export default NotFound
