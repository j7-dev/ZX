import { useEffect } from 'react'
import { FaRobot } from 'react-icons/fa'

const Loading = () => {
    return (
        <div className="flex text-xl items-center justify-center text-gray-600">
            <FaRobot className="mr-2" />
            <span className="loading-dot">Thinking</span>
        </div>
    )
}

export default Loading
