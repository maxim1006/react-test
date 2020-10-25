import React, { memo } from 'react';

const TodoInputComponent = () => {
    return <input type="text" defaultValue="todo-input" />;
};

export default memo(TodoInputComponent);
