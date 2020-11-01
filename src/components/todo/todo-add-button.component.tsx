import React, { FC, memo } from 'react';

type TodoAddButtonProps = {
    onClick: () => void;
};

const TodoAddButton: FC<TodoAddButtonProps> = ({ onClick }) => {
    return (
        <div>
            <button onClick={onClick} type="button">
                todo-button
            </button>
        </div>
    );
};

export default memo(TodoAddButton);
