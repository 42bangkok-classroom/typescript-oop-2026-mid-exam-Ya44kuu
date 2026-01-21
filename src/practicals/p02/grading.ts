// Write your code below
let args = process.argv.slice(2);
let input = Number(args[0]);

if(input <0 || input >100 || isNaN(input)){
    console.log("Invalid input");
    process.exit();
}

if(input  >= 80){
    console.log("A");
}else if(input >= 70){
    console.log("B");
}
else if(input >= 60){
    console.log("C");
}
else if(input >= 50){
    console.log("D");
}
else{
    console.log("F");
}