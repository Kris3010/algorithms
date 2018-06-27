function reverseAString(str: string): string {
 let reversedString = '';
 
 for (let i = str.length -1; i >=0 ;i--){
  reversedString += str[i];

 }
return reversedString;
  
}

console.log(reverseAString('hello'));
console.log(reverseAString('Howdy'));