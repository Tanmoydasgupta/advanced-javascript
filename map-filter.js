numbers = [1,3,4,5,3,5];

const square =element => element* element;
const square = x => x * x;

const result =numbers.map(function(element){
    return element * element;
})

                //Simplified

const result = numbers.map(x=> x * x);
console.log(result);



const bigger =numbers.filter(x => x>5);
console.log(bigger);