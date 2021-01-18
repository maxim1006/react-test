import { useState, useEffect } from 'react';

//can't convert states to typescript, either with types or :
//why do we need to provide someNumber as a second argument here?

const useSquareNumber = someNumber => {
    const [numberData, setNumberData] = useState();
    useEffect(() => setNumberData(someNumber ** 2), [someNumber]);
    return numberData;
};
export default useSquareNumber;
