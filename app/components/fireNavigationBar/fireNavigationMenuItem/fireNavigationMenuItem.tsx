import Image from 'next/image';
import React from 'react';

export interface fireNavigationMenuItemProps {
    /**
     * redirection link
     */
    link: string;
    /**
     * label of the menu item
     */
    label: string;
}

export const FireNavigationMenuItem = ({
    link,
    label,
}: fireNavigationMenuItemProps) => {

    return (
        <a href={link}>{label}</a>
    );
};
