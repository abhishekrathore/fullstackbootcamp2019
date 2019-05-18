# ES6

## ES6 Variable Types

## *let*   vs  *var*


```javascript
var name = "abhishek";    //old style

let name = "abhishek";   //new style
```

Difference between **let** and **var**


**1. Difference in Scope**

In javascript except for functions no other block create a local scope for variable with **var** declaration



```javascript
if(true){
var name  = "abhishek";
}

console.log(name);  // var is available outside the block {} 

```

The let however limits the scope of variable

```javascript
if(true){
let name  = "abhishek";
}

console.log(name);  // let is not available outside the block {} 


```

**2. Error on Re-declaring**

**var** don't throw an error on re-declaring variable wherease **let** does. This is helpful in big codes where you accidently redeclare a variable.



```javascript



if(true){
var name  = "abhishek";
}

console.log(name);  // var is available outside the block {} 


if(true){
let lastname  = "youstart";
}

console.log(lastname);  // let is not available outside the block {} 



var age = 20;
var age = 30;

let city = "delhi";
let city = "mumbai";   // throws error



```

    ... ...
    abhishek
    ... ...
    ReferenceError: lastname is not defined
    SyntaxError: Identifier 'city' has already been declared


## const

As name suggests const is used to declare constant values and immutable variables.


```javascript
const name = "abhishek";
name = "ajay";   // throws error

```

also for objects and arrays, you can't assign a new value. This is quite helpful knowing the array/objects should not be re-assigned mostly.


```javascript
const person = {name:"abhishek"};
person = {};  // throws error

```



```javascript


const name = "abhishek";
name = "ajay";   // throws error

const person = {name:"abhishek"};
person = {};  // throws error


person.name = "abhishek";
console.log(person);  // allowed to modify the same variable
```

    SyntaxError: Identifier 'name' has already been declared
    SyntaxError: Identifier 'person' has already been declared
    TypeError: Assignment to constant variable.
    { name: 'abhishek' }


## Arrow functions

Arrow functions are used for specially anonymous/inline functions which have no name. Arrow functions are syntactically shorter than conventional functions.



```javascript
function getValue(){
    return value;
}


let getValue = ()=>{
  return value;
}

```

When you just have only return value in function you can even omit the { } block 


```javascript
let getValue = () => value;
```

Arrow functions are quite helpful in cases where you have to write a short-inline function



```javascript
setTimeout(()=>{console.log("hi")},2000);
```





```javascript


let getValue = ()=>{
  return 5;
}

console.log(getValue());

let getDouble = (number) =>  number*2;


console.log(getDouble(2));



```

    
    5
    
    4
    


## Default Parameters in Functions

A function can have default parameter value in ES6. Deafult params must be at the end of arguments list in functions.



```javascript
function weight(mass, g=10){
 return mass*g;
}


weight(50); //this will return 500 with 10 as default value of g

weight(10,9.8); // this will retunr 98 with 9.8 as value of g

```






```javascript
 

function weight(mass, g=10){
 return mass*g;
}


console.log(weight(50)); 

console.log(weight(10,9.8)); 

```

    ... ...
    500
    
    98
    


# Lab Task 1

1.  If you have an array like 

    ```javascript
      const numbers = [5, 7, 2];
    ```

    Check, which operations do work on it, and which don't:
    a. Push, pop ?
    b. Assigning a new array to `numbers`?

2. Create an arrow function for finding `area of a circle`.The default value of `radius` will be `1`.

```javascript
  area_of_circle(radius);  //uses radius as value
  area_of_circle()          // uses default value
```


## for ..of  loop

for of loop is a better way of writing loops in Javascript when you have to iterate over every element in loop

```javascript
for (variable of iterable) {
  statement
}
```

```javascript
const numbers = [2,5,8,7,9]

for(let num of numbers){
        console.log(num)
    }

    // 2
    // 5
    // 8
    // 7
    // 9

```    



## Rest parameters

Rest parameters in a functions help us to provide indefinite number of arguments in a functions. Suppose you want to make a sum function like :


```javascript
sum(x1,x2,x3...xn); //  a function with indefinite number of paramaters 
```

To make such function you can use rest paramters (...x). Here x can be accessed inside function as an array of arguments passed.

```javascript
function sum(...x){
// do the logic
}; 


sum(x1,x2,x3);    // x will have [x1,x2,x3]

```
This can be helpful in many situation where we don't know number of argument from start. 

Note : You must have rest parameter as last argument in function.



```javascript
function sum (y,...x){
   // 1st argument will go in y. 
}
```





```javascript


function sum(...x){
    console.log(x);
    let total =0;
    for(let el of x){
        total+=el;
    }
    return total;
}

console.log(sum(1,2,3,4));
```

    ... ... ... ..... ..... ... ...
    [ 1, 2, 3, 4 ]
    
    10
    
# Lab Task 2

1.  Create a arrow function named `average` to find average of `n` number of integers. `n` can vary. Use Rest parameters

    ```javascript
      average(1,2,3,4,5)  // returns 3
      average(2,3,5,10)   // returns 4
    ```


## Spread Operators

Spread operators do the reverse of rest parameters. If you have to put all elements of an array or object one-by-one - you can use spread operator instead. See the below example to understand


```javascript
let cities =  ["jaipur","delhi","mumbai"];

console.log(...cities);  //style1

console.log("jaipur","delhi","mumbai");  //style2

// both will result in same output

```

Spread operator can also be used to handle object properties and making a new object



