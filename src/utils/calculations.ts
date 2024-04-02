export const tipForEach = (price: number, tipAmount:number, people: number) => {
    let total = (price * tipAmount) / people;
    let rounded = Math.round(total * 100) / 100;
    return rounded;
}

export const totalForEach = (price: number, tipAmount:number, people:number) => {
    let tip = (price * tipAmount);
    let total = (tip + price)/ people;
    let rounded = Math.round(total * 100) / 100;
    return rounded;
}