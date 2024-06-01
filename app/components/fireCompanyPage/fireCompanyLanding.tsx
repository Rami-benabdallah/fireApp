import Image from 'next/image';
import React from 'react';
import { FireButton } from '../fireButton/fireButton';

interface FireCompanyLandingProps {

}

export const FireCompanyLanding = ({
}: FireCompanyLandingProps) => {
    return (
        <div className="h-full w-full mt-52 md:mt-80 text-center flex justify-center items-center flex-col gap-16">
            <header className="text-8xl text-navi-light">
                Fire Safety First
            </header>
            <span className="text-xs text-navi text-center">
                Confidently Test and Plan
            </span>
            <div className="flex gap-12">
                <FireButton
                    primary={true}
                    label="Get started"
                />
                <FireButton
                    label="Learn more"
                />
            </div>
        </div>
    );
};