```javascript
var kid ={name:"johny",age:3};

var student = {...kid, course:"angular"};
```







```javascript


var cities =  ["jaipur","delhi","mumbai"];

console.log(...cities);  //style1

console.log("jaipur","delhi","mumbai");  //style2

var kid ={name:"johny",age:3};

var student = {...kid, course:"angular"};

console.log(student);

```

    jaipur delhi mumbai
    jaipur delhi mumbai
    { name: 'johny', age: 3, course: 'angular' }


    

## Destructuring Assignments


We can use destructuring assignment to easily pickup value from objects and arrays. This style is very useful to get desired value without reassigning thing individually.




```javascript
const person = {name:"abhishek",age:30,city:"delhi"}
const {name,age,city} = person;  // destructered assignment
console.log(name,age,city);

```

You can even rename the variables :


```javascript
const person = {name:"abhishek",age:30,city:"delhi"}
const {name:personname,age:personage,city:personcity} = person;  // destructered assignment
console.log(personname,personage,personcity);

```

We can also destructure an array



```javascript
var cities = ["delhi","jaipur","mumbai"];

const [a,,b] = cities;

console.log(a,b);

```









```javascript


const person = {name:"abhishek",age:30,city:"delhi"}
const {name,age,city} = person;  // destructered assignment
console.log(name,age,city);
const {name:personname,age:personage,city:personcity} = person;  // destructered assignment
console.log(personname,personage,personcity);



var cities = ["delhi","jaipur","mumbai"];
const [a,,b] = cities;
console.log(a,b);



```

   
    abhishek 30 delhi
    abhishek 30 delhi
    delhi mumbai



# Lab Task 3

1.  Destructure `person` object to print value of `name`,`age` and `city` properties as `Name`, `Age` and `City`.

    ```javascript
      const person = {
           name: "john",
           age: 34,
           city: "jaipur"
        };
    
     console.log(Name,Age,City);  

    ```
2. Create a new object `superhero` by extending properties of `person` given in above question. `superhero` must have a `superpower` property.

```javascript
console.log(superhero)    // {name:'john', age: 34, city:'jaipur', superpower:'thunderbolts'}
 
```



## Template  Literals

Template literals are a good way to create dynamic string without using complex concatenation structures. They are enclode in backticks(``) rather than any quotes.




```javascript
var country = "India";
var str = `This is my ${country}`;
console.log(str);

```

As you can see $() hold the variable part and you don't need any special concatenation to inject these.

$() can also hold any Javascript expression which can be evaluated and returns a string value.



```javascript
var a = 4;
var b = 5;
var str = `Total sum is  ${a+b}`;
console.log(str);

```





```javascript


var country = "India";
var str = `This is my ${country}`;
console.log(str);


var x1 = 4;
var x2 = 5;
var str = `Total sum is  ${x1+x2}`;
console.log(str);
```

    This is my India
    Total sum is  9


## Object Literals

The Object literals are used to write object definitions in short way.



```javascript


var name="abhishek";
var age=30;
var city="Jaipur";

var person = {name:name,age:age,city:city};

// same thing can be written as

var person ={name,age,city};

```




```javascript

var name="abhishek";
var age=30;
var city="delhi";

var person = {name:name,age:age,city:city};

// same thing can be written as

var personShort ={name,age,city};

console.log(person,personShort);
```
    { name: 'abhishek', age: 30, city: 'delhi' } { name: 'abhishek', age: 30, city: 'delhi' }


## Using Class in Javascript

JS is not class based inheritance language, but to match with existing standards of OOP ES6 provide us a new way to declare objects with 'class'



```javascript
class People {
constructor(name) {
      this.name = name;
    }
    getName() {
      return this.name;
    }
    setName(name) {
      this.name = name;
    }
}

var p1 = new People('abhishek');
var p2 = new People('ajay');
```





```javascript

  class People {
  constructor(name) {
        this.name = name;
      }
      getName() {
        return this.name;
      }
      setName(name) {
        this.name = name;
      }
  }

  var p1 = new People('abhishek');
  var p2 = new People('ajay');

  console.log(p1,p2);

  p1.setName("john");

  console.log(p1.getName());
  console.log(p2.getName());
```

## Import and Export in Javascript


You can export a function or class or object using new **export** keyword

```javascript

function sum(a,b){
	return a+b;
}

function diff(a,b){
	return a-b;
}

export {sum,diff}


```

and get these using **import** keyword in the new file


```javascript


import {sum,diff} from './sample_js_lib.js';

console.log(sum(4,5),diff(4,5));

```


# Lab Task 4

1.  Create a class named `Animal` with methods `setVoice` and `getVoice` and property `voice`. Default `voice` value should be "talk". Otherwise one can set the voice using `setVoice` method. Also they can get the voice using `getVoice` method. You should be able to do the following :

    ```javascript
       
       const wolf = new Animal("howl");
       wolf.getVoice();   // should return 'howl'
       wolf.setVoice('bark');
       wolf.getVoice();   // should return 'bark'


       const human = new Animal();
       wolf.getVoice();   // should return 'talk' as default value

    ```
2. Create a new file name `animal.js` and put above code for `Animal` class in this file. Export `Animal` class in this file.  Now `import` `animal.js` file in your main JS file where you are solving problems. (e.g. app.js)

```javascript
   // Don't write Animal class in this file. That should be written in a different file.
   
   import {Animal} from './Animal.js';
   const lion = new Animal("roar");
 
```
