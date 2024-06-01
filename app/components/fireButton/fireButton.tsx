import React from 'react';
import { FireIcon } from '../fireIcon/fireIcon';
import { FireLoadingSpinner } from '../fireLoadingSpinner/fireLoadingSpinner';

interface ButtonProps {
    /**
     * Is this the principal call to action on the page?
     */
    primary?: boolean;
    /**
     * What background color to use
     */
    backgroundColor?: string;
    /**
     * How large should the button be?
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * Button contents
     */
    label: string;
    /**
     * Should add an icon?
     */
    addIcon?: boolean;

    src?: string;

    alt?: string;

    iconWidth?: number;

    iconHeight?: number;

    isLoading?: boolean;

    spinnerHeight?: number;

    spinnerWidth?: number;

    spinnerColor?: string;
    /**
     * Should disable the button?
     */
    isDisabled?: boolean;
    /**
     * Optional click handler
     */
    onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const FireButton = ({
    primary = false,
    label,
    addIcon = false,
    src,
    alt,
    iconWidth,
    iconHeight,
    isLoading,
    spinnerHeight,
    spinnerWidth,
    spinnerColor,
    isDisabled,
}: ButtonProps) => {
    const mode = `
    flex items-center justify-center py-3 px-6 rounded-lg hover:shadow-lg shadow-gray
    ${primary ? ' bg-navi-light text-light' : ' bg-light text-navi-light border border-navi-light'}
    ${addIcon ? ' gap-2' : ''}
    ${isDisabled ? ' pointer-events-none opacity-50 cursor-not-allowed' : ''}
    ${isLoading ? ' pointer-events-none cursor-not-allowed' : ''}
    `
    return (
        <button
            className={mode}
        >
            {isLoading ? (
                <FireLoadingSpinner
                    spinnerHeight={spinnerHeight}
                    spinnerWidth={spinnerWidth}
                    spinnerColor={spinnerColor}
                />
            ) : (
                <>
                    {addIcon && (
                        <FireIcon
                            src={src}
                            alt={alt}
                            iconWidth={iconWidth}
                            iconHeight={iconHeight}
                        />
                    )}
                    {label}
                </>
            )}
        </button>
    );
};
