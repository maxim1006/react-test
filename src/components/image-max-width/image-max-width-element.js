import React from 'react';
import './image-max-width-element.scss';
import ImgMaxWidth from './img/img-max-width.png';

export default function ImageMaxWidth() {
    return (
        <div>
            <img
                className="imgMaxWidth"
                src={ImgMaxWidth}
                alt="img-max-width"
            />
        </div>
    );
}
