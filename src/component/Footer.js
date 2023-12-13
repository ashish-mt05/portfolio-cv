import React from 'react'

export default function Footer() {
    return (
        <div className='container' id="footer">
            <div className='row'>
                <div className='col-md-3'>
                    <div>
                        <strong>Phone</strong>
                    </div>
                    <div>
                        123-123-456789
                    </div>
                </div>
                <div className='col-md-3'>
                    <div>
                        <strong>Email</strong>
                    </div>
                    <div>
                        ashish@gmail.com
                    </div>
                </div>
                <div className='col-md-3'>
                    <div>
                        <strong>Follow Us</strong>
                    </div>
                    <div>
                        <a href='/linkedin' className="bi bi-linkedin pe-1" />
                        <a href='/facebook' className="bi bi-facebook pe-1" />
                        <a href='/instagram' className="bi bi-instagram" />
                    </div>
                </div>
                <div className='col-md-3'>
                    <div>
                        © 2035 By Ashish Kumar
                    </div>
                </div>
            </div>
        </div>
    )
}
