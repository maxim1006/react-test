import React, { memo, useState } from 'react';
import useGetRequest from './use-get-request.hook';
import axios, { CancelTokenSource } from 'axios';

type UseGetRequestProps = {};

const UseGetRequest = memo<UseGetRequestProps>(() => {
    const { data: users, loading, refetch } = useGetRequest({
        url: 'https://jsonplaceholder.typicode.com/users',
    });

    return (
        <>
            <button
                type="button"
                onClick={() => {
                    refetch();
                }}
            >
                Make Request
            </button>
            {loading} ? Loading... : {JSON.stringify(users)}
        </>
    );
});

export default UseGetRequest;
