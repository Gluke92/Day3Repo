'use strict';

// function createMyObject() { 
//   return {
//     foo: 'bar',
//     answerToUniverse: 42,
//     'olly olly': 'oxen free',
//     sayHello : function() {
//       return `hello`; 
//     }
//   }; 
// }

// /* From here down, you are not expected to 
//    understand.... for now :)  
   
   
//    Nothing to see here!
   
// */

// (function testCreateMyObject() {
//   var obj = createMyObject();
//   if (typeof obj !== 'object') {
//     console.error('ERROR: `createMyObject` must return an object');
//     return false;
//   }
//   var expectedKeys = ['foo', 'answerToUniverse', 'olly olly', 'sayHello'];
//   expectedKeys.forEach(function (key) {
//     if (!(key in obj)) {
//       console.error('ERROR: Missing a key for ' + key);
//       return false;
//     }
//   });
//   if (obj.foo !== 'bar') {
//     console.error('ERROR: Value for `foo` should be \'bar\' but was ' + obj.foo);
//     return false;
//   }
//   if (obj.answerToUniverse !== 42) {
//     console.error(
//       'ERROR: Value for `answerToUniverse` should be 42 but was ' +
//             obj.answerToUniverse
//     );
//     return false;
//   }
//   if (obj['olly olly'] !== 'oxen free') {
//     console.error(
//       'ERROR: Value for `\'olly olly\'` should be \'oxen free\' but was ' +
//             obj['olly olly']
//     );
//     return false;
//   }
//   if (!(typeof obj.sayHello === 'function' && obj.sayHello() === 'hello')) {
//     console.error(
//       'ERROR: Value for `sayHello` must be a function that returns the string \'hello\''
//     );
//     return false;
//   }
//   console.log('SUCCESS: Your function works!');
// })();



// //Problem 2

// function updateObject(obj) {
//   obj.foo = 'foo';
//   obj.bar = 'bar';
//   obj.bizz = 'bizz';
//   obj.bang = 'bang';
//   return obj;
// }



// /* From here down, you are not expected to 
//    understand.... for now :)  
   
   
//    Nothing to see here!
   
// */

// (function testUpdateObject() {
//   var oldObj = {
//     cats: 'cats',
//     dogs: 'dogs',
//   };
//   var newObj = updateObject(oldObj);
//   if (typeof newObj !== 'object') {
//     console.error('ERROR: `createMyObject` must return an object');
//     return false;
//   }
//   ['foo', 'bar', 'bizz', 'bang'].forEach(function (key) {
//     if (!(key in newObj)) {
//       console.error('ERROR: `' + key + '` not in object returned by `updateObject`');
//       return false;
//     }
//   });
//   ['foo', 'bar', 'bizz', 'bang'].forEach(function (key) {
//     if (newObj[key] !== key) {
//       console.error('ERROR: `' + key + '` should be "' + key + '" but was ' + newObj[key]);
//       return false;
//     }
//   });
//   if (!(newObj.cats === 'cats' && newObj.dogs === 'dogs')) {
//     console.error('ERROR: your function doesn\'t preserve existing key/value pairs');
//     return false;
//   }
//   console.log('SUCCESS: `updateObject` works correctly!');

// })();

// //Problem 3

// function personMaker() {
//   var person = {
//     firstName: 'Paul',
//     lastName: 'Jones',
//     // replace `null` with a function that uses self reference to return
//     // full name
//     fullName: function() {
//       return `${this.firstName} ${this.lastName}`;
//     },
//   };
//   return person;
// }

// /* From here down, you are not expected to 
//    understand.... for now :)  
   
   
//    Nothing to see here!
   
// */

// (function testPersonMaker() {
//   var person = personMaker();
//   if (typeof person !== 'object') {
//     console.error('ERROR: `personMaker` must return an object');
//     return false;
//   }
//   if (typeof person.fullName !== 'function') {
//     console.error('ERROR: `fullName` must be a method');
//     return false;
//   }
//   if (person.fullName() !== 'Paul Jones') {
//     console.error(
//       'ERROR: The value for `fullName` should be "Paul Jones" but was ' +
//       person.fullName()
//     );
//     return false;
//   }
//   person.firstName = 'Lisa';
//   person.lastName = 'Simpson';
//   if (person.fullName() !== 'Lisa Simpson') {
//     console.error(
//       '`personMaker` is not using self reference correctly. ' +
//       'When firstName set to "Lisa" and lastName set to "Simpson", ' +
//       'should return "Lisa Simpson" but returned ' +
//       person.fullName()
//     );
//   }
//   console.log('SUCCESS: `updateObject` works correctly!');
// })();


