const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result="";
    for (let i=0; i<expr.length ; i+=10){
        let expr_first=expr.substr(i,10);
        if (expr_first==='**********') result+=" ";
        else {
            let result_second="";
            for (let i=0; i<expr_first.length; i+=2){
                let expr_second=expr_first.substr(i,2);
                if (expr_second==='00') {

                }
                else if (expr_second==='10') result_second+=".";
                else if (expr_second==='11') result_second+='-';
            }
            result+=MORSE_TABLE[result_second]
        }
    }
    return result;

}

module.exports = {
    decode
}