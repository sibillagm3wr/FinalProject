 function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getRandomColor() {
    var colors = ["#FF69B4", "#FFFF00", "#008000", "#0000FF", "#8A2BE2"];
    return colors[getRandomNumber(0, colors.length - 1)];
}
function getRandomBoolean() {
    return Math.random() >= 0.5;
}
console.log(getRandomNumber(1, 6));
console.log(getRandomColor());
console.log(getRandomBoolean());