
export default function getRandomNumber(digit) {
    let MAX = 46;
    let MIN = 0;

    let arr =  [];

    let i = 0;
    
    while(i < digit) {
        const number = Math.floor(Math.random() * (MAX - MIN) + MIN);
        if(arr.indexOf(number) === -1) {
            arr.push(number); 
            i++
        }
    }
  
    return arr;
    
}