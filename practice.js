//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //Answer To make functions more versatile using context.

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //Answer Implicit - context is not explicit but we do give "this" an object that it can imply for the funcion. What is left of the dot.
      //Explicit - we explicitly tell the function what we want "this" to be. Done with call, bind, and apply.
      //Global/Window - when the above two rules fail, the function assigns "this" to the global or window object.
      //New - used with constructor functions when we are creating a new object, the function will apply it's output onto whatever object we are creating.

  // 3) What is the difference between call and apply?

      //Answer In apply parameters are passed into the function as an array.

  // 4) What does .bind do?

      //Answer Bind creates a new function with whatever we pass in with bind as the value for "this".


//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

var user = {
  username: "himynameismark",
  email: "markhoppus@blink182.com",
  getUsername: function() {
    return this.username;
  }
}    //Code Here
user.getUsername();
//Now, invoke the getUsername method and verify you got the username of the object and not anything else.


//Next Problem


// Write a constructor function, including method definitions, which will make the following function invocations function properly.
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.move = 10;
  this.moveCar = function() {
    return this.move += 10;
  }
}
  //Function Invocations Here

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

//Hint, you'll need to add a move property, with a starting value of zero, and write a moveCar function which will increment the move property by 10. The move property will be added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.



//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

//Note(no tests)
var priusYear = getYear.bind(prius);
priusYear();
var mustangYear = getYear.bind(mustang);  //Code Here
mustangYear();

//New Problem

var myUser = {
 username: 'iliketurtles',
 age: 13,
 email: 'iliketurtles@gmail.com'
};

var getMyUsername = function() {
 return this.username;
};

var userName = getMyUsername.call(myUser); //Fix this
// userName()
//Above you're given an object, and  a function. What will the getMyUsername function return?
//Note(no tests)
  //Answer Here - It will return the username property of whatever we give it for context. If we were to invoke it using myUser we would get 'iliketurtles'.

//In the example above, what is the 'this keyword' bound to when getMyUsername runs?

  //Answer Here - It isn't "bound" to anything yet, so it would be bound to the global/window object.


//Fix the getMyUsername invocation (stored in the userName variable, at the bottom of the above code) so that userName will be equal to 'iliketurtles'.
