// Write your code below
let args = process.argv.slice(2);
let input = Number(args[0]);

const grade = (input:number):void=>{
    if(input <0 || input >100 || isNaN(input)){
        console.log("Invalid input");
        return;
    }
    
    if(input  >= 80){
        console.log("Grade is A");
    }else if(input >= 70){
        console.log("Grade is B");
    }
    else if(input >= 60){
        console.log("Grade is C");
    }
    else if(input >= 50){
        console.log("Grade is D");
    }
    else{
        console.log("Grade is F");
    }
}
grade(input);