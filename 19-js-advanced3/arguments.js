const sum = (a, b, ...rest) => {
    // console.log(arguments.length);
    // console.log(arguments);
    console.log(rest);
    let result = a + b;
    for (let i = 0; i < rest.length; i++) {
        result += rest[i];
    }
    return result;
}

let res = sum(2, 3, 5, 7);
console.log(`Result: ${res}`);
res = Math.min(5, 2, 8, 6, 1, 5, 7, 9, 3);
console.log(`Min: ${res}`)