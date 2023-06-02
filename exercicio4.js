let n=Number(prompt("Digite um numero:"));
let e_primo=true;
for(let i = 2; i <=(n/2); i++){
    if (n%i==0){
    e_primo=false;
    
 }
    }
    if (e_primo && n >= 2){
        document.write(`${n} é primo`);
    }else{
        document.write(`${n} não é primo`);
    }