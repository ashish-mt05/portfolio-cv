import React from 'react'

export default function WorkExperience() {
    const WorkExperienceData = [
        {
            'experienceYear': '2012-Present',
            'compnayName': 'Cognizant',
        },
        {
            'experienceYear': '2021-2022',
            'compnayName': 'Patch Info Tech',
        },
        {
            'experienceYear': '2020-2021',
            'compnayName': 'Jamcracker Info',
        },
        {
            'experienceYear': '2018-2020',
            'compnayName': 'Pragiti Inc',
        }
    ]
    return (
        <div>
            {WorkExperienceData.map((item, index) => (
                <>
                    <div className='row mb-1'>
                        <div className='col-md-6'>Year</div>
                        <div className='col-md-6'>{item.experienceYear}</div>
                    </div>
                    <div className='row mb-3'>
                        <div className='col-md-6'>Degree Name</div>
                        <div className='col-md-6'>{item.compnayName}</div>
                    </div>
                </>
            ))}
        </div>
    )
}
