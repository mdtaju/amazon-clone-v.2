import React from 'react';

const FooterItem = ({ title, description }) => {
    return (
        <div className='m-5 link'>
            <h1 className='text-xs'>{title}</h1>
            <p className='text-xs text-gray-400'>{description}</p>
        </div>
    );
};

export default FooterItem;