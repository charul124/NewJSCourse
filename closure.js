// object literals
//     can also initialise through object.create

//     object literals are created in the key:value pairs
//     objects can also have other objects inside them
//     const JsUser = {
//         name : "Charul",
//         "Full Name" : "Charul Srinivas",
//         country : "India",
//         isLoggedIn : true,
//         lastLogin : ["Monday", "Wednesday"]
//     }

//     //this is how we can access the values
//     console.log(JsUser.country);
//     console.log(JsUser["Full Name"]);

//     JsUser.isLoggedIn = false;
//     console.log(JsUser.isLoggedIn);

//     JsUser.greeting = function(){
//         console.log("Hello Everyone!");
//     }

//     console.log(JsUser.greeting());

//     // we can use string interpulation
//     JsUser.greetingto = function(){
//         console.log(`Hello ${this.name}`);
//     }
//     console.log(JsUser.greetingto());

//     JsUser.id = "5123";
//     console.log(JsUser);
    
//     const obj1 = {1 : "a", 2 : "b"};
//     const obj2 = {3 : "c", 4 : "d"};

//     const obj3 = {...obj1, ...obj2}; //spread operator
//     console.log(obj3);
//     console.log(Object.keys(JsUser));
//     console.log(Object.values(JsUser));
//     console.log(Object.entries(JsUser));

//     //we can also have multiple objects inside one array


//     // getName();	// can be accessed
// 	// console.log(x);    // outputs undefined
// 	// var x = 7;
// 	// console.log(x);
// 	// function getName(){
// 	// 	console.log("Hello");
//     //     console.log(x);
// 	// }
//     // getName();

//     var a = 10;
//     function one(){
//         var a = 100;
//         console.log(a);
//         two();
//         function two(){
//             var a = 200;
//             console.log(a);
//         }
//     }
//     console.log(a);
//     one();
    

//     console.log(a);
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     console.log(a);
//     console.log(b);
//     console.log(c);

//     var getName = ()  =>  {
//     Console.log("Hello Charul");
//     }  

//     let marbles = prompt("which colour marbles do you have?", "Red");
//     let bag = {
//         [marbles] : 20,
//     };
//     console.log(bag.Red);
//     console.log(bag[marbles]);

//     let user = {
//         name : "Charul",
//         age : 10,
//         "+49": "Germany",
//         "+41": "Switzerland",
//         "+44": "Great Britain",
//         // ..,
//         "+1": "USA",
//     };

//     for(let key in user){
//         console.log(key);
//         // console.log(+key); //for numbers 
//         console.log(user[key]);
//     }

//     let obj = {
//     };
//     function isEmpty(obj) {
//         for (let key in obj) {
//         // if the loop has started, there is a property
//         return false;
//         }
//     return true;
//     }
//     console.log(isEmpty(obj));
    

//     Usage of This 
//     let user1 = {
//         name : "Charul",
//         age : 10,
//     };

//     let user2 = {
//         name : "John",
//         age: 20,
//     };
//     user1.sayHi = sayHi;
//     user2.sayHi = sayHi;
//     function sayHi(){
//         console.log("Hello!", this.name);
//         // console.log(this);    // this will give undefined
        
//     }
    
//     user1.sayHi();
//     user2.sayHi();

//     let calculator = {
//     sum() {
//         return this.a + this.b;
//     },

//     mul() {
//         return this.a * this.b;
//     },

//     read() {
//         this.a = +prompt('a?', 0);
//         this.b = +prompt('b?', 0);
//     }
//     };

//     calculator.read();
//     alert( calculator.sum() );
//     alert( calculator.mul() );



//     function User(name){
//     this.name = name;
//     this.age = 10;
//     this.isLoggedin = true;

//     this.sayBye = function(){
//         console.log("Bye I am", this.name,"!");
//     };
//     }
//     let customer = new User("Charul");
//     console.log(customer.name);
//     console.log(customer.age);
//     console.log(customer.isLoggedin); 
//     customer.sayBye();
    
//     let map = new Map();

//     map.set('1', 'str1');
//     map.set(1, 'num1'); 
//     map.set(true, 'bool1');
//     console.log(map.get(1));
//     console.log(map.size());
//     Maps can also store objects as keys
//     for iteration over maps we use For...of loop only 
//     sets are used if we do not need duplicates


    //Closures
    // function x(){
    //     var a = 7;
    //     function y(){
    //         console.log(a);
    //     }
    //     a = 100;
    //     return y;
    // }
    // var z = x();
    // console.log(z);
    // z();
    // function bind together with its lexical environment
    // Closure : functions that refer to independent variables
    // function along with its lexical scope forms the closure
    
    function z(){
        var a = 100;
        console.log(a);
        return function y(){
            console.log(a);
        }
    }
    var s = z();
    s();
    console.log(s);
    
