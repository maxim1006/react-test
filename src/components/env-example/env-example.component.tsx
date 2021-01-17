import React, { memo } from 'react';
import { __prod__ } from '../../constants/constants';

type EnvExampleProps = {};

const EnvExample = memo<EnvExampleProps>(() => {
    let message;

    if (__prod__) {
        message = 'production mode';
    } else {
        message = 'development mode';
    }

    return (
        <>
            <p>Current environment: {message}</p>
            <p>
                Example environment from .env file:{' '}
                {process.env.REACT_APP_MY_ENV_EXAMPLE}
            </p>
        </>
    );
});

export default EnvExample;
