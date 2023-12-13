import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div className='container' id="navbar-wrapper">
            <div className='row'>
                <div className='col-md-4 pt-2 text-start' id="title">
                    <p>
                        <Link to='/'>
                            <span className="bi bi-person-square pe-2" />
                            <strong>Ashish Kumar</strong>
                        </Link>
                        <span className='ps-2' id="designation">SoftwareEngineer</span>
                    </p>
                </div>
                <div className='col-md-8 pt-2 text-end' id="menu">
                    <ul>
                        <li ><Link to='/resume'>Resume</Link><span className='ps-2 pe-2'>|</span></li>
                        <li ><Link to='/project'>Project</Link><span className='ps-2 pe-2'>|</span></li>
                        <li ><Link to='/contact'>Contact</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
