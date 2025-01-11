function example(value: string | number) {
    if (typeof value === "string") {
        // Here, TypeScript knows that `value` is a string
        console.log(value.toUpperCase()); // OK
    } else {
        // Here, TypeScript knows that `value` is a number
        console.log(value.toFixed(2)); // OK
    }
}

example("foo");
example(5);
