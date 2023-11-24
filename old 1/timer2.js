const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');


stdin.on('data', (key) => {
  let delay
  if (key === '\u0003') {
    process.stdout.write("Thanks for using me, ciao! \n");
    process.exit();
  }
  if(key.match(/\d/g)){
    process.stdout.write(`setting timer for ${key} seconds...\n`);
    delay = key * 1000
    setTimeout(() => {
      process.stdout.write('\x07');
    }, delay); 
  }
  if(key.match(/[a-zA-Z]/g)){
    process.stdout.write(`uh oh! Not a number we can process :(\n`);
  }
});

