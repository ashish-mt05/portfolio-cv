import React from 'react'
import Navbar from './Navbar'

export default function Header() {
    return (
        <div className='container' id="navbar-wrapper">
            <div className='row'>
                <div className='col-md-4 pt-2 text-start' id="title">
                    <p><a className="bi bi-person-square pe-2" href='/' /><a href='/'><strong>Ashish Kumar</strong></a><span className='ps-2' id="designation">SoftwareEngineer</span></p>
                </div>
                <div className='col-md-8 pt-2 text-end' id="menu">
                    <Navbar />
                </div>
            </div>
        </div>
    )
}
