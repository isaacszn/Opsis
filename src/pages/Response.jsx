import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useLocation, Link } from 'react-router-dom'
import { Camera } from 'lucide-react'

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

                <div className="lg:w-[40%] lg:mx-auto lg:border lg:border-gray-300 lg:rounded-md my-10 lg:shadow-sm lg:shadow-black-500/80">
                    <div className="flex flex-col justify-center items-end me-5">
                        <div className="bg-blue-800 w-[190px] h-[190px] lg:w-[230px] lg:h-[230px] rounded-md flex flex-col justify-center items-start my-15">
                            <img src={image} alt="Photo" className="w-[160px] h-[140px] lg:w-[200px] lg:h-[180px] rounded-md m-2 text-center mx-auto" />
                            <p className="text-sm poppins text-white ms-7"><span className="monospace font-bold">&gt;</span> What is this?</p>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-start ms-5">
                        <div className="border border-gray-300 p-5 w-[75%] lg:w-[60%] backdrop-blur-lg rounded-4xl shadow-sm shadow-gray-800/50 hover:shadow-md focus:shadow-md active:shadow-md transition-shadow cursor-pointer rounded-md mb-20">
                            <p className="poppins text-gray-800 leading-relaxed text-center mx-auto">Opsis analyzing image...</p>
                        </div>
                    </div>
                </div>

                <Link to="/" className=" poppins underline text-blue-800 hover:text-blue-700 font-bold text-md">
                    <p className="text-center mx-auto flex justify-center gap-1">Capture another object/matter <Camera /></p>
                </Link>
            </div>
        </>
    )
}

export default Response
