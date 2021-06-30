const numbers = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];

numbers.forEach((value, index) => {
    if (isFinite(value)) console.log(`Angka ${value} NOT infinity`);
    else console.log(`Angka ${value} infinity`);
});