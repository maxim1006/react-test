import axios, { CancelTokenSource } from 'axios';
import { useCallback, useEffect, useState } from 'react';

export default function useGetRequest<T>({
    url,
    cb,
}: {
    url: string;
    cb?: (data: T) => void;
}): {
    data: T | null;
    loading: boolean;
    refetch: () => void;
} {
    const cancelRequest: CancelTokenSource = axios.CancelToken.source();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    const refetch = useCallback(() => {
        (async () => {
            try {
                setLoading(true);

                const { data } = await axios.get(url, {
                    cancelToken: cancelRequest.token,
                });

                setData(data);

                cb && cb(data);
            } catch (e) {
                console.log(`Get request to ${url} error `, e);
            } finally {
                setLoading(false);
            }
        })();
    }, [url]);

    useEffect(() => {
        refetch();

        return () => cancelRequest.cancel(`Cancel get request to ${url}`);
    }, [url, cb]);

    return {
        data,
        loading,
        refetch,
    };
}
