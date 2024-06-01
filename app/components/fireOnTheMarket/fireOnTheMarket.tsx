import React from 'react';

interface FireOnTheMarketProps {

}

export const FireOnTheMarket = ({
}: FireOnTheMarketProps) => {
    return (
        <div className="h-full w-full flex flex-col justify-center items-center bg-background">
            <div className='flex flex-col justify-center items-center gap-12'>
                <p className='text-navi'>On the Market since 2013 with the guidance of</p>
                <span>Petra Eschenfelder</span>
                <p>Staatlich anerkannte Sachverständige für die Prüfung des Brandschutzes</p>
            </div>
            <div className='flex flex-row mt-16 shadow-lg shadow-gray-light'>
                <div className='flex flex-col justify-center items-center p-14 border-r border-navi-light'>
                    <span className='text-navi-light text-6xl'>200 +</span>
                    <span>Customers</span>
                </div>
                <div className='flex flex-col justify-center items-center p-14 border-r border-navi-light'>
                    <span className='text-navi-light text-6xl'>500+</span>
                    <span>Projects done</span>
                </div>
                <div className='flex flex-col justify-center items-center p-14 '>
                    <span className='text-navi-light text-6xl'>50%</span>
                    <span>Improved security</span>
                </div>
            </div>
        </div>
    );
};
