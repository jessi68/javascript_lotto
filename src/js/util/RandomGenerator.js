
export default function getRandomNumber(digit) {
    let MAX = 10;
    let MIN = 0;

    let str = "";

    for(let i = 0; i < digit; i++) {
        const number = Math.floor(Math.random() * (MAX - MIN) + MIN);
        str += (number).toString();
    }
  
    return str;
    
}