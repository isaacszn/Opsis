import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="text-gray-800 poppins flex flex-col items-center justify-center mx-auto text-center gap-20 min-h-screen">
      <h1 className="text-[150px] text-black monospace font-bold flex items-center justify-center gap-[5px] underline shadow-md shadow-gray-600/50">404</h1>
      <p className="text-2xl serif">Oops!<br />Page not found</p>
      <Link to="/" className="text-blue-800 hover:text-blue-700 underline font-bold text-md">Go to home</Link>
    </div>
  )
}

export default NotFound
