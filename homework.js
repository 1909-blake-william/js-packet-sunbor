// Javascript Homework
// Due next Friday Morning
// -----------------------------------------------------------------------------------
// PART I
//
// Create a single Javascript file called packet.js to answer these questions.
// Please put the question itself as a comment above each answer.
// -----------------------------------------------------------------------------------
//
function testDriver(){
    //set to onload
    //1
    let result1 = document.createElement('p');
    result1.innerText = fib(11);
    document.body.appendChild(result1);

    //2
    let testArray = [5, 3, 2, 4, 1, 7, 10, 8, 9];
    let result2 = document.createElement('p');
    result2.innerText = bubbleSort(testArray);
    document.body.appendChild(result2);

    //3
    let result3 = document.createElement('p');
    result3.innerText = reverseStr('abcdefg');
    document.body.appendChild(result3);

    //4
    let result4 = document.createElement('p');
    result4.innerText = factorial(6);
    document.body.appendChild(result4);

    //5
    let result5 = document.createElement('p');
    result5.innerText = subString("abcdefghijklmnopqrstuvwxyz", 4, 5);
    document.body.appendChild(result5);

    //6
    let result6 = document.createElement('p');
    result6.innerText = isEven(7);
    document.body.appendChild(result6);

    //7
    let result7 = document.createElement('p');
    result7.innerText = isPalindrome('abcdefg');
    document.body.appendChild(result7);

    //9
    let theseBoots = {color: 'brown', size: 10, material: 'leather'};
    console.log('9')
    traverseObject(theseBoots);

    //10
    testArray = [1, 2, 3, 4, 5, 6, 7];
    console.log('10');
    deleteElement(testArray);

    //11
    testArray = [1, 2, 3, 4, 5, 6, 7];
    console.log('11');
    spliceElement(testArray);
}
// 1. Fibonacci
// Define function: fib(n)
// Return the nth number in the fibonacci sequence.
function fib(n){
    if(n === 0 || n === 1){
        return n;
    }
    else{
        let thisTerm = fib(n-1) + fib(n-2);
        return thisTerm;
    }
}


// 2. Bubble Sort
// Define function: bubbleSort(numArray)
// Use the bubble sort algorithm to sort the array.
// Return the sorted array.
function bubbleSort(numArray){
    let arrLen = numArray.length;
    for(let i=0; i<arrLen; i++){
        for(let j=0; j<arrLen-1; j++){
            if(numArray[j] > numArray[j+1]){
                let temp = numArray[j];
                numArray[j] = numArray[j+1];
                numArray[j+1] = temp;
            }
        }
    }
    return numArray;
}


// 3. Reverse String
// Define function: reverseStr(someStr)
// Reverse and return the String.
function reverseStr(someStr){
    let newString = '';
    for(let i=someStr.length - 1; i>=0; i--){
        newString += someStr.charAt(i);
    }
    return newString;
}


// 4. Factorial
// Define function: factorial(someNum)
// Use recursion to compute and return the factorial of someNum.
function factorial(someNum){
    if(someNum <= 1){
        return 1;
    }
    else{
        return someNum*factorial(someNum-1);
    }
}


// 5. Substring
// Define function substring(someStr, length, offset)
// Return the substring contained between offset and (offset + length) inclusively.
// If incorrect input is entered, use the alert function and describe why the input was incorrect.
function subString(someStr, length, offset){
    //return error if
    //offset is outside of string
    //offset plus length is outside of string
    //length is negative
    //string is not a string
    //offset and length are not integers
    if(typeof someStr !== 'string'){
        alert("enter a valid string");
        return null;
    }
    if(typeof length === 'number' && typeof offset === 'number'){
        if(!Number.isInteger(length) || !Number.isInteger(offset)){
            alert('length and offset must be integers');
            return null;
        }
    }
    else{
        alert('length and offset must be numbers');
        return null;
    }
    if(offset < 0 || offset > someStr.length){
        alert('offset must be inside the string');
        return null;
    }
    if(offset+length > someStr.length){
        alert('offset + length must be within the string');
        return null;
    }
    if(length < 0){
        alert('length must be greater than 0');
        return null;
    }
    let newString = "";
    for(let i=offset; i<=offset+length; i++){
        newString += someStr.charAt(i);
    }
    return newString;
}


