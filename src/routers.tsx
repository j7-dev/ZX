import { createBrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import Example from '@/pages/example/'
import Login from '@/pages/login/'
import Layout from '@/components/Layout/'
export const router = createBrowserRouter([
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <App />,
            },
            {
                path: '/example',
                element: <Example />,
            },
        ],
    },
])
