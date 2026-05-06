import { Camera } from 'lucide-react'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const CameraButton = () => {
    const fileInputRef = useRef(null)
    const navigate = useNavigate()

    const handleImage = (e) => {
        const file = e.target.files[0]
        if (!file) return

        // Convert image to base64
        const reader = new FileReader()
        reader.onloadend = () => {
            const base64Image = reader.result
            // Send to "/response" route
            navigate('/response', { state: { image: base64Image } })
        }
        reader.readAsDataURL(file)
    }

    const openCamera = () => {
        fileInputRef.current.click()
    }

    return (
        <>
            <input type="file" accept="image/*" capture="environment" ref={fileInputRef} onChange={handleImage} className="hidden" />
            <button className="poppins bg-blue-700 text-white w-[70px] h-[70px] rounded-full text-[15px] shadow-lg hover:bg-blue-600 hover:text-black-600 cursor-pointer fixed bottom-[100px] right-[30px] flex items-center justify-center" onClick={openCamera}>
                <Camera />
            </button>
        </>
    )
}

export default CameraButton