// // Problem 4

// function keyDeleter(obj) {
//   delete obj.foo;
//   delete obj.bar;
//   return obj;
// }

// var sampleObj = {
//   foo: 'foo',
//   bar: 'bar',
//   bizz: 'bizz',
//   bang: 'bang',
// };

// /* From here down, you are not expected to 
//    understand.... for now :)  
   
   
//    Nothing to see here!
   
// */

// (function testKeyDeleter() {
//   var obj = keyDeleter({
//     foo: 'foo',
//     bar: 'bar',
//     bizz: 'bizz',
//     bang: 'bang',
//   });

//   if (typeof obj !== 'object') {
//     console.error('ERROR: `keyDeleter` must be return an object');
//     return false;
//   }
//   ['foo', 'bar'].forEach(function (key) {
//     if (key in obj) {
//       console.error('`keyDeleter` did not delete the key for ' + key);
//       return false;
//     }
//   });
//   ['bizz', 'bang'].forEach(function (key) {
//     if (!(key in obj && obj[key] === key)) {
//       console.error('`keyDeleter` is deleting keys other than `foo` and `bar`');
//       return false;
//     }
//   });
//   console.log('SUCCESS: `keyDeleter` works correctly!');
// })();

// //Problem 5 

// function makeStudentsReport(data) {
//   const newArray = [];

//   data.forEach(function(i) {
//     newArray.push(`${i.name}: ${i.grade}`);
//   });

//   return newArray;

// //   Object.keys(data).forEach(function(name) {
// //     console.log(`${this.name}: ${this.grade}`);
// //   });
// }

// const testData = [{
//   name: 'Jane Doe',
//   grade: 'A'
// },
// {
//   name: 'John Dough',
//   grade: 'B'
// },
// {
//   name: 'Jill Do',
//   grade: 'A'
// },
// ];

// makeStudentsReport(testData);

// /* From here down, you are not expected to 
//    understand.... for now :)  
   
//    Nothing to see here!
   
// */

// // tests

// function testIt() {
//   const testData = [{
//     name: 'Jane Doe',
//     grade: 'A'
//   },
//   {
//     name: 'John Dough',
//     grade: 'B'
//   },
//   {
//     name: 'Jill Do',
//     grade: 'A'
//   },
//   ];

//   const expectations = ['Jane Doe: A', 'John Dough: B', 'Jill Do: A'];

//   const results = makeStudentsReport(testData);

//   if (!(results && results instanceof Array)) {
//     console.error('FAILURE: `makeStudentsReport` must return an array');
//     return;
//   }
//   if (results.length !== testData.length) {
//     console.error(
//       'FAILURE: test data had length of ' +
//       testData.length +
//       ' but `makeStudentsReport` returned array of length ' +
//       results.length
//     );
//     return;
//   }
//   for (let i = 0; i < expectations.length; i++) {
//     let expect = expectations[i];
//     if (!results.find(function (item) {
//       return item === expect;
//     })) {
//       console.error(
//         'FAILURE: `makeStudentsReport` is not ' + 'producing expected strings'
//       );
//       return;
//     }
//   }
//   console.log('SUCCESS: `makeStudentsReport` is working');
// }

// testIt();

// // ENROLL IN SUMMER SCHOOL
// const studentData = [
//   {
//     name: 'Tim',
//     status: 'Current student',
//     course: 'Biology',
//   },
//   {
//     name: 'Sue',
//     status: 'Withdrawn',
//     course: 'Mathematics',
//   },
//   {
//     name: 'Liz',
//     status: 'On leave',
//     course: 'Computer science',
//   },
// ];

// function enrollInSummerSchool(students) {
//   // your code here
//   // console.log(students);
//   students.forEach(element => {
//     // console.log(element.status);
//     element.status = 'In Summer school';
//   });  
//   return students;
// }

