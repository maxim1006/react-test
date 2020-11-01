import React, { ChangeEvent, FC, memo } from 'react';

type TodoInputProps = {
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const TodoInput: FC<TodoInputProps> = ({ onChange }) => {
    return (
        <input onChange={onChange} type="text" placeholder="please type todo" />
    );
};

export default memo(TodoInput);
