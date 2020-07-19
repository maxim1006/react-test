import React, { memo } from 'react';
import ParentChildComponent from './components/parent-child.component';

// TODO read https://reactjs.org/docs/context.html

const ParentComponent: React.FC = () => {
    return (
        <>
            <ParentChildComponent
                onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                    console.log(e);
                }}
                prop={'prop'}
            />
        </>
    );
};

export default memo(ParentComponent);
