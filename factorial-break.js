let fact = 1;
let i = 1;

buclei: while (true) {
    fact = fact * i;
    i++;
        if (i === 10) {
            console.log(`El factorial de 10 es: ${fact}`);
            break buclei;
        }
}
