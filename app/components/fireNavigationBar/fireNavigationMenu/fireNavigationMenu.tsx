import Image from 'next/image';
import React from 'react';
import { FireNavigationMenuItem, fireNavigationMenuItemProps } from '../fireNavigationMenuItem/fireNavigationMenuItem';

interface fireNavigationMenuProps {
    /**
     * rnavigation menu item
     */
    menuItems: Array<fireNavigationMenuItemProps>;
}

export const FireNavigationMenu = ({
    menuItems,
}: fireNavigationMenuProps) => {

    return (
        <ul className='flex flex-row gap-6'>
            {menuItems.map((item, index) => (
                <li key={index}>
                    <FireNavigationMenuItem
                        link={item.link}
                        label={item.label}
                    />
                </li>
            ))}
        </ul>
    );
};
