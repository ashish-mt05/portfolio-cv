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
                            <p>
                                I have total 5yrs of experience to develop java web and standalon application using Java, 
                                Java8, Spring, Spring boot, Microservices, Jenkins, Docker, Kubertens, Istio, MySql, MongoDB, Kafka, 
                                J2EE, JSP, Servlet, Reactjs, JavaScript, Html, CSS, Bootstrap, Camunda, Aws state Machine,
                                Sonarqube, fortify, new relic, sentry, ELK, splunk, kibana, Maven.
                            </p>
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
