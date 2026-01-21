interface Person {
  firstName?: string;
  lastName?: string;
  age?: number;
}

const persons: Person[] = [
  { firstName: "Somchai", lastName: "Jaidee", age: 30 },
  { firstName: "", lastName: "Test", age: 20 },
  { firstName: "Anan", lastName: "Sukjai", age: 25 },
  { firstName: "Somchai", lastName: "Dee", age: 25 },
  { firstName: "John", lastName: "Doe", age: 150 },
  { firstName: "Jane", lastName: "Smith", age: -5 },
  { lastName: "NoName", age: 40 }
];

const test = (input:any) =>{
  let err ="emty";
  if(!input || input <0 || input >100){
    return false;
  }
  return true;
}

export function sortPersons(persons: Person[]): Person[] {
  let tmp:Person[] = [];
  let n = 0;
  for(let i = 0;i<persons.length;i++){
    let per = persons[i];
    if( test(per.firstName)&&
    test(per.lastName)&&
    test(per.age)){
      tmp[n] = per;
      n+=1;
    }
  }
  const sortedKeys = Object.keys(tmp).sort();
  return tmp;
}
console.log(sortPersons(persons));

