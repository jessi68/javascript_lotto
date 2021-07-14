
export default function getRandomNumber(digit) {
    let MAX = 9;
    let MIN = 0;

    let str = "";

    for(let i = 0; i < digit; i++) {
        str += getRandomNumber() * (MAX - MIN) + MIN;
    }

    return str;
    
}