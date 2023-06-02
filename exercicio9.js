let n=Number(prompt("Digite os numeros para a sequencia:"));
let a11= 1;
let a12= 1;
document.write(`Sequencia <br>`);
for(let i =1; i<=n; i++){
document.write(`${a11}, ${a12}`);
a11+=a12;
a12+=a11;
}