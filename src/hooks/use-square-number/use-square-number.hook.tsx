import { useState, useEffect } from 'react';

// can't convert states to typescript, either with types or :
// why do we need to provide num as a second argument here?

const useSquareNumber = (num: number = 0) => {
    const [numberData, setNumberData] = useState<number>(0);

    useEffect(() => setNumberData(num ** 2), [num]);

    return numberData;
};
export default useSquareNumber;
