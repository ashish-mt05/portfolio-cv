import React from 'react'
import App from './../App';

export default function Education() {
    const educationData = [
        {
            'educationYear': '2015-2017',
            'degree': 'M-Tech',
            'stream': 'IT',
            'percentage': '7.54',
            'location': 'IIITM Gwalior MP'
        },
        {
            'educationYear': '2010-2014',
            'degree': 'B-Tech',
            'stream': 'IT',
            'percentage': '72.54',
            'location': 'Knit SUltanpur UP'
        }
    ]
    return (
        <div>
            <div className='row mb-1'>
                <div className='col-md-2'><strong>Year</strong></div>
                <div className='col-md-2'><strong>Degree Name</strong></div>
                <div className='col-md-2'><strong>Stream</strong></div>
                <div className='col-md-2'><strong>Percantage/Grad</strong></div>
                <div className='col-md-4'><strong>Location</strong></div>
            </div>
            {educationData.map((item, index) => (
                <div className='row mb-1' key={index}>
                    <div className='col-md-2'>{item.educationYear}</div>
                    <div className='col-md-2'>{item.degree}</div>
                    <div className='col-md-2'>{item.stream}</div>
                    <div className='col-md-2'>{item.percentage}</div>
                    <div className='col-md-4'>{item.location}</div>
                </div>
            ))}
        </div>
    )
}
