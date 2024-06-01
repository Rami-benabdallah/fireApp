import React from 'react';
import { FireIcon } from '../../fireIcon/fireIcon';
import Link from 'next/link';

export interface SocialMediaItemProps {
    alt: string;
    link: string;
    src: string;
}

export interface fireNavigationMenuProps {
    /**
     * Navigation icon menu items
     */
    iconMenuItems: Array<SocialMediaItemProps>;
}

export const FireNavigationIconMenu = ({
    iconMenuItems,
}: fireNavigationMenuProps) => {
    return (
        <ul className='flex flex-row gap-4'>
            {iconMenuItems.map((item, index) => (
                <li key={index}>
                    <Link href={item.link}>
                        <FireIcon
                            src={item.src}
                            alt={item.alt}
                            iconWidth={32}
                            iconHeight={32}
                        />
                    </Link>
                </li>
            ))}
        </ul>
    );
};
