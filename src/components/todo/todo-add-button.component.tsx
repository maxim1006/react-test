import React, { memo } from 'react';

const handleClick = () => {
    console.log('123');
};

const AddButtonComponent = () => {
    return (
        <div>
            <button onClick={handleClick} type="button">
                todo-button
            </button>
        </div>
    );
};

export default memo(AddButtonComponent);
