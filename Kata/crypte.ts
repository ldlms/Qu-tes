const message = "hello world";


function cryptage(message:string):string{

    let messageTab = message.toLowerCase().split('');
    let messagecrypte = messageTab.map(char => {
        let charCode = char.charCodeAt(0);
        if(charCode >= 97 && charCode <= 122){
            return String.fromCharCode(((charCode - 97 + 3) % 26) + 97);
        }else{
            return char;
        }
    });
    return messagecrypte.join('');
}

console.log(cryptage(message));