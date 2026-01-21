// Write your code below
export{};
let args = process.argv.slice(2);
let input = Number(args[0]);

if(input <=0  || isNaN(input)){
    // console.log("Invalid input");
    process.exit(1);
}

for(let i = 1;i<=input;i++){
    if(i%3 === 0&& i%5 === 0){
        console.log("FizzBuzz");
    }else if(i%3===0){
        console.log("Fizz");

    }else if(i%5 === 0){
        console.log("Buzz");
    }else{
        console.log(String(i));
    }
}