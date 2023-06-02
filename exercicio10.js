alert(`Digite as temperaturas. Para encerrar digite "0"!`);
let mTempo=nu11;
let minTempo=nu11;
let sTempo=0;
let pTempo=0;
for(;;){
  let tempo= Number(prompt(`Digite uma temperatura ou "0" para encerrar:`));
 if(tempo!=0){
    sTempo+=tempo;
    pTempo++;
    document.write(tempo+"<br>");
    if (tempo>mTempo){
        mTempo=tempo;
    }
    if(tempo<minTempo){
        minTempo=tempo;
    }
 }
else{
    break;
}
}
document.write(`Maior temperatura:${mTempo}<br>`);
document.write(`Menor temperatura:${minTempo}<br>`);
document.write(`Media das temperaturas:${sTempo/pTempo}`);




