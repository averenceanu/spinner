let delay = 100; 
const increment = 200; 
let symbolsArray = ["|", "/", "-", "\ ", "|", "/", "-", "|", "\n"]

for (let symbol of symbolsArray){
  setTimeout(() => {
    process.stdout.write(`\r\ ${symbol}  `);
  },delay);
  delay += increment;
};

