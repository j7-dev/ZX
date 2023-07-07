import React from 'react'
import { FaRobot } from 'react-icons/fa'

export type TDialog = {
    role: 'user' | 'AI'
    content: string
}

const Dialog: React.FC<TDialog> = ({ role, content }) => {
    return (
        <div
            className="flex pb-8 mb-8"
            style={{ borderBottom: '1px solid #eee' }}
        >
            {role === 'user' && (
                <div className="h-8 w-8 rounded-full bg-orange-200 flex items-center justify-center text-orange-500">
                    T
                </div>
            )}

            {role === 'AI' && (
                <div className="h-8 w-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-500">
                    <FaRobot />
                </div>
            )}

            <div className="flex-1 ml-4">{content}</div>
        </div>
    )
}

export default Dialog
