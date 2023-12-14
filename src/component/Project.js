import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Project() {
  const projectInfo = [
    {
      'projectYear': '2018-2020',
      'projectName': 'XYZ',
      'technologyUsed': ['java', 'spring boot'],
      'rollResponsibility ': 'aaddd sdasda',
      'projectDescription': 'xyz asasca'
    },
    {
      'projectYear': '2020-2021',
      'projectName': 'ABC',
      'technologyUsed': ['java', 'spring boot'],
      'rollResponsibility ': 'abc djbasdka asdjasdk',
      'projectDescription': 'abc asasa'
    }
  ]
  return (
    <div>
      <Header />
      <div className='container'>
        <div className='row mb-5' >
          <div className='col-md-3'>
            <strong>Projects</strong>
          </div>
          <div className='col-md-9'>
            {projectInfo.map((item, index) => (
              <>
                <div className='row mb-1'>
                  <div className='col-md-6'><strong>Start-End Year</strong></div>
                  <div className='col-md-6'>{item.projectYear}</div>
                </div>
                <div className='row mb-1'>
                  <div className='col-md-6'>Project Name</div>
                  <div className='col-md-6'>{item.projectName}</div>
                </div>
                <div className='row mb-1'>
                  <div className='col-md-6'>Technology Used</div>
                  <div className='col-md-6'>
                    {item.technologyUsed.map((technology, index) => (
                      <span key={index}>
                        <span className="me-2">{technology}</span>
                      </span>
                    ))}
                  </div>
                </div>
                <div className='row mb-1'>
                  <div className='col-md-6'>Rolls & Responsibility</div>
                  <div className='col-md-6'>{item.rollResponsibility}</div>
                </div>
                <div className='row mb-5'>
                  <div className='col-md-6'>Project Description</div>
                  <div className='col-md-6'>{item.projectDescription}</div>
                </div>
                </>
            ))}
        </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
