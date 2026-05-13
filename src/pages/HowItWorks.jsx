import { Link } from 'react-router-dom'
import Box from '../components/Box'

const HowItWorks = () => {
  return (
    <>
        <div className="poppins text-gray-800 flex flex-col items-center justify-center mt-7">
            <h1 className="serif text-6xl font-bold text-black text-center">How it works</h1>
            <p className="text-center text-lg w-[90%] mt-5 mb-15">How Opsis works behind-the-scene to tell you what things are... It's not magic!!</p>

            <div className="flex flex-col items-center justify-center gap-10 lg:gap-15 lg:flex-row w-full mx-auto text-center">
                <Box number={1} header="Snap or Upload" text="Take a photo with your phone or upload one from your laptop. Works with anything - plants, objects, text, even memes." />
                <Box number={2} header="AI Analysis" text="Opsis sends the image to an AI model. It looks at shapes, colors, text, and context to figure out what it is." />
                <Box number={3} header="Get Instant Info" text="You get a clear result in seconds: what it is, key details, and useful info. No guessing, no Googling for 10 mins! :)" />
            </div>

            <div className="mt-10">
                <Link to="/" className="underline text-blue-800 hover:text-blue-700 font-bold text-lg">Try it now :) !!</Link>
            </div>
        </div>
    </>
  )
}

export default HowItWorks
