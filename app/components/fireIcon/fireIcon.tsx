import Image from 'next/image';
import React from 'react';

export interface IconProps {
    src: string;
    /**
     * Alt of the icon
     */
    alt: string;
    /**
     * Width of the icon
     */
    iconWidth: number;
    /**
     * Height of the icon
     */
    iconHeight: number;
    /**
     * redirection link for the icon
     */
    iconLink?: string;
    /**
     * Optional click handler
     */
    onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const FireIcon = ({
    src = '/vercel.svg',
    alt = "Vercel Logo",
    iconWidth,
    iconHeight,
    iconLink,
}: IconProps) => {
    return (
        <Image
            src={src}
            alt={alt}
            width={iconWidth}
            height={iconHeight}
            priority
        />
    );
};
