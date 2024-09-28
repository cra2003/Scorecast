import React from 'react';
import P_navbar from './p_navbar';
import './ana.css'; // Ensure you have styles for your Analysis component

const Analysis = () => {
    return (
        <div className='t'>
            <P_navbar title="ANALYSIS" marginLeft='565px' />
            <div className="image-gallery">
                <div className="gallery-image">
                    <img src="t20.png" alt="T20 Analysis" className="gallery-image" />
                    <a href="t20.png" download className="download-button">Download</a>
                </div>
                <div className="gallery-image">
                    <img src="test.png" alt="Test Analysis" className="gallery-image" />
                    <a href="test.png" download className="download-button">Download</a>
                </div>
                <div className="gallery-image">
                    <img src="odi.png" alt="ODI Analysis" className="gallery-image" />
                    <a href="odi.png" download className="download-button">Download</a>
                </div>
            </div>
        </div>
    );
};

export default Analysis;
