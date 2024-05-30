import React from 'react';
import { FireNavigationMenu } from './fireNavigationMenu/fireNavigationMenu';
import { fireNavigationMenuItemProps } from './fireNavigationMenuItem/fireNavigationMenuItem';
import { FireIcon as FireLogo } from '../fireIcon/fireIcon';
import { FireNavigationIconMenu, SocialMediaItemProps } from './fireNavigationIconMenu/fireNavigationIconMenu';

interface fireNavigationBarProps {
    menuItems: Array<fireNavigationMenuItemProps>;
    socialMediaMenuItems: Array<SocialMediaItemProps>;
}

export const FireNavigationBar = ({
    menuItems,
    socialMediaMenuItems,
}: fireNavigationBarProps) => {
    return (
        <div className='w-full flex items-center gap-28 text-light bg-primary p-6 justify-between'>
            <div className='w-full flex'>
                <div className='mr-10 ml-10'>
                    <FireLogo
                        src='/vercel.svg'
                        alt='logo'
                        iconWidth={80}
                        iconHeight={24}
                    />
                </div>
                <FireNavigationMenu
                    menuItems={menuItems}
                />
            </div>
            <div className='mr-10'>
                <FireNavigationIconMenu
                    iconMenuItems={socialMediaMenuItems}
                />
            </div>
        </div>

    );
};
