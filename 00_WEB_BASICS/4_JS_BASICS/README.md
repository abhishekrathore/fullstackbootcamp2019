
JavaScript Basics [Slides](./JS.pdf)


# 1. Javascript  Data Types

## Types of variables in Javascript

To create a new variable your write **var** and name of variable. Variable names can be made up of numbers, letters, and **$** or **_** , but may not contain spaces or start with a number

Variable in Javascript are **Weakly Typed** and they don't have any strict types to be defined like **int**, **string** etc. However on assignment they dynamically change the data type accordingly. Let's declare some common types  of Javascript variables.


```javascript



//This is a comment in JS

var score = 100;          //Number

var average = 40.5;       //Floating number

var name = "sachin";      //String

var retired = true;      //Boolean


console.log(score);
console.log(average);
console.log(name);
console.log(retired);
console.log(score,average,name);  // Multiple console logs can be done using commas

```

    5
    
    2.5
    
    sachin
    true
    
    5 2.5 'sachin'



## `Undefined` Type

If you are declaring variable but not assigning them values, default value will be `undefined`. It is a special type in javascript.

```javascript

var myName;
```

Check the example below :


```javascript

 

var myName;

console.log(myName);
```

    undefined


## Dynamic Type Conversion

Variables in Javascript can be assigned to various data type without any errors. Example


```javascript

 var a = 5;         // assigned number
 a = "hello";       // now asssigned string
```

Also variable can dynamically change their types according to need.

```javascript

var a = 5;
var b = "hello";

console.log(a+b);  // this will output "5hello"

```

Check out some more example of such type conversions below :





```javascript



var a = 5;
a = "hello";
 
console.log(a);

var b = 6;

console.log(b+a);      // See + acting as concatnation and converting variable b to string

var c = "1"

console.log(b+c);       
console.log(b*c);        // c is converted to number

console.log(a*b);   // as string hello can not be converted to a number - Gives NaN (Not a Number) as output
```

    hello
    6hello
    61
    
    6
    
    NaN
    


## Basic Arithmetic Operations in Javascript


```javascript


var a = 5;
var b = 6;


var sum = a  + b;
var diff = a - b;
var product = a * b;
var division = a / b;
var modulus = a % b;


console.log("sum:",sum,"diff:",diff,"product:",product,"division:",division,"modulus:",modulus)  

sum++;

console.log(sum);  //increment

sum = sum + 2;

console.log(sum);

diff--;

console.log(diff);  //decrement

diff = diff -3;

console.log(diff);



```
```
    sum: 11 diff: -1 product: 30 division: 0.8333333333333334 modulus: 5
    12
    
    14
    
    -2
    
    -5
```    

## Functions

Functions in Javascript are similar to other languages but don't have a compulsory return value. Default return value is `undefined`

Function can be written in 2 different ways :

**functional style :**


```javascript

function sum(a,b){
  return a + b;
}
```


**variable style :**



```javascript

var sum = functions(a,b){
  return a + b;
}
```

Both are mostly identical in use but have minor diference in memory allocation. Both can be ran using same syntax :



```javascript

sum();
```



A function returns value and it can be assigned to a varible. Infollowing example `ret` will contain 9 as value :



```javascript

var ret = sum(4,5);
```

if you a function doesn't define the return value it returns `undefined`

```javascript

function speak(){
console.log("hello");
};

speak();   //this will return undefined
```







```javascript


function sum(a,b){
  return a + b;
}


var diff = function(a,b){
  return a - b;
}

var sumResult = sum(4,5);
var diffResult = diff(4,5);

console.log("sumResult:",sumResult,"diffResult:",diffResult);

function speak(){
   
    console.log("speak");    // this will print when function is called
}

var speakResult = speak();

console.log(speakResult);  // this will be undefined

```

  
    sumResult: 9 diffResult: -1
    ... ... ...
    speak
    undefined




### Lab Problem Set 1

