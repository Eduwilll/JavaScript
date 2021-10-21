/* Multi linha de 
comentarios*/ 

/*Data Types:
undefined, null , boolean , string , symbol , number and object
 */

var meuNome = "Eduardo"; /*The most common variable. Can be reassigned but only accessed within a function. Variables
defined with var move to the top when code is executed.*/

meuNome = 8;

let nossoNome= "freeCodeCamp"; //Similar to const, however, let variable can be reassigned but not re-declared.

const pi = 3.14; //const é uma variavel que não pode e não deve ser mudada.

/*Storing values with Assignment operator*/

var a; //declarando uma variavel chamada a
var b = 2; //declarando uma variavel e atribuindo valor a ela.
console.log(a);//mostando valor de a antes da atribuicao, 
a = 7; // atribuindo valor a. Não foi necessário declarar a variavel porque ela ja tinha sido.
b = a; //atribuindo valor de a para o b;
console.log(a); //display informacao contido no console, como o valor de a;

/*Initializing Variables w/ assignment Operator*/
var a = 9; //variavel a é igual a 9

/* Uninitialized Variables*/
//initialize these three variables
var a = 5;
var b = 10;
var c = "i am a";
// do not change code below this line
a = a + 1;
b = b + 5;
c = c + " String!";

/*Case Sensitibity in Variables*/
//Declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;
// Assignments (Atribuiçoes)
studlyCapVar = 20;
properCamelCase = "A String";
titleCaseOver= 9000;

/*Adding Number*/
var sum = 10 + 10;
console.log(sum);

/*subtracting number*/
var difference = 45 -33;

/*multplication*/
var product = 8 * 10;

/*Dividing numbers */
var quotient = 66 / 33;

/*Incremening number*/
var myVar = 87;
myVar++;// agora myVar vale 88

/*Decrementing Number*/
var myVar= 11;
myVar--; //agora myVar bale 10

/*Decimal number*/
var decimal = 5.7;
var decimal = 0.0009;

/*Multiply decimals*/
var product = 2.0 * 2.5; //5

/*Divide Decimals*/
var quotient = 4.4 / 2.0; // 2.2

/*Finding a remainder*/
var remainder;
remainder = 11 % 3; // sobra 2

/*Compound Assingment with Augmented Addition*/
var a = 3;
var b = 17;
var c = 12;

a += 12;
b += 9;
c += 7;

/*Compound Assingment with Augmented Subtraction*/
var a = 3;
var b = 17;
var c = 12;

a -= 6;
b -= 5;
c -= 1;


/*Compound Assingment with Augmented multiplication*/
var a = 3;
var b = 17;
var c = 12;

a *= 5;
b *= 4;
c *= 8;

/*Compound Assingment with Augmented multiplication*/
var a = 3;
var b = 17;
var c = 12;

a /= 5;
b /= 4;
c /= 8;

/*Declare String Variables */
//exemple
var firstName = "Alan";
var lastName = "Turing";

var myFirstName = "Eduardo";
var myLastName = "Fabricio";

console.log(firstName+ " " + lastName)

/*Escaping literal Quotes in Strings*/
var myStr= "I am a  \"Double quoted\"String inside\"Double quotes\"";
console.log(myStr);

/*Quoting String with sigle quotes*/
var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

/*Escape Sequences in Strings */
/*******
CODE OUTPUT
\'   single quote
\"   double quote
\\   backslash
\n   newline
\r   carriage return
\t   tab
\b   backspace
\f   form feed
*/
var myStr = "FirstLine\n\t\\SecondLine\nThirdLine";

/*Concatenating Strings With Plus Operator*/
var ourStr = "I come first. " + "I come second.";

var myStr = "This is the start. " + "This is the end.";

/*Concatenating String with plus equals Operator */
var ourStr = "I come first. ";
ourStr += "i come second.";

var myStr = "This is the first sentence. ";
myStr += "This is the second sentence";

/*Construting strings with Variables */
var ourName = "freeCodeCamp";
var ourStr = "hello , our name is " + ourName + ", how are you ?";

var myName = "Eduardo";
var myStr = "Hello, my name is " + myName + ", how are you?";

/*Appending Variables  to  Strings */
//exemple
var anAdjective = "awesome!";
var ourStr = "freeCodeCamp is ";
ourStr += anAdjective;

