//1)----------Напишите функцию, которая принимает в себя строку(параметр) и убирает из неё все пробелы. (возвращает строку без пробелов)
// "    hello my friends   " --> "hellomyfriends"
function removeSpaces(str) {
    return str.replace(/\s/g,'');
    
}
const strWithSpaces = 'hello my friends';
const strWithoutSpaces = removeSpaces(strWithSpaces);
console.log(strWithoutSpaces);      

//2)----------Напишите функцию, которая принимает массив и возвращает его последний элемент
function lastElement(array){
    if(array.length===0){
        return undefined;
    }   else{
        return array[array.length -1]
    }
}
const array = [true,"send",false,7,8,"dead"];
const element = lastElement(array);
console.log(element);

//3)----------Напишите функцию, которая принимает два массива, соединяет их и возвращает
function mergeArrays(arr1,arr2){
    return arr1.concat(arr2);
}
const array1 = [2,4,1];
const array2 = ["mom","dad","sis"];
const arrays = mergeArrays(array1,array2);
console.log(arrays);

//4)----------Напишите функцию, которая принимает в себя строку и делает первую букву заглавной
// Например: 'привет' --> 'Привет'
function firstLetter(str){
    if(str.length === 0){
      return str;  
    }else{
       return  str[0].toUpperCase() + str.slice(1);
    }
}
const str = "hello";
const string = firstLetter(str);
console.log(string);