import Image from 'next/image';
import React from 'react';

interface fireFooterProps {

}

export const FireFooter = ({
}: fireFooterProps) => {
    return (
        <div className='w-full flex items-center gap-28 text-light bg-navi p-6 justify-between'>
            <div className='flex flex-col gap-28 ml-10'>
                <div className='flex flex-col'>
                    <span>
                        PKB
                    </span>
                    <span>
                        Schutzorientierte Lösungen im Brandschutz
                    </span>
                </div>
                <div>
                    <span>
                        © 2024 PKB. All rights reserved.
                    </span>
                </div>
            </div>
            <div className='mr-10 bg-light rounded-lg'>
                <Image
                    src='/building.webp'
                    alt='building'
                    height={200}
                    width={200}
                />
            </div>
        </div>
    );
};
