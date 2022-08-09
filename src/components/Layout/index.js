import React from 'react'
import './index.scss'
import Sidebar from '../Sidebar'
import { Outlet } from 'react-router'

const Layout = () => {
    return (
    <div className="App">
        <Sidebar />
        <div className='page'>
            <span className='tags top-tags'>
                &lt;html&gt;
                <br />
                <span className='top-tag-html'>&lt;body&gt;</span>
            </span>

            <Outlet />

            <span className='tags bottom-tags'>
                &lt;/body&gt;
                <br />
                <span className='bottom-tag-html'>&lt;/html&gt;</span>
            </span>

        </div>
    </div>
    )

}

export default Layout