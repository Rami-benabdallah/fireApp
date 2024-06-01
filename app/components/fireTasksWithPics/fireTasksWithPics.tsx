import Image from 'next/image';
import React from 'react';

interface fireTasksWithPicsProps {

}

export const FireTasksWithPics = ({
}: fireTasksWithPicsProps) => {
    const data = [
        {
            groupName: "Fire Protection Concept and Reporting",
            services: [{
                title: "Preparation of fire protection concepts and reports",
                description: "Comprehensive creation of fire protection concepts and detailed reports to ensure compliance and safety."
            },
            {
                title: "Preparation of fire protection reports",
                description: "Detailed fire protection reports tailored to specific project needs and regulations."
            },
            {
                title: "Preparation of fire protection plans",
                description: "Development of fire protection plans for various types of buildings and facilities."
            },
            {
                title: "Preparation of fire service plans according to DIN 14095, escape and rescue plans, and fire protection regulations",
                description: "Creation of fire service, escape, and rescue plans in accordance with DIN 14095 and relevant fire protection regulations."
            }]
        },
        {
            groupName: "Fire Protection Compliance and Certification",
            services: [
                {
                    title: "Examination of fire protection certificates and preparation of certificates according to Section 67 Paragraph 4 and Section 68 Paragraph 2 BauO NRW",
                    description: "Inspection and certification to ensure projects comply with fire protection requirements as specified in BauO NRW."
                },
                {
                    title: "Random construction inspections and preparation of certificates according to Section 67 Paragraph 5 and Section 81 Paragraph 1 BauO NRW",
                    description: "Conducting random inspections during construction and preparing necessary certification to meet BauO NRW standards."
                }
            ]
        },
        {
            groupName: "Fire Load and Risk Assessment",
            services: [
                {
                    title: "Fire load determinations according to DIN 18230",
                    description: "Assessment of fire load as per DIN 18230 standards to evaluate potential fire risks."
                },
                {
                    title: "Risk assessment according to the Occupational Safety and Health Act as part of the fire protection concept",
                    description: "Comprehensive risk assessments in line with the Occupational Safety and Health Act, integrated into the fire protection concept."
                }
            ]
        },
        {
            groupName: "Construction Management and Specialist Services",
            services: [
                {
                    title: "Specialist construction management fire protection",
                    description: "Expert management of fire protection aspects during the construction phase to ensure compliance and safety."
                }
            ]
        }
    ]
    return (
        <div className='w-full flex items-center flex-col gap-8 p-6 justify-between'>
            {data.map((group, groupIndex) => (
                <div className='w-full flex flex-col md:flex-row  '>
                    {groupIndex % 2 === 0 ? (
                        <>
                            <div className='w-full md:w-1/2 flex justify-center'>
                                <Image
                                    src='/building_design_diagrams.png'
                                    alt='test'
                                    width={450}
                                    height={240}
                                />
                            </div>
                            <div className='w-full md:w-1/2 flex justify-center'>
                                <div className='w-3/4 flex flex-col justify-center gap-6 text-justify'>
                                    <h2 className='uppercase'>{group.groupName} :</h2>
                                    <ul>
                                        {group.services.map((service, serviceIndex) => (
                                            <li key={serviceIndex}>
                                                <p>
                                                    - {service.description}
                                                </p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className='w-full md:w-1/2 flex justify-center'>
                                <div className='w-3/4 flex flex-col justify-center gap-6 text-justify'>
                                    <h2 className='uppercase'>{group.groupName} :</h2>
                                    <ul className='flex flex-col gap-4'>
                                        {group.services.map((service, serviceIndex) => (
                                            <li key={serviceIndex}>
                                                <p>
                                                    - {service.description}
                                                </p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className='w-full md:w-1/2 flex justify-center'>
                                <Image
                                    src='/building_design_diagrams.png'
                                    alt='test'
                                    width={450}
                                    height={240}
                                />
                            </div>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
};
