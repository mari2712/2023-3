alert(`Digite as idades. Para encerrar digite "0"!`);
let idade;
let id=0;
let ida=0;
document.write(`Idades Informadas:<br>`);
for(;;){
    idade= Number(prompt("Digite a idade:"));
    if(idade !== 0){
        if(idade>=18){
       id+=idade;
       ida++;
        }
    }
    else{
        break;

    }
    document.write(`${idade}<br>`);
}
document.write("<p>");
let media= id/ida;
document.write(`Soma ${id}<br>`);
document.write(`Media ${media.toFixed(2)}`);