var someAdjective = "worthwhile";
var myStr = "learning to is ";
myStr += someAdjective;

/*Find Length of string*/
//exemple
var firstNameLength = 0;
var firstName = "ada";

firstNameLength = firstName.length;

//setup
var lastNameLength = 0;
var lastName = "Lovelace";

lastNameLength = lastName.length;

/*Bracket notation to Find First character in String */
var firstLatterOfLastName = "";
var lastName = "Lovelace";

firstLatterOfLastName = lastName[0];

/* String Immutability */
var myStr = "Jello World";

myStr = "Hello World";

/*Bracket Notation to Find Nth Character in string*/
var firstName = "Ada";
var secondLatterOfFirstName = firstName[1];

var lastName = "Lovelace";

var thirdLatterOfLastName = lastName[2];

/*Bracket otation To find Last Character in String */
var firstName = "Ada";
var lastLatterOfFirstName = firstName[firstName.length-1];

var lastName = "Lovelace";
var thirdLastLatterOfLastName = lastName[lastName.length -1];

/* Bracket Notation to find Nth - to - Last Character in String*/
var firstName = "Ada";
var secondTolastLatterOfFirstName = firstName[firstName.length-2];

var lastName = "Lovelace";
var thirdToLastLatterOfLastName = lastName[lastName.length -1];

/*Word Blacks*/

function wordBlanks (myNoun, myAdjective , myVerb , myAdverb) {
    var result = "";
    result += "the " + myAdjective + " " + myNoun + " " + myVerb  + " to the store " + myAdverb;

    return result;
}

console.log(wordBlanks("dog", "big", "ran", "quickly"));
console.log(wordBlanks("bike", "slow", "flew", "slowly"))

/* Store Multiple Values with Arrays */
//Exemple
var ourArray = ["John",23];

var myArray = ["Eduardo", 24];

/*Nested Arrays */
var ourArray = [["the universe", 42], ["everything", 010101]];

var myArray = [["Ronaldo", 52],[" bilha muito no corinthias", 2020]];

/*Acess Array Data with Indexes*/
var ourArray = [50,60,70];
var ourData =  ourArray[0];//equals 50

var myArray = [50,60,70];
var myData = myArray[0];
console.log(myData)

/*Modify Array Data With Indexes*/
var ourArray = [15,64,99];
ourArray[1] = 45;

var myArray = [18,64,99];
myArray[1] = 45;
console.log(myArray)

/*Acess Multi-Dimensional Arrays with Indexes*/
var myArray = [[1,2,3],[4,5,6],[7,8,9],[[10,11,12],13,14]];

var myData = myArray[3][0][1];

console.log(myData);

/*Manipulate Arrays with push() */
var ourArray = ["Stimpson", "J", "cat"]
ourArray.push(["happy", "joy"]);

myArray = [["John",23], ["cat", 2]];
myArray.push(["happy", "joy"])
console.log(myArray);

/*Manipulate Array wih pop() */
var ourArray = [1,2,3];
var removedFromOurArray = ourArray.pop();

myArray = [["John", 23], ["cat", 2]];
var removedFromMyArray = myArray.pop();
console.log(myArray)
 
/*Manipulate Arrays with shift() */
var ourArray = [1,2,3];
var removedFromOurArray = ourArray.shift();

myArray = [["John", 23], ["cat", 2]];
var removedFromMyArray = myArray.shift();
console.log(myArray)

/*Shopping Lists*/
var myList = [["cereal", 3], ["milk" , 2], ["bananas", 3], ["juice", 2], ["eggs", 12]];
console.log(myList)

/*Write Reusable Code With Functions*/
function ourReusableFunction() {
    console.log("heyya, World!");
}

ourReusableFunction();

function reusableFunction() {
    console.log("hi world");
}

reusableFunction()

/* Passing Values to Functions With Arguments */
function ourFunctionWithArgs(a,b) {
    console.log(a-b);
}
ourFunctionWithArgs(50,10);

function myFunctionWithArgs(a,b) {
    console.log(a + b);
}
myFunctionWithArgs(50,10);

