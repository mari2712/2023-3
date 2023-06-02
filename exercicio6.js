let n=Number(prompt("Digite um numero:"));
v=n;
binario="";
while (v>0){
    binario=(v % 2) + binario;
    v=Math.floor(v/2);

}
document.write(`O numero binario é ${binario}`);