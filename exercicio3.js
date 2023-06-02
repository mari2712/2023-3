let deposito=Number(prompt("Digite o deposito inicial:"));
let taxa=Number(prompt("Digite a taxa da poupança:"));
let juros=0;
let juros_total= 0;
taxa=taxa/100;
let saldo = deposito;


for(let i = 1; i <=24; i++){
    juros = saldo * taxa;
    juros_total=juros_total+juros;
    saldo = saldo + juros;
document.write(` O saldo no mes ${i} = R$ ${saldo.toFixed(2)}<br>`);
}
document.write(` O juros total no periodo é R$ ${juros_total.toFixed(2)}<br>`);
