import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Button } from 'react-bootstrap'
import SkillSet from './SkillSet'
import Education from './Education'
import WorkExperience from './WorkExperience'

export default function Resume() {
  return (
    <div>
      <Header />
      <div className='container'>
        <div className='row' >
          <div className='col-md-12'>
            <strong>Resume</strong>
          </div>
        </div>
        <div className='row pt-3' id="skillset">
          <div className='col-md-6'><strong>Skills Set</strong></div>
          <div className='col-md-6'>
            <SkillSet />
          </div>
        </div>
        <div className='row pt-3' id="education">
          <div className='col-md-6'><strong>Education</strong></div>
          <div className='col-md-6'>
            <Education />
          </div>
        </div>
        <div className='row pt-3' id="workexperience">
          <div className='col-md-6'><strong>Work Experience</strong></div>
          <div className='col-md-6'>
            <WorkExperience />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
