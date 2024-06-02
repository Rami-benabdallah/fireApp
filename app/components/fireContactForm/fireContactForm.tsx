import Image from 'next/image';
import React from 'react';
import { FireForm } from './fireForm/fireForm';

interface FireContactFormProps {

}

export const FireContactForm = ({
}: FireContactFormProps) => {
    return (
        <div className="h-full w-full flex flex-row justify-center items-center bg-background gap-24 mb-24">
            <div className='w-1/2 flex flex-col text-justify gap-8'>
                <header className='text-6xl'>Get in touch</header>
                <p>
                    Use our contact form for all information requests or contact us directly using the contact information below
                </p>
                <span>Feel free to get in touch with us via email or phone</span>
                <hr className="border-navi-light" />
                <div>
                    <div className='flex flex-row items-center gap-16'>
                        <Image
                            src='/location.svg'
                            alt='find us'
                            width={100}
                            height={100}
                        />
                        <div className='flex flex-col'>
                            <span>
                                Our office Location
                            </span>
                            <span>
                                Prüf-Kollegium-Bau
                            </span>
                            <span>
                                Mathildenstraße 65, 50679 Köln
                            </span>
                        </div>
                    </div>
                    <div>
                        <div className='flex flex-row items-center gap-16 mt-12'>
                            <Image
                                src='/phone.svg'
                                alt='call us'
                                width={100}
                                height={100}
                            />
                            <div className='flex flex-col'>
                                <span>
                                    Phone
                                </span>
                                <span>
                                    +49 987 789 789
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-1/2 flex flex-col bg-gray-light rounded-lg py-20 px-10'>
                <span className='text-4xl mb-20 font-semibold'>Send us a message</span>
                <FireForm />
            </div>
        </div>
    );
};
