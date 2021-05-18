import React from 'react';
import './smooth-scrolling.scss';

export default function SmoothScrolling() {
    const smoothScrollFunction = () => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div>
            <button
                className="smoothScrollingButton"
                type="button"
                onClick={smoothScrollFunction}
            >
                click to scroll smoothly
            </button>
        </div>
    );
}
