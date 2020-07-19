import React, { memo } from 'react';

export type ParentChildComponentProps = {
    prop: string;
    onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
};

const ParentChildComponent = ({ prop, onClick }: ParentChildComponentProps) => {
    return (
        <>
            Prop: {prop}
            <div onClick={onClick}>Click me</div>
        </>
    );
};

export default memo(ParentChildComponent);
