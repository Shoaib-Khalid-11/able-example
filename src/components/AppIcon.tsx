import React from 'react';
import { Icon, IconProps } from '@iconify/react';
interface AppIconProps extends IconProps {
    onClick?: () => void;
    icon: string;
}

const AppIcon = (props: AppIconProps) => {
    const clicked = () => {
        if (props.onClick) {
            props.onClick();
        }
    };
    const cursor = props.onClick ? 'pointer' : 'default';
    return (
        <>
            <Icon {...props} onClick={() => clicked()} cursor={cursor} />
        </>
    );
};

export default AppIcon;
