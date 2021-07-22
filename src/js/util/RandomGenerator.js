
export default function getRandomNumber(digit) {
    let MAX = 46;
    let MIN = 0;

    let arr =  [];

    for(let i = 0; i < digit; i++) {
        const number = Math.floor(Math.random() * (MAX - MIN) + MIN);
        arr.push(number);
    }
  
    return arr;
    
}