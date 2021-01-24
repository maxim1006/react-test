import React, {
    memo,
    useEffect,
    useLayoutEffect,
    useRef,
    useState,
} from 'react';

type UseRefProps = {};

const UseRef = memo<UseRefProps>(() => {
    const ref = useRef<HTMLDivElement>(null!);

    // 2nd way of useRef usage
    // for example
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const valueThatIsNotChangedOnRerendering = useRef<object>({});

    useEffect(() => {
        // need for useEffect illustration
        // eslint-disable-next-line no-console
        console.log('useEffect ref ', ref.current);
    }, []);

    useLayoutEffect(() => {
        // need for useLayoutEffect illustration
        // eslint-disable-next-line no-console
        console.log("I'll be rendered before useEffect");
    }, []);

    const [name, setName] = useState<string>();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setName(name);
    };

    // using the hook get the number squared
    // const result = useSquareNumber(+name);
    // another problem here, updating for no reason
    // if I put the logic in handleSubmit, the component becomes 'uncontrolled'
    return (
        <>
            <div ref={ref} onClick={() => console.log(ref)}>
                useRef
            </div>
            <form onSubmit={handleSubmit}>
                <label>
                    Number:
                    <input
                        name="name"
                        type="text"
                        value={name}
                        onChange={e => {
                            setName(e.target.value);
                        }}
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
            <h3>The squared number is </h3>
        </>
    );
});

export default UseRef;
