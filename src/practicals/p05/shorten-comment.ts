const comment = "TypeScript is a strongly typed programming language"

export function shortenComment(comment: string): string {
  // Write your code below
  let tmp:string[] = [];
  let short = comment.split(" ");
  let n =0;
  // console.log(short);
  for(let i = 0;i < short.length;i++){
    if(short[i].length >= 5 && short[i].length <= 10){
      tmp[n] = String(short[i]);
    }
    n+=1;
    
}
  if(tmp.length === 0){
    return "";
  } 

let a1 = tmp.filter(function (e) {
    return e; // Returns only the truthy values
});

// console.log("Updated Array: ", a1);
  return a1.join(" ");
}
// let out:string = shortenComment(comment);
// console.log(out);