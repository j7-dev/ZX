import { createBrowserRouter } from 'react-router-dom'
import Generate from '@/pages/Generate/'
import Login from '@/pages/Login/'
import Layout from '@/components/Layout/'
import AccountSetting from '@/pages/AccountSetting/'

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
                element: <Generate />,
            },

            {
                path: '/generate',
                element: <Generate />,
            },
            {
                path: '/account-setting',
                element: <AccountSetting />,
            },
        ],
    },
])
