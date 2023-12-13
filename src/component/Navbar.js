import React from 'react'

export default function Navbar() {
    return (
        <>
            <div className='container' id="navbar-wrapper">
                <div className='row'>
                    <div className='col-md-4 pt-2 text-start' id="title">
                        <p><a className="bi bi-person-square pe-2" href='/'/><a href='/'><strong>Ashish Kumar</strong></a><span className='ps-2' id="designation">SoftwareEngineer</span></p>
                    </div>
                    <div className='col-md-8 pt-2 text-end' id="menu">
                        <ul>
                            <li ><a href='/resume'>Resume</a><span className='ps-2 pe-2'>|</span></li>
                            <li ><a href='/project'>Project</a><span className='ps-2 pe-2'>|</span></li>
                            <li ><a href='/contact'>Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
