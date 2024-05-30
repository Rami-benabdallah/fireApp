import React from 'react';

interface loadingSpinnerProps {
    /**
     * Width of the spinner
     */
    spinnerHeight?: number;
    /**
     * Height of the spinner
     */
    spinnerWidth?: number;
    /**
     * Color of the spinner, if not passed, it will follow the parent
     */
    spinnerColor?: string;
}

/**
 * Primary UI component for user interaction
 */
export const FireLoadingSpinner = ({
    spinnerWidth = 6,
    spinnerHeight = 6,
    spinnerColor,
}: loadingSpinnerProps) => {
    const widthClass = `w-${spinnerWidth}`;
    const heightClass = `h-${spinnerHeight}`;
    const colorClass = `text-${spinnerColor}`
    return (
        <div className={`flex items-center justify-center ${colorClass}`}>
            <div
                className={`border-b-4 rounded-full animate-spin mr-6 ml-6 ${widthClass} ${heightClass}`}
                style={{ minWidth: `${spinnerWidth * 0.25}rem`, minHeight: `${spinnerHeight * 0.25}rem` }}
            ></div>
        </div>
    );
};
