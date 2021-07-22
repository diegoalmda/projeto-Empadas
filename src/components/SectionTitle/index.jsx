import React from 'react';

function SectionTitle(props) {
    const {title} = props;
    return (
        <div className="Title">
            <h2>{title}</h2>
        </div>
    );
}

export default SectionTitle;