import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useLocation, Link } from 'react-router-dom'

const Response = () => {
    const location = useLocation()
    // Grab the image from state
    const image = location.state?.image
    console.log(image)

    if (!image) {
        return (
            <div className="poppins pt-20">
                <h1 className="serif text-center mx-auto font-bold text-6xl">No Image Found</h1>
                <p className="text-gray-700 mx-auto p-6 text-center text-lg">Looks like you haven't captured anything yet :(</p>
                <Link to="/" className="underline text-blue-800 hover:text-blue-700 font-medium text-lg p-4">
                    <p className="text-center mx-auto">&larr; Go back home to take a photo</p>
                </Link>
            </div>
        )
    }

    return (
        <>
            <div>
                <h1 className="serif text-center mx-auto font-bold text-3xl pt-5">Response</h1>
                <img src={image} alt="Photo" className="w-[300px] h-[300px] lg:w-[350px] lg:h-[350px] rounded-md m-8 text-center mx-auto" />
                <p className="poppins text-gray-800 leading-relaxed text-center mx-auto">Analyzing image...</p>
                <Link to="/" className=" poppins underline text-blue-800 hover:text-blue-700 font-medium">
                    <p className="text-center mx-auto">Capture another object/matter</p>
                </Link>
            </div>
        </>
    )
}

export default Response
