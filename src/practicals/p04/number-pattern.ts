// Write your code below
export{};
let args = process.argv.slice(2);
let input = Number(args[0]);

if(input <=0  || isNaN(input)){
    // console.log("Invalid input");
    process.exit();
}
let n = input;
for(let i =0;i<input;i++){
    for(let j = n-1;j>0;j--){
        process.stdout.write("a");
    }
    for(let k =n-1;k> 0;k--){
        let l = n;
        l -= k;
        process.stdout.write(String(l));
        l = input;
    }
    n-=1;
    process.stdout.write("\n");
}