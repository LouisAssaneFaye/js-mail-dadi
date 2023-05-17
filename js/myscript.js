let min = 1;
let max = 6;
let HumanValue= Math.floor(Math.random() * (max - min + 1) + min);
console.log(HumanValue);
let ComputerValue= Math.floor(Math.random() * (max - min + 1) + min);
console.log(ComputerValue);

if ( HumanValue > ComputerValue ){
    console.log('Ha vinto umano');
} else if ( HumanValue < ComputerValue ){
    console.log('Ha vinto il computer');
} else {
    console.log('Computer ed umano hanno pareggiato');
}
