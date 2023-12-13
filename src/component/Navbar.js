import React from 'react'

export default function Navbar() {
    return (
        <ul>
            <li ><a href='/resume'>Resume</a><span className='ps-2 pe-2'>|</span></li>
            <li ><a href='/project'>Project</a><span className='ps-2 pe-2'>|</span></li>
            <li ><a href='/contact'>Contact</a></li>
        </ul>
    )
}
