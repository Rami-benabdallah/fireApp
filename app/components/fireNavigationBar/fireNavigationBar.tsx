import React from 'react';
import { FireNavigationMenu } from './fireNavigationMenu/fireNavigationMenu';
import { fireNavigationMenuItemProps } from './fireNavigationMenuItem/fireNavigationMenuItem';
import { FireIcon as FireLogo } from '../fireIcon/fireIcon';
import Image from 'next/image';

interface fireNavigationBarProps {
    menuItems: Array<fireNavigationMenuItemProps>;
}

export const FireNavigationBar = ({
    menuItems,
}: fireNavigationBarProps) => {
    return (
        <div className='w-full flex items-center gap-28 text-navi-light p-6 justify-between border-b-4 border-navi-light bg-light h-20'>
            <div className='w-full flex justify-between'>
                <div className='ml-10'>
                    <FireLogo
                        src='/vercel.svg'
                        alt='logo'
                        iconWidth={80}
                        iconHeight={24}
                    />
                </div>
                <div className='mr-10 hidden sm:flex'>
                    <FireNavigationMenu
                        menuItems={menuItems}
                    />
                </div>
            </div>
            <div className='cursor-pointer block sm:hidden'>
                <Image
                    src='/menu.svg'
                    alt='logo'
                    width={35}
                    height={35}
                />
            </div>
        </div>
    );
};
