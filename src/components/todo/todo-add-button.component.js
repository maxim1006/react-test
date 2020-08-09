import React, { memo } from 'react';

const handleClick = () => {
    console.log('123');
};

export default memo(function AddButton() {
    return (
        <div>
            <button onClick={handleClick}>todo-button</button>
        </div>
    );
});
