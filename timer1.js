let input = process.argv.slice(2)

for (let i = 0; i < input.length; i ++){
  delay = input[i] * 1000
  setTimeout(() => {
    process.stdout.write('\x07');
  }, delay);  
}

