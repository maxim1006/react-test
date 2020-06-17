export function getRandomIntInclusive(min: number, max: number) {
    const currentMin = Math.ceil(min);
    const currentMax = Math.floor(max);

    return (
        Math.floor(Math.random() * (currentMax - currentMin + 1)) + currentMin
    ); // The maximum is inclusive and the minimum is inclusive
}
