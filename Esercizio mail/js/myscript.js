const MailUtente = prompt("Type your email");
const listMail = ['emaila@outlook.it','emailb@outlook.it','emailc@outlook.it','emaild@outlook.it'];

let IncludedMail

for (let i = 0 ; i < listMail.length ; i = i + 1 ){
    IncludedMail = listMail[i];
    console.log(IncludedMail);
    if ( MailUtente === IncludedMail ) {
        console.log('è uguale alla mail inserita da utente');
        document.getElementById('conclusione').innerHTML = 'La tua mail rientra tra quelle registrate' ;
    } else {
        console.log('non è uguale alla mail inserita da utente');
    }

}

