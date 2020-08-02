import React, { memo } from 'react';
import './bem.component.scss';

const Bem = () => {
    return (
        <div className="bem _with-big-element">
            <div className="bem__element">Element</div>
            <div className="bem__element _big">Element big</div>
            <ul className="bem__list">
                <li className="bem__list-item">List Item</li>
            </ul>
            <a href="#" className="bem__link">
                Element 3
            </a>
        </div>
    );
};

export default memo(Bem);
