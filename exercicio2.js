let n=Number(prompt("Digite um numero:"));
let fat = 1;
for(let i= n; i> 0; i--) {
 fat = fat * i;  }
    document.write(`${n} = ${fat}<br>`);
