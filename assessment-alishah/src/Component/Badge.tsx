import React from 'react';


interface BadgeProps {
    label: string;
    color?: string;
}
// destructing props
const Badge: React.FC<BadgeProps> = ({ label, color = 'default' }) => {
    return (
        <div className={`badge ${color}`}>
            {label}
        </div>
    );
};

export default Badge;