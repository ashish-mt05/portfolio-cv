import React from 'react'

export default function SkillSet() {
    const skillset = ['Java', 'Spring Boot', 'Microservice', 'MySQL', 'MongoDB'];
    return (
        <>
            {skillset.map((item, index) => (
                <span key={index}>
                    <span className="badge badge-pill bg-info me-2">{item}</span>
                </span>
            ))}
        </>
    )
}