// var testData = [
//   {
//     name: 'Burt',
//     status: 'Playing hooky',
//     course: 'Biology',
//   },
//   {
//     name: 'Melanie',
//     status: 'Sick',
//     course: 'Mathematics',
//   },
//   {
//     name: 'Leonard',
//     status: 'AWOL',
//     course: 'Computer science',
//   },
// ];
// enrollInSummerSchool(testData);
// console.log(enrollInSummerSchool(testData));

// /* From here down, you are not expected to understand.... for now :)
//   Nothing to see here!

// */

// // tests
// function testIt() {
//   var testData = [
//     {
//       name: 'Burt',
//       status: 'Playing hooky',
//       course: 'Biology',
//     },
//     {
//       name: 'Melanie',
//       status: 'Sick',
//       course: 'Mathematics',
//     },
//     {
//       name: 'Leonard',
//       status: 'AWOL',
//       course: 'Computer science',
//     },
//   ];

//   var results = enrollInSummerSchool(testData);

//   if (!(results && results instanceof Array)) {
//     console.error('FAILURE: `enrollSummerSchool` must return an array');
//     return;
//   }
//   var result = testData.every(function(student) {
//     var match = results.find(function(_student) {
//       return (
//         _student.name === student.name &&
//         _student.course === student.course &&
//         _student.status.toLowerCase() === 'in summer school'
//       );
//     });
//     return match !== undefined;
//   });
//   if (!result) {
//     console.error(
//       'FAILURE: `enrollSummerSchool` should return ' +
//         'original key/value pairs for each student, and ' +
//         'update `status` to "In Summer school": ' +
//         JSON.stringify(results)
//     );
//   } else {
//     console.info('SUCCESS: `enrollSummerSchool` is working');
//   }
// }

// testIt();

// you can pass in `scratchData` to test out `findByid`
// your function

// ID EXERCISE
// function findById(items, idNum) {
//   // your code here
//   // console.log(items[idNum - 1]);
//   return items[idNum - 1];
  
// }

// //

// function testIt() {
//   const testData = [
//     { id: 1, foo: 'bar' },
//     { id: 2, foo: 'bizz' },
//     { id: 3, bang: 'boo' },
//   ];
//   const result = findById(testData, 3);
//   if (!(result && result !== null && typeof result === 'object')) {
//     console.error('`findById` must return an object');
//     return;
//   }
//   if (result.id !== 3) {
//     console.error(
//       'Asked for item with id of `3` but got back one with id of ' + result.id
//     );
//     return;
//   }
//   if (result.bang !== 'boo') {
//     console.error(
//       'Expected all key/value pairs from target object to be returned'
//     );
//     return;
//   }
//   console.log('SUCCESS: `findByid` is working');
// }

// testIt();

// VALIDATE OBJECT KEYS
// running the function with `objectA` and `expectedKeys`
// should return `true`
const objectA = {
  id: 2,
  name: 'Jane Doe',
  age: 34,
  city: 'Chicago',
};

// running the function with `objectB` and `expectedKeys`
// should return `false`
const objectB = {
  id: 3,
  age: 33,
  city: 'Peoria',
};

const expectedKeys = ['id', 'name', 'age', 'city'];

function validateKeys(object, expectedKeys) {
  let count = 0;
  for (let key in object) {
    expectedKeys.forEach(element => {
      if (key === element) {
        count++;
      }
    });
  }
  if (count === expectedKeys.length) {
    return true;
  } else {
    return false;
  }
}
// validateKeys(objectA, expectedKeys);
console.log(validateKeys(objectB, expectedKeys));

/* From here down, you are not expected to 
   understand.... for now :)  
   
   
   Nothing to see here!
   
*/
// const objectA = {
//   id: 2,
//   name: 'Jane Doe',
//   age: 34,
//   city: 'Chicago',
// };

// const objectB = {
//   id: 3,
//   age: 33,
//   city: 'Peoria',
// };

// const objectC = {
//   id: 9,
//   name: 'Billy Bear',
//   age: 62,
//   city: 'Milwaukee',
//   status: 'paused',
// };

// const objectD = {
//   foo: 2,
//   bar: 'Jane Doe',
//   bizz: 34,
//   bang: 'Chicago',
// };

// const expectedKeys = ['id', 'name', 'age', 'city'];


