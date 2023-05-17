let min = 1;
let max = 6;
let HumanValue= Math.floor(Math.random() * (max - min + 1) + min);
console.log(HumanValue);
document.getElementById('valore-umano').innerHTML = HumanValue ;
let ComputerValue= Math.floor(Math.random() * (max - min + 1) + min);
console.log(ComputerValue);
document.getElementById('valore-computer').innerHTML = ComputerValue ;

if ( HumanValue > ComputerValue ){
    console.log('Ha vinto umano');
    document.getElementById('conclusione').innerHTML = 'Ha vinto umano';
} else if ( HumanValue < ComputerValue ){
    console.log('Ha vinto il computer');
    document.getElementById('conclusione').innerHTML = 'Ha vinto il computer';
} else {
    console.log('Computer ed umano hanno pareggiato');
    document.getElementById('conclusione').innerHTML = 'Computer ed umano hanno pareggiato';
}


