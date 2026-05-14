const Box = (props) => {
    return (
        <div className="border-gray-800 p-5 w-[85%] lg:w-[330px] backdrop-blur-lg rounded-4xl shadow-md shadow-gray-800/50 hover:shadow-xl focus:shadow-xl active:shadow-xl transition-shadow cursor-pointer">
            <div className="monospace text-blue-800 text-2xl font-bold border border-black-800 w-[40px] h-[40px] rounded-full flex items-center justify-center">
                {props.number}
            </div>
            <div className="p-6">
                <h1 className="serif font-bold text-black text-xl mb-5">{props.header}</h1>
                <p>{props.text}</p>
            </div>
        </div>
    )
}

export default Box
