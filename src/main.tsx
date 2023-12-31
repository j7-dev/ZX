import React from 'react'
import ReactDOM from 'react-dom/client'
import '@/assets/scss/index.scss'
import { RouterProvider } from 'react-router-dom'
import { router } from './routers'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
