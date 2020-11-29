import axios, { CancelTokenSource } from 'axios';
import { useCallback, useEffect, useRef, useState } from 'react';

export default function useGetRequest<T>({
    url,
}: {
    url: string;
    cb?: (data: T) => void;
}): {
    data: T | null;
    loading: boolean;
    refetch: () => void;
} {
    // cancelRequest = {current: undefined}
    const cancelRequest = useRef<CancelTokenSource>();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    const refetch = useCallback(async () => {
        if (cancelRequest.current) {
            cancelRequest.current?.cancel(
                `Use get request hook iscancelled ${url}`
            );
        }

        cancelRequest.current = axios.CancelToken.source();

        try {
            setLoading(true);

            const { data } = await axios.get(url, {
                cancelToken: cancelRequest.current?.token,
            });

            setData(data);
        } catch (e) {
            console.log(`Get request to ${url} error `, e);
        } finally {
            setLoading(false);
        }
    }, [url]);

    useEffect(() => {
        refetch();
    }, [refetch]);

    return {
        data,
        loading,
        refetch,
    };
}
