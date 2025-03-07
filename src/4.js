
function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

function generateRandomCode() {
    const code = [];
    for (let i = 0; i < 5; i++) {
        code.push(getRandomNumber(10));
    }
    return code.join("");
}

console.log(generateRandomCode());