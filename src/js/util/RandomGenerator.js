
export default function getRandomNumber(digit, MIN, MAX) {
    
    let arr =  [];

    let i = 0;
    
    while(i < digit) {
        const number = Math.floor(Math.random() * (MAX + 1 - MIN) + MIN);
        if(arr.indexOf(number) === -1) {
            arr.push(number); 
            i++
        }
    }
  
    return arr;
    
}