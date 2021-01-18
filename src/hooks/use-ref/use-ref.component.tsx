import React, {
    memo,
    useEffect,
    useLayoutEffect,
    useRef,
    useState,
} from 'react';
import useSquareNumber from '../use-square-number/use-square-number.component.jsx';

type UseRefProps = {};

const UseRef = memo<UseRefProps>(() => {
    const ref = useRef<HTMLDivElement>(null!);

    // 2nd way of useRef usage
    const valueThatIsNotChangedOnRerendering = useRef<object>({});
    console.log(valueThatIsNotChangedOnRerendering);

    useEffect(() => {
        console.log('useEffect ref ', ref.current);
    }, []);

    useLayoutEffect(() => {
        console.log("I'll be rendered before useEffect");
    }, []);

    const [name, setName] = useState('');

    const handleSubmit = (evt: any) => {
        evt.preventDefault();

        alert(`Submitting Name ${name}`);
    };

    //using the hook get the number squared
    let result = useSquareNumber(name);
    //another problem here, updating for no reason
    //if I put the logic in handleSubmit, the component becomes 'uncontrolled'
    return (
        <>
            <div ref={ref} onClick={() => console.log(ref)}>
                useRef
            </div>
            <form onSubmit={handleSubmit}>
                <label>
                    Number:
                    <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
            <h3>The squared number is {result}</h3>
        </>
    );
});

export default UseRef;
