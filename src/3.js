
function getRandomJSCode() {
  const code = `
    // Get a random number between 1 and 10
    let num = Math.floor(Math.random() * 10) + 1;
    
    // Print the number to the console
    console.log(num);
    
    // Check if the number is even or odd
    if (num % 2 === 0) {
      console.log("The number is even");
    } else {
      console.log("The number is odd");
    }
  `;
  
  return code;
}