import React from 'react'
import App from './../App';

export default function Education() {
    const educationData = [
        {
            'educationYear': '2015-2017',
            'degree': 'M-Tech',
            'stream': 'Information Technology',
            'percentile ': '7.54',
            'percentage': null
        },
        {
            'educationYear': '2010-2014',
            'degree': 'B-Tech',
            'stream': 'Information Technology',
            'percentile ': null,
            'percentage': '72.54',
        }
    ]
    return (
            <div>
                {/* Using map to iterate over the array and render list items */}
                {educationData.map((item, index) => (
                    <>
                        <div className='row mb-1'>
                            <div className='col-md-6'>Year</div>
                            <div className='col-md-6'>{item.educationYear}</div>
                        </div>
                        <div className='row mb-1'>
                            <div className='col-md-6'>Degree Name</div>
                            <div className='col-md-6'>{item.degree}</div>
                        </div>
                        <div className='row mb-1'>
                            <div className='col-md-6'>Stream</div>
                            <div className='col-md-6'>{item.stream}</div>
                        </div>
                        <div className='row mb-1'>
                            <div className='col-md-6'>Percentile</div>
                            {
                            item.percentile == null ?
                                <div className='col-md-6'>NA</div>
                                : <div className='col-md-6'>{item.percentile}</div>
                            }
                        </div>
                        <div className='row mb-3'>
                            <div className='col-md-6'>Percantage</div>
                            {
                            item.percentage == null ?
                                <div className='col-md-6'>NA</div>
                                : <div className='col-md-6'>{item.percentage}</div>
    
                            }
                        </div>
                        
                    </>
                ))}
            </div>
    )
}
