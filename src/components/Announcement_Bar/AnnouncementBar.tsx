import React from 'react';
import './AnnouncementBar.scss';
export const AnnouncementBar: React.FC = () => {
    return (
        <div className="announcement-bar">
            <span className='time'>Mon–Thu: 9:00 AM – 5:30 PM</span>
            <span className='address'>Visit our showroom: 1234 Street Address</span>
            <span className='phone'>Call us: (00) 1234 5678</span>
        </div>
    );
};