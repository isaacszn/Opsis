import { Link } from 'react-router-dom'

const Intro = () => {
    return (
        <> 
            <div className="my-20 mb-10 flex-1">
                <p className="serif text-[53px] lg:text-[73px] text-black text-center mx-auto w-[80%] md:text-[73px] tracking-tight">Snap it. Know it.</p>
                <p className="poppins text-gray-800 w-[85%] text-center mx-auto py-3 text-[18.5px] lg:w-[360px] lg:text-lg md:w-[450px] md:text-lg">Take a photo of an object or matter you want to inquire, and get information about it.</p>
                <Link to="/how-it-works">
                    <button className="poppins border border-gray-600 block my-6 mx-auto bg-black text-white py-[10px] px-6 text-lg lg:w-[220px] lg:py-4 hover:bg-black-200 focus:bg-black-200 cursor-pointer shadow-lg shadow-gray-800/80 hover:shadow-xl">How it works</button>
                </Link>
            </div>
        </>
    )
}

export default Intro
