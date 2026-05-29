import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { Camera, Copy } from 'lucide-react'

const Response = () => {
    const location = useLocation()
    // Grab the image from state
    const imageFile = location.state?.imageFile;
    const imageDataURL = location.state?.imageDataURL;
    // console.log(image)

    const [loading, setLoading] = useState(false);
    const [description, setDescription] = useState('');
    const [error, setError] = useState(null);
    const [copied, setCopied] = useState(false);

    if (!imageDataURL) {
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

    if (description) {
        console.log("Description available.");
    } else {
        console.log("No description found.")
    }

    // Call API when page loads
    useEffect(() => {
        const callAPI = async () => {
            try {
                setLoading(true);
                const formData = new FormData();
                formData.append('file', imageFile)

                const apiURL = "https://opsis-api.up.railway.app/analyze";

                const response = await fetch("http://localhost:8000/analyze", {
                    method: 'POST',
                    body: formData
                });
                const data = await response.json();
                console.log(data);

                if (data.success) {
                    setDescription(data.description);
                } else {
                    setError(data.error)
                }
            }
            catch (error) {
                console.log("Error: ", error.message);
                if (error.message == "NetworkError when attempting to fetch resource.") {
                    setError("Analysis failed. Please check your internet connection!");
                } else {
                    setError(error.message);
                }
            }
            finally {
                setLoading(false);
            }
        };

        callAPI();
    }, []);

    const handleCopy = () => {
        if (description) {
            navigator.clipboard.writeText(description);
            setCopied(true);
            setTimeout(() => {
                setCopied(false)
            }, 1000 * 3);
        }
    }

    return (
        <>
            <div>
                <div className="lg:w-[60%] lg:mx-auto lg:border lg:border-gray-300 lg:rounded-md lg:mt-10 mb-10 lg:shadow-sm lg:shadow-black-500/80">
                    <div className="flex flex-col justify-center items-end me-5">
                        <div className="bg-blue-800 w-[220px] h-[220px] lg:w-[230px] lg:h-[230px] rounded-tr-sm rounded-tl-3xl rounded-bl-3xl rounded-br-3xl flex flex-col justify-center items-start my-15">
                            <img src={imageDataURL} alt="Photo" className="w-[200px] h-[200px] lg:w-[210px] lg:h-[210px] rounded-3xl m-2 text-center mx-auto" />
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-start ms-5">
                        <div className="border border-gray-300 p-5 w-[85%] lg:w-[65%] backdrop-blur-lg rounded-4xl shadow-sm shadow-gray-800/50 hover:shadow-md focus:shadow-md active:shadow-md transition-shadow rounded-tl-sm rounded-tr-3xl rounded-bl-3xl rounded-br-3xl mb-3">
                            { loading && <p className="serif text-gray-800 leading-relaxed text-center mx-auto">Opsis analyzing image...</p> }
                            { error && <p className="serif text-red-700 leading-relaxed text-center mx-auto italic">{ error }</p> }
                            { !error && !loading && <p className="poppins font-bold text-gray-900 leading-relaxed text-center mx-auto">{ description }</p> }
                        </div>
                        { !loading && description && (<div className="flex items-center justify-center gap-1 pointer hover:scale-110 hover:text-gray-800 transition text-sm poppins text-gray-800 cursor-pointer" onClick={handleCopy}>
                            <Copy className="text-black" />
                            { copied ? 'Copied!' : 'Copy' }
                        </div>) }
                    </div>
                </div>

                <Link to="/" className=" poppins underline text-blue-800 hover:text-blue-700 font-bold text-md">
                    <p className="text-center mx-auto flex justify-center gap-1">Capture another thing <Camera /></p>
                </Link>
            </div>
        </>
    )
}

export default Response
