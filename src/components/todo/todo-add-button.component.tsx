import React, { FC, memo } from 'react';

type TodoAddButtonProps = {};

const TodoAddButton: FC<TodoAddButtonProps> = () => {
    const handleClick = () => {
        console.log('123');
    };

    return (
        <div>
            <button onClick={handleClick} type="button">
                todo-button
            </button>
        </div>
    );
};

export default memo(TodoAddButton);
