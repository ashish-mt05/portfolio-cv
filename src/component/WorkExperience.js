import React from 'react'

export default function WorkExperience() {
    const workExperienceData = [
        {
            'experienceYear': '2012-Present',
            'compnayName': 'XYZ',
            'location': 'Gurugram'
        },
        {
            'experienceYear': '2021-2022',
            'compnayName': 'Patch Info Tech',
            'location': 'Gurugram'
        },
        {
            'experienceYear': '2020-2021',
            'compnayName': 'Jamcracker Info',
            'location': 'Bangalore'
        },
        {
            'experienceYear': '2018-2020',
            'compnayName': 'Pragiti Inc',
            'location': 'Bangalore'
        }
    ]
    return (
        <div className='mb-5'>
            <div className='row mb-1'>
                <div className='col-md-4'><strong>Year</strong></div>
                <div className='col-md-4'><strong>Company Name</strong></div>
                <div className='col-md-4'><strong>Location</strong></div>
            </div>
            {workExperienceData.map((item, index) => (
                <div className='row mb-1' key={index}>
                    <div className='col-md-4'>{item.experienceYear}</div>
                    <div className='col-md-4'>{item.compnayName}</div>
                    <div className='col-md-4'>{item.location}</div>
                </div>
            ))}
        </div>
    )
}
