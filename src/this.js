/**
 * AUTHOR: Shi-Hao Hong
 * Identify the result of 'this' based on the context provided
 */

/*
  SHOE FUNCTIONS: Look at the object and determine what 'this' is pointing at
*/ 

var SHOE_ASSIGNMENT = {
  FIX_ME: 'wrong answer',
  WINDOW: 'window',
  OBJECT: 'object'
};

var shoes = {
  brand: "Nike",
  someFunc: function(){
    console.log(this);
  }
};
/*
  "this" points to anything on the left of the dot/bracket while dealing with
  the shoe object
  e.g shoes.someFunc(), this points to the entire shoe object.
*/

var shoeFunc1 =  SHOE_ASSIGNMENT.OBJECT; 

var shoes2 = {
  brand: 'Adidas',
  someFunc: function() {
    var closure = () => {
      console.log(this);
    };
    return closure();
  }
};
/*
  Since we are using es6 syntax, this is pointing still to the context at the left
  of the dot/bracket.
*/

var shoeFunc2 = SHOE_ASSIGNMENT.OBJECT;

var shoes3 = {
  brand: "Puma",
  someFunc: function(){
    var closure = function(){
      console.log(this);
    };
    return closure();
  }
};
/*
  Over here, this refers to the global object because it's an anonymous function that
  has no params pointing to an exact object.
*/

var shoeFunc3 = SHOE_ASSIGNMENT.WINDOW;

var shoes4 = {
  brand: "Puma",
  someFunc: function(){
    var self = this;
    var closure = function(){
      console.log(self);
    };
    return closure();
  }
};
/*
  Over here, this refers to the object at the left of the dot since it's in the scope of
  someFunc and that returns the closure which refers to it.
*/

var shoeFunc4 = SHOE_ASSIGNMENT.OBJECT;

/*
  COLOR FUNCTIONS: Look at the commented function and determine what is 'this' would point at if the function were called
*/ 

var FRUIT_ASSIGNMENT = {
  FIX_ME: 'wrong answer',
  APPLE: 'apple',
  ORANGE: 'orange',
  PEAR: 'pear',
  MANGO: 'mango',
  WINDOW: 'window'
};

var fn = function(one, two) {
  console.log(this, one, two);
};

var apple = {};
var orange = {};
var pear = {};
var mango = {};

apple.method = fn;
apple.method();
/*
  this - points to the oject "apple" which consists of the anonymous fn only
*/
var fruitFunc1 = FRUIT_ASSIGNMENT.APPLE;

fn(orange, pear);
/*
  this - points to the window object since there's no object to the left of the dot.
*/
var fruitFunc2 = FRUIT_ASSIGNMENT.WINDOW;

fn.call(apple, orange, pear);
/*
  this - points to the "apple" object because call overrides application of this using the
  left side of the dot.
*/
var fruitFunc3 = FRUIT_ASSIGNMENT.APPLE;

apple.method.call(mango, orange, pear);
/*
  this - points to the mango object again because of use of the call method.
*/
var fruitFunc4 = FRUIT_ASSIGNMENT.MANGO;

setTimeout(fn, 1000);
/*
  this - points to the global window object. it's not assigned to any object on the cb.
*/
var fruitFunc5 = FRUIT_ASSIGNMENT.WINDOW;

setTimeout(apple.method, 1000);
/*
  this - assigned to the global object still. setTimeout cannot get the context of this
  in the cb
*/
var fruitFunc6 = FRUIT_ASSIGNMENT.WINDOW;

setTimeout(function() {
  apple.method(orange, pear);
});
/*
  this - assigned to the apple object. It's the one at the left of the dot on runtime.
*/
var fruitFunc7 = FRUIT_ASSIGNMENT.APPLE;