// function testIt() {
//   const objectA = {
//     id: 2,
//     name: 'Jane Doe',
//     age: 34,
//     city: 'Chicago',
//   };

//   const objectB = {
//     id: 3,
//     age: 33,
//     city: 'Peoria',
//   };

//   const objectC = {
//     id: 9,
//     name: 'Billy Bear',
//     age: 62,
//     city: 'Milwaukee',
//     status: 'paused',
//   };

//   const objectD = {
//     foo: 2,
//     bar: 'Jane Doe',
//     bizz: 34,
//     bang: 'Chicago',
//   };

//   const expectedKeys = ['id', 'name', 'age', 'city'];

//   if (typeof validateKeys(objectA, expectedKeys) !== 'boolean') {
//     console.error('FAILURE: validateKeys should return a boolean value');
//     return;
//   }

//   if (!validateKeys(objectA, expectedKeys)) {
//     console.error(
//       `FAILURE: running validateKeys with the following object and keys
//       should return true but returned false:
//       Object: ${JSON.stringify(objectA)}
//       Expected keys: ${expectedKeys}`
//     );
//     return;
//   }

//   if (validateKeys(objectB, expectedKeys)) {
//     console.error(
//       `FAILURE: running validateKeys with the following object and keys
//       should return false but returned true:
//       Object: ${JSON.stringify(objectB)}
//       Expected keys: ${expectedKeys}`
//     );
//     return;
//   }

//   if (validateKeys(objectC, expectedKeys)) {
//     console.error(
//       `FAILURE: running validateKeys with the following object and keys
//       should return false but returned true:
//       Object: ${JSON.stringify(objectC)}
//       Expected keys: ${expectedKeys}`
//     );
//     return;
//   }

//   if (validateKeys(objectD, expectedKeys)) {
//     console.error(
//       `FAILURE: running validateKeys with the following object and keys
//       should return false but returned true:
//       Object: ${JSON.stringify(objectD)}
//       Expected keys: ${expectedKeys}`
//     );
//     return;
//   }

//   console.log('SUCCESS: validateKeys is working');
// }

// testIt();


// Afternoon Problem set

// Problem 1

// 1. Create an object called loaf using an object initializer({}) with two properties: flour, which should be set to 300 
//and water which should be set to 210.

// 2. Use console.log to print the flour and water properties.

// 3. Add an empty method to the loaf object called hydration.

// 4. Fill in the body of the method to
// return the hydration of the loaf(the water divided by the flour multiplied by 100).
// 5. Call the hydration method and use console.log to print the result.

const loaf = {
  flour: 300,
  water: 210,
  hydration: function() {
    return (loaf.water / loaf.flour) * 100;
  }
}; 

console.log(loaf.hydration());

// Problem 2

// Create an object with five properties: foo, bar, fum, quux, and spam.
// Give each property a unique value of your choosing.
// Loop over the object using
// for... in
// Use console.log to show each property name and its associated value.

const fiveProp = {
  foo: 20,
  bar: 'stuff',
  fum: 'moe',
  quux: 'xuuq',
  spam: 'egg'
}

for (let k in fiveProp) {
  console.log(`The name is ${k} and I hold ${fiveProp[k]}`);
}

// Problem 3

const hobbitEats = {
  meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
};

console.log(hobbitEats.meals[3]);

// Problem 4

// Create 3 - 5 objects, each with a name and a jobTitle.Use people you know, or characters from fiction, or your own inventions.
// Store these objects in an array.
// Iterate over the array and use console.log to show each person 's job title and name.

const harryPotter= {
  name: 'Harry',
  title: 'Auror'
}

const hermioneGranger = {
  name: 'Hermione',
  title: 'Headmaster',
  boss: 'Harry'
}

const ronWeasley = {
  name: 'Ron',
  title: 'Redhead',
  boss: 'Harry'
}

const hogwarts = [];

hogwarts.push(harryPotter, hermioneGranger, ronWeasley);
// Problem 5
for (let k in hogwarts) { 
  if ( hogwarts[k].boss === undefined){
    console.log(`${hogwarts[k].title} ${hogwarts[k].name}  doesn't report to anybody.`);
  }
  console.log(`${hogwarts[k].title} ${hogwarts[k].name} reports to ${hogwarts[k].boss}`);
}