/*Global Scope and Function */
//Declare your bariable here
var myGlobal = 10;
var oopsGlobal = 15;
function fun1() {
    //Assign 5 to oopsGlobal here
    var oopsGlobal = 35;    
}

//only chenge code above this line
function fun2(){
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += "\noopsGlobal: " + oopsGlobal;
    }
    console.log(output)
}
fun1();
fun2();

/*Local Scope Abd Functions */
function myLocalScope() {
    var myVar = 5;
    console.log(myVar);
}
myLocalScope();
console.log(myVar);

/*Global vs. Local Scope in functions */
var outerWear = "T-Shirt";

function myOutfit() {
    var outerWear = "sweater";

    return outerWear;
}

console.log(myOutfit());
console.log(outerWear);

/* Return a value from a function with return*/
function minusSeven(num) {
    return num - 7;
}

console.log(minusSeven(10));

function timesFive(num) {
    return num * 5;
}

console.log(timesFive(5));

/*Understanding undefines Value Returned from a function */
var sum = 0
function addThree() {
    sum = sum + 3;

}

console.log(addThree());

function addFive() {
    sum += 5;
}

console.log(addFive());

/*Assignment with a returned value */
var changed = 0;

function change (num) {
    return (num + 5) / 3;
}

changed = change(10);

var processed = 0;

function processArg(num) {
    return (num + 3) / 5;
}
processed = processArg(7);

/*Stannd in line */
function nextInLine(arr, item) {
    //your code here
    arr.push(item);
    return arr.shift();
}

var testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

/*Booblean Values */
function welcomeToBooleans() {
    return false;
}
console.log(welcomeToBooleans());

/*Use conditional Logic with If Statements */
function ourTrueOrFalse(isItTrue) {
    if (isItTrue) {
        return "yes, it's true";
    }
    return "no , it's false";
}
function TrueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
        return "yes, that was true";
    }
    return "no , that was false";
}
console.log(TrueOrFalse(true)) ;

/* Comparison with the Equality Operator*/
function testEqual(val) {
    if (val == 12) {
        return "Equal";
    }
    return "not equal";
}

console.log(testEqual(10));

/* Comparison with the Strict Equality Operator*/
function testStrict(val) {
    if (val === 10) {
        return "Equal";
    }
    return "Not Equal";
}
console.log(testStrict("10"));
/*
3 == 3 Equal
3 == '3' Equal
3 === '3' Not Equal
*/

/*Practice Comparing Different Values */
function compareEquality(a, b) {
    if (a == b) {
        return "Equal"
    }
    return "Not Equal";
}

console.log(compareEquality(10,"10"));

/*Comparison with the Inequality Operator */
function testNotEqual(val) {
    if (val != 99) {
        return "Not Equal";
    }
    return "Equal";
}

console.log(testNotEqual(10));

/* Comparison with the Strict Inequality Operator*/
function testStrictNotEqual(val) {
    if (val !== 17) {
        return "Not Equal";
    }
    return "Equal";
}
console.log(testStrictNotEqual(10));

/*Comparisons with the Logical And Operator */
function testGreaterThan(val) {
    if (val > 100) {
        return "Over 100";
    }
    if (val > 10) {
        return "over 10";
    }
    return "10 or under";
}
console.log(testGreaterThan(10));

/*Comparison with the Greater than Or Equal to Operator */
function testGreaterOrEqual(val) {
    if (val >= 20) {
        return "20 or over";
    }
    if (val >= 10) {
        return "10 or Over";
    }
    return "less than 10";
}
console.log(testGreaterOrEqual(9));

/*Comparison with the less than Operator */
function testLessThan(val) {
    if (val < 25) {
        return "under 25";
    }
    if (val < 55) {
        return "under 55";
    }
    return "55 or over";
}
console.log(testLessThan(9));
/* Comparison with the less Than Or Equal To Operator */
function testLessOrEqual(val) {
    if (val <= 20) {
        return "under 25";
    }
    if (val <= 55) {
        return "under 55";
    }
    return "55 or over";
}
console.log(testLessOrEqual(20));

/*Comparisons with the Logical And Operator */
function testLogicalAnd(val) {
    if (val <= 50 && val >= 25) {
    return "yes";
    }

    return "no";
}
console.log(testLogicalAnd(24));

