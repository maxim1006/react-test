import axios from 'axios';
import { useEffect, useState } from 'react';

export default function useSimpleGetRequest<T>({
    url,
}: {
    url: string;
}): {
    simpleData: T | null;
} {
    const [simpleData, setSimpleData] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get(url);

                setSimpleData(data);
            } catch (e) {
                // need the console.log for logging out possible errors
                // eslint-disable-next-line no-console
                console.log(`Get request to ${url} error `, e);
            }
        })();
    }, [url]);

    return {
        simpleData,
    };
}
