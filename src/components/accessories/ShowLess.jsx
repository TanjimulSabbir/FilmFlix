import React, { useState } from 'react';
import "../../style/animation.css"; // Ensure your animation styles are imported

const ShowLess = ({ content, maxLength = 150 }) => {
    const [showFullContent, setShowFullContent] = useState(false);
    const [sliderClass, setSliderClass] = useState('rightSlider');

    // Truncate content if longer than maxLength characters
    const truncatedContent = content?.length > maxLength ? `${content?.slice(0, maxLength)}...` : content;

    const toggleShowFullContent = () => {
        setShowFullContent(!showFullContent);
        setSliderClass(showFullContent ? 'downSlider' : 'grow');
    };

    return (
        <div>
            <p className={`${sliderClass} text-xs md:text-sm`}>
                {showFullContent ? content : truncatedContent}
            </p>
            {content?.length > maxLength && (
                <button onClick={toggleShowFullContent} className="text-blue-500 transition-colors duration-500 hover:text-blue-700">
                    {showFullContent ? 'See less' : 'See more'}
                </button>
            )}
        </div>
    );
};

export default ShowLess;
