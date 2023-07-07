import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <>
            <h1 className="text-3xl font-bold text-slate-500">Layout</h1>;
            <Outlet />
        </>
    )
}

export default Layout
