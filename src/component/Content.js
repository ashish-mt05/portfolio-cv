import React from 'react'
import { Link } from 'react-router-dom'

export default function Content() {
    return (
        <div className='container' >
            <div className='row' id="content">
                <div className='col-md-6 me-4 d-flex justify-content-center' id="image">

                </div>
                <div className='col-md-6' id="info">
                    <div className='row mt-5'>
                        <div className='col-md-12'>
                            <h1>Hello</h1>
                        </div>
                    </div>
                    <div className='row mt-3'>
                        <div className='col-md-12'>
                            <h4>A Bit About Me</h4>
                            <p>I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                        </div>
                    </div>
                    <div className='row mt-3'>
                        <div className='col-md-3 me-5'>
                            <Link to='/resume'>
                                <div id="resume">
                                    <strong>Resume</strong>
                                </div>
                            </Link>
                        </div>
                        <div className='col-md-3 me-5'>
                            <Link to='/project'>
                                <div id="project">
                                    <strong>Project</strong>
                                </div>
                            </Link>
                        </div>
                        <div className='col-md-3'>
                            <Link to='/contact'>
                                <div id="contact">
                                    <strong>Contact</strong>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
