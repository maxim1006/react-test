const arr: number[] = [1, 2, 3];

type stringOrNumber = string | number;
const arr1: stringOrNumber[] = [1, 2, 3, "234"];

function f([a, b]: number[]) {
    console.log(a, b);
}

f([1, 4]);