// 6. Even Number
// Define function: isEven(someNum)
// Return true if even, false if odd.
// Do not use % operator.
function isEven(someNum){
    let dividedNum = someNum / 2;
    return Number.isInteger(dividedNum);
}


// 7. Palindrome
// Define function isPalindrome(someStr)
// Return true if someStr is a palindrome, otherwise return false
function isPalindrome(someStr){
    let reversedStr = reverseStr(someStr);
    return reversedStr === someStr;
}

// 8. Shapes
// Define function: printShape(shape, height, character)
// shape is a String and is either "Square", "Triangle", "Diamond".
// height is a Number and is the height of the shape. Assume the number is odd.
// character is a String that represents the contents of the shape. Assume this String contains just one character.
// Use a switch statement to determine which shape was passed in.
// Use the console.log function to print the desired shape.
// Example for printShape("Square", 3, "%");
// %%%
// %%%
// %%%
// Example for printShape("Triangle", 3, "$");
// $
// $$
// $$$
// Example for printShape("Diamond", 5, "*");
//   *
//  ***
// *****
//  ***
//   *
function printShape(shape, height, character){
    let row;
    switch(shape){
        case "Square":
            console.log("square");
            //make a row
            row = '';
            for(let j=0; j<height; j++){
            for(let i=0; i<height; i++){
                row += character;
            }
            row += '\n';
        }
        console.log(row);
            //write out rows
            for(let i=0; i<height; i++){
                document.writeln(row);
            }
            break;
        case "Triangle":
                console.log("triangle");
                row = '';
                for(let i=0; i<height; i++){
                    for(let j=0; j<=i; j++){
                        row+=character;
                    }
                    row += '\n';
                }
                console.log(row);
                break;
        case "Diamond":
                console.log("diamond");
                let width;
                row = '';
                for(let i=1; i<=(height-1)/2; i++){
                    width = 2*i-1;
                    for(let j=1; j<=(height-width)/2; j++){
                        row+=' ';
                    }
                    for(let j=1; j<=-1+2*i; j++){
                        row+=character;
                    }
                    for(let j=1; j<=(height-width)/2; j++){
                        row+=' ';
                    }
                    row += '\n';
                }
                for(let i=1; i<=height; i++){
                    row+=character;
                }
                row += '\n';
                for(let i=(height-1)/2; i>=1; i--){
                    width = 2*i-1;
                    for(let j=1; j<=(height-width)/2; j++){
                        row+=' ';
                    }
                    for(let j=1; j<=-1+2*i; j++){
                        row+=character;
                    }
                    for(let j=1; j<=(height-width)/2; j++){
                        row+=' ';
                    }
                    row += '\n';
                }
                console.log(row);
                break;
        default:
            console.log("bvjwjvskew");
            break;
    }
    return 0;
}


// 9. Object literal
// Define function traverseObject(someObj)
// Print every property and it's value.
function traverseObject(someObj){
    //getarray
    let propertyNames = Object.getOwnPropertyNames(someObj);
    for(let i=0; i<propertyNames.length; i++){
        console.log(propertyNames[i] + ': ' + someObj[propertyNames[[i]]]);
    }
    return 0;
}

// 10. Delete Element
// Define function deleteElement(someArr)
// Print length
// Delete the third element in the array.
// Print length
// The lengths should be the same.
function deleteElement(someArr){
    console.log(someArr.length);
    console.log(someArr);
    someArr[2] = null;
    console.log(someArr.length);
    console.log(someArr);
}

// 11. Splice Element
// Define function spliceElement(someArr)
// Print length
// Splice the third element in the array.
// Print length
// The lengths should be one less than the original length.
function spliceElement(someArr){
    console.log(someArr.length);
    console.log(someArr);
    someArr.splice(2, 1);
    console.log(someArr.length);
    console.log(someArr);
}


// 12. Defining an object using a constructor
// Define a function Person(name, age)
// The following line should set a Person object to the variable john:
// 	let john = new Person("John", 30);
function Person(name, age){
    this.name = name;
    this.age = age;
}


// 13. Defining an object using an object literal
// Define function getPerson(name, age)
// The following line should set a Person object to the variable john:
// 	let john = getPerson("John", 30);
function getPerson(name, age){
    let newPerson = {
        name: name,
        age: age
    }
    return newPerson;
}