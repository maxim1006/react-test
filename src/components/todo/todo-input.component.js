import React, { memo } from 'react';

export default memo(function TodoInput() {
    return (
        <div>
            <input type="text" defaultValue="todo-input"></input>
        </div>
    );
});