/*Comparisons with the Logical OR operator */
function testLogicalOr(val) {
    if (val < 10 || val > 20) {
        return "outside";
    }

    return "inside";
}

/*Else Statements */
function testElse(val) {
    var result = "";
    if (val > 5) {
        result = "Bigger than 5";
    } else {
        result = "5 or Smaller";
    }
    return result;
}
console.log(testElse(4));

/*Else If statements */
function testElseIF(val) {
  
    if (val > 10) {

        return  "Bigger than 10";
    } else if (val < 5) {

        return  "5 or Smaller";

    } else {

        return "Between 5 and 10";
    }
}
console.log(testElseIF(7));

/*Logical Order in If else Statements*/
function orderMyLogic(val) {
  
    if (val < 5) {

        return  "Less than 5";

    } else if (val < 10) {

        return  "less than 10";

    } else {

        return "Greater than or equal to 10";
    }
}
console.log(orderMyLogic(3));

/*Chaing If Else Statements*/
function testSize(num) {
    if (num < 5) {

        return  "Tiny";

    } else if (num< 10) {

        return  "Small";

    }
    if (num < 15) {

        return  "Medium";

    } else if (num < 20) {

        return  "Large";

    } else {

        return  "Huge";

    } 
}
console.log(testSize(1));

/*Golf Code */
var names = ["hole-in-one!","Eagle","birdir","par", "bogey", "double bogey", "go home!"]
function golfScore(par,strokes) {
    if (strokes == 1) {
        return names[0]
    } else if (strokes <= par - 2) {
        return names[1]
    } else if (strokes == par - 1) {
        return names[2]
    } else if (strokes == par ) {
        return names[3]
    } else if (strokes == par + 1) {
        return names[4]
    } else if (strokes == par + 2) {
        return names[5]
    } else if (strokes >= par + 3) {
        return names[6]
    }
}
console.log(golfScore(5,8));

/*Switch Statements */
function caseInSwitch(val) {
    var answer = "";
    switch(val) {
        case 1:
            answer= "Alpha"
            break
        case 2:
            answer = "beta"
            break
        case 3:
            answer = "Gamma"
            break
        case 4:
            answer = "Delta"
            break    
    }   

    return answer;
}
//chenge this value to test

console.log(caseInSwitch(4));

/*Default option in swith statements */
function switchOfStuff (val) {
    var answer = "";
    switch (val) {
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bird";
            break;
        case "c":
            answer = "cat";
            break;          
        default:
        answer = "struff";
            break;
    }
   return answer;
}

console.log(switchOfStuff("a"));

/*Multiple Identica Options in Switch Statements */
function sequentialSize(val) {
    var answer = "";
    switch (val) {
        case 1:
        case 2:        
        case 3:
            answer = "low";
            break
        case 4:
        case 5:
        case 6:
            answer = "mid";
            break
        case 7:
        case 8:
        case 9:          
            answer = "high";
            break 
    }
    return answer;
}
console.log(sequentialSize(9));

/* Replacing If else chains with switch*/
function chainToSwitch(val) {
    var answer = "";
    switch (val) {
        case "bob":
            answer = "marley";
            break
        case 42:
            answer = "The answer";
            break
        case 1:
            answer = "There is no #1"
            break
        case 99:
            answer = "missed me by this much!";
            break
        case 7:    
            answer = "Ate nine";
            break
    } 
    return answer;
}
console.log(chainToSwitch(1));

/*Returning Boolean Values From Functions */
function isLess(a, b) {
    return a < b;
}

console.log(isLess(100,15));

/*Returning Early Pattern from Functions */
function abTest(a,b) {

    if (a < 0 || b < 0) {
        return undefined;
    }

    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
console.log(abTest(2,2));

/*Counting Cards */
var count = 0;

function cc(card) {
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;
        default:
            break;
    }
    var holdbet = 'Hold'
    if (count > 0 ) {
        holdbet = 'bet'
    }
    return count + " " + holdbet;
}

console.log(cc(5));

/*Build JavaScript Objects */
var ourDog = {
    "name" : "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["Everything!"]
};

var myDog = {
    "name" : "Quincy",
    "legs": 3,
    "tails": 2,
    "friends": []
};

/* Accessing Object Properties with Dot Notation*/
var testObj = {
    "hat" : "bulcap",
    "shirt": "jersey",
    "shoes": "cleats",
};