* All problems must be in form of a JS function with input passed as arguments of the function.

1. Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.

```javascript

e.g.    area_of_triangle(5,6,7)

output : 14.69

```

2. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
 [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
Expected Output :
60°C is 140 °F
45°F is 7.222222222222222°C


```javascript

e.g.    c_to_f(60) returns 140
e.g.    f_to_c(45)  returns 7.222

```



# 2. Conditionals in JS

## If else :

If-else is used as standard style using conditions for **true** and **false**



```javascript

var number = 40;
if(number > 33){
   console.log("pass");
}
else{
   console.log("fail");
}
```

For more complex scenarios we can use **else if**


```javascript

var number = 40;
if(number < 33){
   console.log("fail");
}
else if(number>=33 && number<70){
   console.log("pass");
}
else{
   console.log("distinction");
}
```


## ternary operator (? :)

a quick way to judge value between two conditions. It is good to put it where you want to assign the output of if-else to some variable



```javascript

var number = 40;
var result = number > 33 ? 'pass':'fail';

console.log(number);
```


```javascript


var number = 72;

if( number < 30 ){
    console.log("fail");
}else if( number > 70 ){
    console.log("distinction");
}else if( number > 30 ){
    console.log("pass");
}

var result = number>30? "pass" : "fail" ;
  console.log(result);

```

## for loop

For loop is one the most used syntax in JS programing. It's structure is same as any other for loop in any other language

```javascript

for (step = 0; step < 5; step++) {
  // Runs 5 times, with values of step 0 through 4.
  console.log(step);
}

0
1
2
3
4
```


### Lab Problem Set 2



1. Write a JavaScript program to find the largest of three given integers.


```javascript

e.g.    max(1,2,5) returns 5


```


2. Write a JavaScript program to check if a given positive number is a multiple of 3 or a multiple of 7. 

```javascript

e.g.    factor(60) returns true
        factor(14) returns true
        factor(13) returns false


```

# 3. Strings

## *String* concatenations


```javascript


var country  = "India";
var capital = "Delhi";

var sentence = country + " is my country. " + capital + " is its captial.";

console.log(sentence);
```

    India is my country. Delhi is its captial.

## *String* Properties and Case Change


```javascript

var org = "Youstart";


// Using Index of chars to select chars

var firstLetter = org[0];
var length = org.length;
var lastLetter = org[length-1];


console.log(firstLetter);
console.log(length);
console.log(lastLetter);

//Uppercase and Lowercase in JS

var capitalText = org.toUpperCase();
var lowerText = org.toLowerCase();

console.log(capitalText);
console.log(lowerText);
```

    Y
    8
    
    t
    YOUSTART
    youstart


### Lab Problem Set 3


1. Write a JavaScript program to capitalize the first letter of each word of a given string.

```javascript

e.g. capitalize("we are the champions") returns "We Are The Champions"


```

2. ** It is found by comparing two DNA strands and counting how many of the nucleotides are different from their equivalent in the other string.Find out the difference in 2 strings. How many chars are different ?

```
GAGCCTACTAACGGGAT
CATCGTAATGACGGCCT
^ ^ ^  ^ ^    ^^

```

```javascript

DNA("GAGCCTACTAACGGGAT","CATCGTAATGACGGCCT") returns 7

```

7. Determine if a sentence is a pangram. A pangram (Greek: παν γράμμα, pan gramma, "every letter") is a sentence using every letter of the alphabet at least once. The best known English pangram is "The quick brown fox jumps over the lazy dog." The alphabet used is ASCII, and case insensitive, from 'a' to 'z' inclusively.

```javascript
pangram("The quick brown fox jumps over the lazy dog.") returns true
pangram("abcdefghijklmnopqrstuvwxyz") returns true
pangram("A normal sentence which doesnt have all chars") returns false
```


8. Determine if a word or phrase is an isogram.An isogram (also known as a "nonpattern word") is a word or phrase without a repeating letter. Examples of isograms:
`lumberjacks`
`background`
`downstream`
The word `isograms`, however, is not an isogram, because the s repeats.

```javascript
isogram("lumberjack") returns true
isogram("isograms") returns false

```

9. Convert a long phrase to its acronym. Help generate some jargon by writing a program that converts a long name like `Portable Network Graphics` to its acronym (PNG).

```javascript
acronym("Portable Network Graphics") returns "PNG"

```



# 4. Arrays


## *Arrays* : Poperties and Functions :

Arrays in Javascript have special properties :
- Can contain mixed data types
- Dynamic length  - no static limit of array

**properties** :
- ***length*** :returns length of the array


**functions** :

- ***push()*** - to add an element to end of an array . Return value of this is length of updated array.
- ***pop()*** - to remove an element from end of an array. Return value of this is deleted element.
- ***splice(index,number)*** - to remove **number** of element starting from **index**. Return value is deleted chunk of in array format. 
- ***reverse()*** - to reverse an array. Return value is  reversed array.
- ***indexOf(element)*** - to find index of first element found which matches element argument


All above functions are mutator functions and change the original array on which they are applied. Check out few examples:




```javascript


var cities = []; //blank array

var metros = ["delhi","jaipur","pune","bangalore"];

console.log("cities:",cities);
console.log("metros:",metros);

var len = metros.length;

console.log(len);


cities.push("New York");
console.log(cities);

cities.push("Chicago");
console.log(cities);

cities.pop();
console.log(cities);

cities.push("Denver","LA","Vegas","Paris","London");
console.log(cities);

cities.splice(1,2);
console.log(cities);



// Now checkout what are return values of these statements

var retValPush = cities.push("delhi");

console.log(retValPush);  // length of the updated array

var retValPop = cities.pop();

console.log(retValPop);  // deleted element of array


var retValSpl = cities.splice(1,2);

console.log(retValSpl);  // deleted chuck of array

var index = cities.indexOf("London")
console.log(index);   // returns 1 as index of "London"
```

```javascript  
  cities: []
  metros: [ 'delhi', 'jaipur', 'pune', 'bangalore' ]
  4
  
  [ 'New York' ]
  [ 'New York', 'Chicago' ]
  [ 'New York' ]
  [ 'New York', 'Denver', 'LA', 'Vegas', 'Paris', 'London' ]
  [ 'New York', 'Vegas', 'Paris', 'London' ]
  5
  
  delhi
  [ 'Vegas', 'Paris' ]

    
```
### Nested *Arrays*

Nested Arrays in JS are possible and easy to use using Indexes.



```javascript

var groups = [["sachin","rahul"],["virat","rohit","vijay"]]


groups[1][1]   //returns "rohit";

groups[1][2]    //returns "vijay";

groups[1][0] = "kohli";  //changes value of array "virat" to "kohli"
```




```javascript


var groups = [["sachin","rahul"],["virat","rohit","vijay"]]

console.log(groups);

console.log(groups[1][1]);   

console.log(groups[1][2]);   

groups[1][0] = "kohli"; 

console.log(groups);
```

### Lab Problem Set 4


1. Write a JavaScript program to test if a given array of integers contains 30 and 40.
2. Write a JavaScript program to swap the first and last elements of a given array of integers. The array length should be at least 1.
3. Write a JavaScript function to find the highest and lowest value in an array of integers.
4. Write a JavaScript function to calculate the sum of values in an array.


# 5. Objects in JS

## Objects 

Objects in Javascript are simple (key, value) pair collections :


```javascript

var person = {"name":"sachin"};
```

We can also declare an empty object and them keep on adding/modifying more and more key and values :



```
var person = {};
person.name = "sachin";   // adding a new property
person.age = 40;
person.mobile = [12132,123123]   
```
The above is called** dot operator** and can be used to set a key's value or get a key's value. 

**Getting Value :**


```javascript

var name = person.name;  
```

**Setting Value :**


```javascript

person.name = "rahul";  
```



We can even add more objects inside an object 

```javascript

var person = {};
person.name = "sachin";
person.mobile = {}    // nested level object

person.mobile.home = 1213123;
person.mobile.office = 1234233;
```



    { name: 'sachin', age: 40 }
    { name: 'sachin', mobile: { home: 1213123, office: 1234233 } }


## Delete property in JS Objects

We can delete properties from objects using **delete** operator



```javascript

delete person.name;  // this will remove name property from person object
```




```javascript



var player = {"name":"sachin","age":40}; 

console.log(player);

delete player.name;

console.log(player);
```

    { name: 'sachin', age: 40 }
    { age: 40 }


## Javascript Object as a Data storage

We can use JS objects as data storage for multiple records. Here is an example of record of 3 person in JS array. This kind of format is known as JSON. And is a worldwide data exchange format for most of web languages.



```javascript

[
  {
    "balance": "$1,025.60",
    "picture": "http://placehold.it/32x32",
    "age": 37,
    "eyeColor": "blue",
    "name": {
      "first": "Weeks",
      "last": "Steele"
    },
    "company": "KROG",
    "email": "weeks.steele@krog.net",
    "phone": "+1 (891) 411-2923",
    "address": "549 Strong Place, Muir, North Dakota, 5806"
  },
  {
    "balance": "$1,998.21",
    "picture": "http://placehold.it/32x32",
    "age": 26,
    "eyeColor": "blue",
    "name": {
      "first": "Ware",
      "last": "Sharp"
    },
    "company": "ZYTREK",
    "email": "ware.sharp@zytrek.co.uk",
    "phone": "+1 (809) 591-3842",
    "address": "386 Madison Street, Chical, North Carolina, 4447"
  },
  {
    "balance": "$2,313.87",
    "picture": "http://placehold.it/32x32",
    "age": 21,
    "eyeColor": "brown",
    "name": {
      "first": "Munoz",
      "last": "Hopper"
    },
    "company": "ECRATER",
    "email": "munoz.hopper@ecrater.ca",
    "phone": "+1 (800) 543-2646",
    "address": "958 Kathleen Court, Soudan, Palau, 5436"
  }]
```








```javascript



var records = [
  {
    "balance": "$1,025.60",
    "picture": "http://placehold.it/32x32",
    "age": 37,
    "eyeColor": "blue",
    "name": {
      "first": "Weeks",
      "last": "Steele"
    },
    "company": "KROG",
    "email": "weeks.steele@krog.net",
    "phone": "+1 (891) 411-2923",
    "address": "549 Strong Place, Muir, North Dakota, 5806"
  },
  {
    "balance": "$1,998.21",
    "picture": "http://placehold.it/32x32",
    "age": 26,
    "eyeColor": "blue",
    "name": {
      "first": "Ware",
      "last": "Sharp"
    },
    "company": "ZYTREK",
    "email": "ware.sharp@zytrek.co.uk",
    "phone": "+1 (809) 591-3842",
    "address": "386 Madison Street, Chical, North Carolina, 4447"
  },
  {
    "balance": "$2,313.87",
    "picture": "http://placehold.it/32x32",
    "age": 21,
    "eyeColor": "brown",
    "name": {
      "first": "Munoz",
      "last": "Hopper"
    },
    "company": "ECRATER",
    "email": "munoz.hopper@ecrater.ca",
    "phone": "+1 (800) 543-2646",
    "address": "958 Kathleen Court, Soudan, Palau, 5436"
  }]

console.log(records[0].name);  // Name of 1st record
console.log(records[0].name.first);  //First Name of 1st record
console.log(records[0].name.last);  //Last Name of 1st record

```

    { first: 'Weeks', last: 'Steele' }
    Weeks
    Steele



## Object access using Array style

You can access object in array style brackets also :



```javascript

var person = {};

person["name"]  = "abhishek";

var name = person["name"];

```

This convention has an added advantage that "name" or any other properties can be variable.


```javascript

var person = {};

var property = "name"

person[property]  = "abhishek";

var name = person[property];

```

This can be very helpful when you have a dynamic property use case


## Array and Objects are assigned by Reference:

Whenever you have a situation like

```javascript

//In Arrays


var cities = ["jaipur","delhi"];
var villages = cities;  // Now villages is exactly same reference as cities. They are pointing to same array

//In Objects

var person ={};
var otherPerson = person; // Now otherPerson is exactly same reference as person. If you change otherPerson, person will also change.

```



## Lab Problem Set 5

You have to create a **Shopping_Cart** array with following features :

- **addItem(itemName)** : this function should add string itemName to cart

- **removeItem(itemName)**:  this function should remove any item which matches itemName. *Hint : search for index of itemName and then remove it*

- **cartSize()** : returns size of cart in terms of number of cart Items.




```javascript



var shopping_cart= [];


function addItem(itemName){
   shopping_cart.push(itemName);
}


function removeItem(itemName){
   var index = shopping_cart.indexOf(itemName)
   shopping_cart.splice(index,1);

}

function cartSize(){
    return shopping_cart.length;
    
}

addItem("cake");
addItem("soap");
addItem("bread")

console.log(shopping_cart); //should show ["cake","soap","bread"]



removeItem("soap");

console.log(shopping_cart); //should show ["cake","bread"]


var len = cartSize();  //should return 1
console.log(len);

```

    ... ...
    ... ... ... ...
    ... ... ...
    [ 'cake', 'soap', 'bread' ]
    [ 'cake', 'bread' ]
    2
    


## Lab Problem Set 6

We have to create object called **person**:

We want to accomplish following :

- person should have a **name** property
- person should have an **age** property
- person should have a list of mobile numbers (**mobiles**)

Now create following functions :

- **getName()** : to return person's name

- **setName(newName)** : to change person's name to **newName**

- **getStatus()** : based on age one should get return value as  "*kid*",  "*teenager*", "*adult*" , "*old*". You can take limits as 10, 20, 60 for various status. Also a value of 0 -100 is only allowed. Else function will print "invalid age"

- **addMobile(mobileNumber)** : to add a new mobile number for this person

- **removeMobile(mobileNumber)** : to remove a  mobile number for this person

- **totalMobiles()** : to count mobile numbers for this person and return the count;





```javascript



var person = {};

person.name =  "abhishek";
person.age = 62;
person.mobiles = [123,345];

function getName(){
    return person.name;
}

function setName(name){
    person.name = name;
}

function getStatus(){
    var status = "invalid age";
    
    if(person.age>60 && person.age<=100){
        status = "old";
    }
    else if(person.age>20){
        status = "adult";
    }
    else if(person.age>10){
        status = "teenager";
    }
    else if(person.age>=0){
       status = "kid"; 
    }
    
    return status;
}

function addMobile(mobileNumber){
    person.mobiles.push(mobileNumber);
}

function removeMobile(mobileNumber){
    var index = person.mobiles.indexOf(mobileNumber)
    person.mobiles.splice(index,1);
}

function totalMobiles(mobileNumber){
    return person.mobiles.length;
}


var name = getName();  
console.log(name);

setName("sachin");
console.log(person);

console.log(getStatus());

addMobile(456);
console.log(person.mobiles);

removeMobile(123);
console.log(person.mobiles);

var count = totalMobiles();
console.log(count);



```
    abhishek
    { name: 'sachin', age: 62, mobiles: [ 123, 345 ] }
    old
    [ 123, 345, 456 ]
    
    [ 345, 456 ]
    
    2
    


## Lab Problem Set 7

In Lab Problem set 6 you have imlemented some function which only work for a object **person**. Now modify you functions in a way that you can do the following :


We have to create mulitple object with difference variable name like **person1**, **person2**,  **person3**:

We want to accomplish following :

- object should have a **name** property
- object should have an **age** property
- object should have a list of mobile numbers (**mobiles**)

Now create following functions which will pass **object** as any person :

- **getValue(object, prop)** : to return value of propertiy **prop** for person **object**

- **setValue(object, prop, propValue)** : to change proptery **prop** value to **propValue** for person **object**

- **getStatus(object)** : based on age one should get return value as  "*kid*",  "*teenager*", "*adult*" , "*old*". You can take limits as 10, 20, 60 for various status. Also a value of 0 -100 is only allowed. Else function will print "invalid age"

- **addMobile(object, mobileNumber)** : to add a new mobile number for this person passed in args

- **removeMobile(object, mobileNumber)** : to remove a  mobile number for this person passed in args

- **totalMobiles(object)** : to count mobile numbers for person pass as args and return the count;



# Miscellaneous [ Optional ]

## Math Library

JavaScript Math library is quite useful for frequently used math operations.

```javascript

Math.abs(-2)  // returns 2
Math.round(2.66) // returns 3
Math.floor(3.55) // return 3
Math.ceil(3.45) // returns 4
Math.round(x)  // returns the value of x rounded to its nearest integer
Math.E
Math.PI
Math.pow(2,3)  //returns the value of 2 to the power of 3 = 8
Math.sqrt(64);      // returns 8
Math.max(0, 150, 30, 20, -8, -200);  // returns 150
Math.random() // returns random value from 0 to 1.


```

## Timer Libaries

If you want to execute a function in JS after a time interval. You can use one of these functions.

```javascript

setTimeout(function(){
    console.log("delayed message")
}, 3000)   // function executes after 3 secs only once

```


```javascript

setInterval(function(){
    console.log("repeated message")
}, 3000)   // function executes after every 3 secs

```



## Equality Operator ( === vs ==)

We know that Javascript used  == for equality checks but this sometimes create bad results as its not a **strict equality** check

```javascript

var a  = "5";
var b = 5;

if(a==b){
    console.log("equal");
}

```
Above example will consider it equal. To check **strict equality** of types also one should use ===



```javascript

var a  = "5";
var b = 5;

if(a===b){
    console.log("equal");
}

```







```javascript

var a = 5;
var b ="5";

if (a == b){
    console.log("true");
} else{
    console.log("false");
}


if (a === b){
    console.log("true");
} else{
    console.log("false");
}
```

     true
     false


## Truthy and Falsy values

What happens if you check this


```javascript

var a = 5;

if(a){
    console.log("true");
}else{
   console.log("false");
}
```

This a shortcut way to check if a exists or not as 5 will give you **true** but *undefined* will give you **false**


Check out all examples to understand this



```javascript



function check(a){
    if(a){
        console.log(a+": true")
    } else{
        console.log(a+": false")
    }
}

var d;
check(5);
check(0);
check("0");
check("a");
check("");
check(d);
check({});
check([]);
check(" ");




```

    
    5: true
    0: false
    0: true
    a: true
    : false
    undefined: false
    [object Object]: true
    : true
    : true












## Escape chars

You can escape special chars like double quote in a string using \ (backslash)



```javascript

var sentence = "He was known as \"Master Blaster\". "
```



```javascript



var sentence = "He was known as \"Master Blaster\". "

console.log(sentence);
```

    He was known as "Master Blaster".

## Immutability of *Strings*

Strings are immutbale in a sense that you can't change indiviudal chars or part of string.



```javascript

var name = 'Youstart';

name[0] ="Z";

```

This code will have not change in **name** variable and it will remain same as before. But we can change whole string to new assigned value :

```javascript

name  = "Zoustart"
```




```javascript




var name = "Youstart";
console.log("name.0:", name[0]);

name[0] = "Z";
console.log("name:",name);

name = "Zoustart";
console.log(name);


```

## Checking Type of a Variable

In JS we can check type of variable via the **typeof** function. We can check that various data types are shown below :


```javascript



var name = "Abhishek";
var age = 25;
var avg = 2.55;
var flag = true;
var person = {name:"abhishek"};
var cities = ["Jaipur","Delhi"];
var city;



tName = typeof(name);
console.log(tName);
tAge = typeof(age);
console.log(tAge);
tAvg = typeof(avg);
console.log(tAvg);
tFlag = typeof(flag);
console.log(tFlag);
tPerson = typeof(person);
console.log(tPerson);
tCities = typeof(cities);
console.log(tCities);
tCity = typeof(city);
console.log(tCity);

```

    string
    number
    number
    boolean
    object
    object
    undefined


## Type Conversion

We know that JS can dynamically change the types. However, sometimes we need to change the types in a certain format.

### parseInt(String) - for converting string to integer


```javascript

var number = "5"
var i  = parseInt(number);
```



### toString() - for converting a variable to String. 


```javascript

var j = 5
var str  = j.toString();
```




```javascript



var num = "5"
var i  = parseInt(num);

console.log(i,typeof(i));

var j = 5
var str  = j.toString();

console.log(str, typeof(str));

```

    5 'number'
    5 string






## Additional Problems [optional]
1. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen. 

2. Write a JavaScript program to construct the following pattern, using a nested for loop.

```
*  
* *  
* * *  
* * * *  
* * * * *  
```


3. Write a JavaScript program to reverse the string ‘YoustartLabs’ by periodically removing one letter from the end of the string and attaching it to the front.

4. Write a JavaScript program to test if a given integer is greater than 15 return the given number, otherwise return 15
5. Write a JavaScript program to sort three numbers.
6. Write a JavaScript program to check if a given positive number is a multiple of 3 or a multiple of 7. 
7. Write a JavaScript program to determine whether a given year is a leap year.
8. Write a JavaScript program to calculate days left until next New year.
9. Write a JavaScript program to check if a given integer has an increasing digits sequence.
10. Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.
11. Write a JavaScript program to find a value which is nearest to 100 from two different given integer values.
12. Write a JavaScript program to check if the last digit of the three given positive integers is same.  
13. Write a JavaScript program to check from two given integers if either one is 8 or their sum or difference is 8.
14. Write a JavaScript program to find the types of a given angle- Acute, Right, Obtuse and Straight angle.
15. Write a JavaScript program to check if a point lies strictly inside a given circle.
16. Write a JavaScript function to test if a number is a power of 2. 
17. Write a JavaScript function to count the digits of an integer. 

## Problems related to data structure

18. Create a JSON data object for Facebook news feed, should have data for author name, author image, post content, list of likes, comments and share etc. You have to data in a way that you must be able to answer these :
```
  a. Check how many posts are there by a particular user in your feed ? 
  b. How many likes on 5th post ?
  c. Who are the users who liked 5th post ?
  d. Who is the First user to like 5th post ?
  e. How many users are there who have both commented and liked 5th post. Also show list of those users.
  f. Find out the person who has commented most on your feed. (In top 10 posts)
```
19. Create a JS object representing your facebook friendlist. And than perform these actions.

```
  a. Delete friends who have fake as first name. ( e.g fake singh)
  b. Add 2 more friends to your friendlist at a time.
  c. print all friends in your friendlist sorted by Name.
  d. print all friends in your friendlist sorted by Length of Name( # of chars)
  e. print initials of all your friends (Virat Kohli becomes VK)
  f. print only friends who have same first names
```


# Additional Resources for JS

* Complete JavaScript Book for Experts [Link](https://github.com/getify/You-Dont-Know-JS)
* Awesome Javascript Resources [Link](https://github.com/micromata/awesome-javascript-learning)
* More Practice problems in Basic JS [Here](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript)
* More Practice problems in Object and Array in JS [Here](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-data-structures)