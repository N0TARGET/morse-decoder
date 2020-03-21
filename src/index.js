const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

const PADDING_FINISH_VALUE = '1';

function decode(expr) {
    let result = '';
    for (let i = 0; i < expr.length; i = i + 10) {
        let substring = expr.substring(i, i + 10);
        if (substring === '**********') {
            result = result + ' ';
            continue;
        }
        let value = substring.substring(substring.indexOf(PADDING_FINISH_VALUE));
        let mapped = map(value);
        result = result + MORSE_TABLE[mapped];
    }
    return result;
}

function map(value) {
    let result = '';
    for (let i = 0; i < value.length; i = i + 2) {
        let current = value.substring(i, i + 2);
        let mapped = current === '10' ? '.' : '-';
        result = result + mapped;
    }
    return result;
}

module.exports = {
    decode
}