var hatValue = testObj.hat;
var shirtValue = testObj.shirt;
console.log(hatValue);
console.log(shirtValue);

/*Accessing Object Properties with Bracket Notation */
var testObj = {
    "an entree" : "amburger",
    "my side": "veggies",
    "the Drink": "water",
};

var entreeValue = testObj["an entree"]
var drinkValue = testObj["the Drink"]
console.log(entreeValue);
console.log(drinkValue);

/*Accessing Object Properties With Variabel */
var testObj = {
    12 : "Namath",
    16: "Montana",
    19: "Unitas",
};

var playerNumber = 16;
var player = testObj[playerNumber];
console.log(player);

/*Upadating Objct Properties */
var ourDog = {
    "name" : "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["Everything!"]
};

ourDog.name = "Happy Camper";

var myDog = {
    "name" : "Coder",
    "legs": 3,
    "tails": 2,
    "friends": ["FreeCodeCamp campers"]
};
myDog.name = "happy coder"

console.log(myDog.name);

/*Add New Properties To an object */
var ourDog = {
    "name" : "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["Everything!"]
};

ourDog.bark = "bow woww";

var myDog = {
    "name" : "Coder",
    "legs": 3,
    "tails": 2,
    "friends": ["FreeCodeCamp campers"]
};
myDog['bark'] = "auauau"

console.log(myDog);

/*Delete Properties From an ObJect */
var ourDog = {
    "name" : "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["Everything!"],
    "bark" : "bow woww"
};

delete ourDog.bark 

var myDog = {
    "name" : "Coder",
    "legs": 3,
    "tails": 2,
    "friends": ["FreeCodeCamp campers"],
    'bark' : "auauau"
};
delete myDog.tails
console.log(myDog);

/*Using Objects for Lookups */
function phoneticLookup(val) {
    var result = "";

    var lookup = {
        "alpha" : "Adams",
        "bravo" : "Boston",
        "charlie" : "Chicago",
        "delta" : "Denver",
        "echo" : "Easy",
        "foctrot" : "frank"
    };
    result = lookup[val];

    return result;
}

console.log(phoneticLookup("charlie"));

/*Testing Objects for Properties */
var myObj = {
    gift : "pony",
    pet : "kitten",
    bed : "sleigh",
};

function checkObj(checkProp) {
    if (myObj.hasOwnProperty(checkProp)) {
        return myObj[checkProp];
    } else {
        return "Not Found"
    }
}

console.log(checkObj("gift"));

/*Manipulating Complex Objects */
var myMusci = [
    {
        "Artist" : "Billy Joel",
        "Title" : "Piano Man",
        "release_year": 1973,
        "formats" : [
            "CD",
            "8T",
            "LP"
        ],
        "gold" : true
    },
    {
        "Artist" : "Beau Carnes",
        "Title" : "Cereal Man",
        "release_year": 2003,
        "formats" : [
            "Youtube",
            "Pirate",
            "LP"
        ],
        "gold" : true
    },

];

/*Accessing Nested Objects */
var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumps"
        },
        "outside": {
            "trunk":"jack"
        }
    }
}

var gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents)

/* Accessing nested array*/
var myPlants = [
    {
       type : "flowers",
        list : [
            "rose",
            "tulip",
            "dandelion"
        ],
    },
    {
        type : "trees",
        list : [
            "fir",
            "pine",
            "birch"
        ],
    },
];

var secondTree = myPlants[1].list[1];
console.log(secondTree)

/*Record Collection */

/* */
/* */
/* */

/* */

/* */

/* */

/* */

/* */

/* */

/* */

/* */

/* */

/* */

/* */

/* */

/* */

/* */

/* */

/* */

/* */

/* */

/* */

/* */

/* */

/* */

/* */

/* */

/* */

/* */

/* */

/* */

/* */

/* */

/* */

/* */

/* */

/* */

/* */

/* */

/* */

/* */

/* */

/* */

/* */

/* */

/* */

/* */

/* */

/* */

/* */

/* */

/* */

/* */

/* */

/* */

/* */

/* */

/* */

/* */

/* */

/* */

/* */

/* */

/* */

/* */

/* */

/* */

/* */

/* */

/* */

/* */




