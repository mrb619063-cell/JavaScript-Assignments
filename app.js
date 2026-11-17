// ==========================================
// CHAPTER 1: ALERTS
// ==========================================

// Q1
alert("Welcome to our website!");

// Q2
alert("Error! Please enter a valid password.");

// Q3
alert("Welcome to JS Land...\nHappy Coding!");

// Q4
alert("Welcome to JS Land...");
alert("Happy Coding!");

// Q5
alert("Hello... I can run JS through my web browser's console");


// ==========================================
// CHAPTER 2: VARIABLES FOR STRINGS
// ==========================================

// Q1
var username;

// Q2
var myName = "Jhone Doe";

// Q3
var message = "Hello World";
alert(message);

// Q4
var studentName = "Jhone Doe";
var studentAge = "15 years old";
var studentCourse = "Certified Mobile Application Development";
alert(studentName);
alert(studentAge);
alert(studentCourse);

// Q5
alert("PIZZA\nPIZZ\nPIZ\nPI\nP");

// Q6
var email = "example@example.com";
alert("My email address is " + email);

// Q7
var book = "A smarter way to learn JavaScript";
alert("I am trying to learn from the Book " + book);

// Q8
document.write("Yah! I can write HTML content through JavaScript<br>");

// Q9
var design = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(design);
document.write(design + "<br><br>");


// ==========================================
// CHAPTER 3: VARIABLES FOR NUMBERS
// ==========================================

// Q1
var age = 15;
alert("I am " + age + " years old");

// Q2
var visits = 14;
alert("You have visited this site " + visits + " times");

// Q3
var birthYear = 1990;
document.write("My birth year is " + birthYear + "<br>");
document.write("Data type of my declared variable is " + typeof(birthYear) + "<br><br>");

// Q4
var visitorName = "John Doe";
var productTitle = "T-shirt(s)";
var quantity = 5;
document.write("<b>" + visitorName + "</b> ordered <b>" + quantity + " " + productTitle + "</b> on XYZ Clothing store<br><br>");


// ==========================================
// CHAPTER 4: VARIABLE NAMES: LEGAL & ILLEGAL
// ==========================================

// Q1
var var1, var2, var3;

// Q2
var myVar, $price, _user, user1, first_name; 
// Illegal examples (commented): var 1user, my-name, var, @email, first name;

// Q3
document.write("<h1>Rules for naming JS variables</h1>");
document.write("Variable names can only contain numbers, $ and _. For example: <b>$my_1stVariable</b><br>");
document.write("Variables must begin with a letter, $ or _. For example: <b>$name, _name or name</b><br>");
document.write("Variable names are case <b>sensitive</b><br>");
document.write("Variable names should not be JS <b>keywords</b><br><br>");


// ==========================================
// CHAPTER 5: MATH EXPRESSIONS
// ==========================================

// Q1 & Q2
var num1 = 3, num2 = 5;
document.write("Sum of " + num1 + " and " + num2 + " is " + (num1 + num2) + "<br>");
document.write("Subtraction: " + (num1 - num2) + "<br>");
document.write("Multiplication: " + (num1 * num2) + "<br>");
document.write("Division: " + (num1 / num2) + "<br>");
document.write("Modulus: " + (num1 % num2) + "<br><br>");

// Q3
var calcNum;
document.write("Value after variable declaration is: " + calcNum + "<br>");
calcNum = 5;
document.write("Initial value: " + calcNum + "<br>");
calcNum++;
document.write("Value after increment is: " + calcNum + "<br>");
calcNum += 7;
document.write("Value after addition is: " + calcNum + "<br>");
calcNum--;
document.write("Value after decrement is: " + calcNum + "<br>");
document.write("The remainder is: " + (calcNum % 3) + "<br><br>");

// Q4
var ticketPrice = 600;
document.write("Total cost to buy 5 tickets to a movie is " + (ticketPrice * 5) + "PKR<br><br>");

// Q5
var tableNum = 4;
document.write("Table of " + tableNum + "<br>");
for (var i = 1; i <= 10; i++) {
    document.write(tableNum + " x " + i + " = " + (tableNum * i) + "<br>");
}
document.write("<br>");

// Q6
var celsius = 25;
document.write(celsius + "°C is " + ((celsius * 9 / 5) + 32) + "°F<br>");
var fahrenheit = 70;
document.write(fahrenheit + "°F is " + ((fahrenheit - 32) * 5 / 9) + "°C<br><br>");

// Q7
var price1 = 650, price2 = 100, qty1 = 3, qty2 = 7, shipping = 100;
var totalCart = (price1 * qty1) + (price2 * qty2) + shipping;
document.write("<h1>Shopping Cart</h1>Price of item 1 is " + price1 + "<br>Quantity of item 1 is " + qty1 + "<br>Price of item 2 is " + price2 + "<br>Quantity of item 2 is " + qty2 + "<br>Shipping Charges " + shipping + "<br><br>Total cost of your order is " + totalCart + "<br><br>");

// Q8
var totalM = 980, obtainedM = 804;
document.write("<h1>Marks Sheet</h1>Total marks: " + totalM + "<br>Marks obtained: " + obtainedM + "<br>Percentage: " + ((obtainedM / totalM) * 100) + "%<br><br>");

// Q9
var totalPKR = (10 * 104.80) + (25 * 28);
document.write("<h1>Currency in PKR</h1>Total Currency in PKR: " + totalPKR + "<br><br>");

// Q10
var arithmeticNum = 10;
var finalResult = ((arithmeticNum + 5) * 10) / 2;

// Q11
var currYear = 2016, birthY = 1992;
var calculatedAge = currYear - birthY;
document.write("<h1>Age Calculator</h1>Current Year: " + currYear + "<br>Birth Year: " + birthY + "<br>Your Age is: " + calculatedAge + " (or " + (calculatedAge - 1) + ")<br><br>");

// Q12
var radius = 20, pi = 3.142;
document.write("<h1>The Geometrizer</h1>Radius of a circle: " + radius + "<br>The circumference is: " + (2 * pi * radius) + "<br>The area is: " + (pi * radius * radius) + "<br><br>");

// Q13
var snackName = "chocolate chip", cAge = 15, mAge = 65, perDaySnack = 3;
var totalSnacksNeeded = (mAge - cAge) * 365 * perDaySnack;
document.write("<h1>The Lifetime Supply Calculator</h1>Favourite Snack: " + snackName + "<br>Current age: " + cAge + "<br>Estimated Maximum Age: " + mAge + "<br>Amount of snacks per day: " + perDaySnack + "<br>You will need " + totalSnacksNeeded + " " + snackName + " to last you until the ripe old age of " + mAge + "<br><br>");


// ==========================================
// CHAPTERS 6-9: MATH EXPRESSIONS
// ==========================================

// Q1
var aVal = 10;
document.write("Result:<br>The value of a is: " + aVal + "<br>...........................................<br><br>");
document.write("The value of ++a is: " + (++aVal) + "<br>Now the value of a is: " + aVal + "<br><br>");
document.write("The value of a++ is: " + (aVal++) + "<br>Now the value of a is: " + aVal + "<br><br>");
document.write("The value of --a is: " + (--aVal) + "<br>Now the value of a is: " + aVal + "<br><br>");
document.write("The value of a-- is: " + (aVal--) + "<br>Now the value of a is: " + aVal + "<br><br>");

// Q2
var aExp = 2, bExp = 1;
var resExp = --aExp - --bExp + ++bExp + bExp--;
document.write("a is " + aExp + "<br>b is " + bExp + "<br>result is " + resExp + "<br><br>");

// Q3
var uName = prompt("Enter your name:");
alert("Hello, " + uName + "! Welcome!");

// Q5
var tInput = +prompt("Enter a number for multiplication table:", 5) || 5;
for (var i = 1; i <= 10; i++) {
    document.write(tInput + " x " + i + " = " + (tInput * i) + "<br>");
}
document.write("<br>");

// Q6
var s1 = prompt("Enter 1st subject name:", "English");
var s2 = prompt("Enter 2nd subject name:", "Math");
var s3 = prompt("Enter 3rd subject name:", "Urdu");
var tEach = 100;
var o1 = +prompt("Enter obtained marks for " + s1);
var o2 = +prompt("Enter obtained marks for " + s2);
var o3 = +prompt("Enter obtained marks for " + s3);
var tAll = tEach * 3;
var oAll = o1 + o2 + o3;

document.write("<table border='1' cellpadding='5'>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
document.write("<tr><td>" + s1 + "</td><td>" + tEach + "</td><td>" + o1 + "</td><td>" + ((o1 / tEach) * 100) + "%</td></tr>");
document.write("<tr><td>" + s2 + "</td><td>" + tEach + "</td><td>" + o2 + "</td><td>" + ((o2 / tEach) * 100) + "%</td></tr>");
document.write("<tr><td>" + s3 + "</td><td>" + tEach + "</td><td>" + o3 + "</td><td>" + ((o3 / tEach) * 100) + "%</td></tr>");
document.write("<tr><th></th><th>" + tAll + "</th><th>" + oAll + "</th><th>" + ((oAll / tAll) * 100) + "%</td></tr>");
document.write("</table><br>");


// ==========================================
// CHAPTERS 9-11: USER INPUT & CONDITIONAL STATEMENT
// ==========================================

// Q1
var userCity = prompt("Enter city name:");
if (userCity && userCity.toLowerCase() === "karachi") {
    alert("Welcome to city of lights");
}

// Q2
var userGender = prompt("Enter your gender (male/female):");
if (userGender && userGender.toLowerCase() === "male") {
    alert("Good Morning Sir.");
} else if (userGender && userGender.toLowerCase() === "female") {
    alert("Good Morning Ma'am.");
}

// Q3
var signalColor = prompt("Enter traffic signal color (Red, Yellow, Green):");
if (signalColor) {
    signalColor = signalColor.toLowerCase();
    if (signalColor === "red") alert("Must Stop");
    else if (signalColor === "yellow") alert("Ready to move");
    else if (signalColor === "green") alert("Move now");
}

// Q4
var remainingFuel = +prompt("Enter remaining fuel in car (in litres):");
if (remainingFuel < 0.25) {
    alert("Please refill the fuel in your car");
}

// Q6
var mSub1 = +prompt("Enter marks for Subject 1:");
var mSub2 = +prompt("Enter marks for Subject 2:");
var mSub3 = +prompt("Enter marks for Subject 3:");
var totalMInput = +prompt("Enter total marks:");
var obtainedTotal = mSub1 + mSub2 + mSub3;
var percentageCalc = (obtainedTotal / totalMInput) * 100;
var gradeResult, remarksResult;

if (percentageCalc >= 80) { gradeResult = "A-one"; remarksResult = "Excellent"; }
else if (percentageCalc >= 70) { gradeResult = "A"; remarksResult = "Good"; }
else if (percentageCalc >= 60) { gradeResult = "B"; remarksResult = "You need to improve"; }
else { gradeResult = "Fail"; remarksResult = "Sorry"; }

document.write("<h1>Marks Sheet</h1>Total marks : " + totalMInput + "<br>Marks obtained : " + obtainedTotal + "<br>Percentage : " + percentageCalc + "%<br>Grade : " + gradeResult + "<br>Remarks : " + remarksResult + "<br><br>");

// Q7
var secretNum = 7;
var userGuess = +prompt("Guess the secret number (1 to 10):");
if (userGuess === secretNum) alert("Bingo! Correct answer");
else if (userGuess + 1 === secretNum) alert("Close enough to the correct answer");

// Q8
var divNum = +prompt("Enter a number to check divisibility by 3:");
if (divNum % 3 === 0) alert(divNum + " is divisible by 3");

// Q9
var evenOddNum = +prompt("Enter a number to check even or odd:");
alert(evenOddNum % 2 === 0 ? "Even number" : "Odd number");

// Q10
var tVal = +prompt("Enter temperature:");
if (tVal > 40) alert("It is too hot outside.");
else if (tVal > 30) alert("The Weather today is Normal.");
else if (tVal > 20) alert("Today's Weather is cool.");
else if (tVal > 10) alert("OMG! Today's weather is so Cool.");

// Q11
var calcN1 = +prompt("Enter first number:");
var calcN2 = +prompt("Enter second number:");
var calcOp = prompt("Enter operation (+, -, *, /, %):");
if (calcOp === "+") alert(calcN1 + calcN2);
else if (calcOp === "-") alert(calcN1 - calcN2);
else if (calcOp === "*") alert(calcN1 * calcN2);
else if (calcOp === "/") alert(calcN1 / calcN2);
else if (calcOp === "%") alert(calcN1 % calcN2);


// ==========================================
// CHAPTERS 12-13: IF...ELSE & ELSE IF STATEMENT
// ==========================================

// Q1
var inputChar = prompt("Enter a single character or number:");
if (inputChar) {
    var asciiCode = inputChar.charCodeAt(0);
    if (asciiCode >= 48 && asciiCode <= 57) alert("It is a Number");
    else if (asciiCode >= 65 && asciiCode <= 90) alert("It is an Uppercase Letter");
    else if (asciiCode >= 97 && asciiCode <= 122) alert("It is a Lowercase Letter");
    else alert("Special character");
}

// Q2
var intA = +prompt("Enter first integer:");
var intB = +prompt("Enter second integer:");
if (intA > intB) alert(intA + " is larger");
else if (intB > intA) alert(intB + " is larger");
else alert("Both integers are equal");

// Q3
var checkNum = +prompt("Enter a number:");
if (checkNum > 0) alert("Positive number");
else if (checkNum < 0) alert("Negative number");
else alert("Zero");

// Q4
var vowelChar = prompt("Enter a single character:");
if (vowelChar) {
    vowelChar = vowelChar.toLowerCase();
    alert(vowelChar === "a" || vowelChar === "e" || vowelChar === "i" || vowelChar === "o" || vowelChar === "u");
}

// Q5
var originalPass = "secret123";
var enteredPass = prompt("Enter your password:");
if (!enteredPass) alert("Please enter your password");
else if (enteredPass === originalPass) alert("Correct! The password you entered matches the original password");
else alert("Incorrect password");

// Q6
var greetingMsg;
var currentHour = 13;
if (currentHour < 18) {
    greetingMsg = "Good day";
} else {
    greetingMsg = "Good evening";
}

// Q7
var clockTime = +prompt("Enter time in 24-hour format (e.g., 1900):");
if (clockTime >= 0 && clockTime < 1200) alert("Good morning!");
else if (clockTime >= 1200 && clockTime < 1700) alert("Good afternoon!");
else if (clockTime >= 1700 && clockTime < 2100) alert("Good evening!");
else if (clockTime >= 2100 && clockTime <= 2359) alert("Good night!");


// ==========================================
// CHAPTERS 14-15: ARRAYS
// ==========================================

// Q1
var studentNamesLiteral = [];

// Q2
var studentNamesObject = new Array();

// Q3
var stringsArray = ["Apple", "Banana", "Mango"];

// Q4
var numbersArray = [10, 20, 30, 40];

// Q5
var booleanArray = [true, false, true];

// Q6
var mixedArray = ["Ali", 25, true, null];

// Q7
var qualificationsList = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
document.write("<h2>Qualifications:</h2>");
for (var q = 0; q < qualificationsList.length; q++) {
    document.write((q + 1) + ") " + qualificationsList[q] + "<br>");
}
document.write("<br>");

// Q8
var studentNamesArr = ["Michael", "John", "Tony"];
var studentScoresArr = [320, 230, 480];
var totalMarksEach = 500;
for (var s = 0; s < studentNamesArr.length; s++) {
    var sPer = (studentScoresArr[s] / totalMarksEach) * 100;
    document.write("Score of " + studentNamesArr[s] + " is " + studentScoresArr[s] + ". Percentage: " + sPer + "%<br>");
}
document.write("<br>");

// Q9
var colorsList = ["Red", "Green", "Blue"];
document.write("Initial Colors: " + colorsList + "<br>");

colorsList.unshift(prompt("Q9a: Which color to add to beginning?"));
document.write("After adding to start: " + colorsList + "<br>");

colorsList.push(prompt("Q9b: Which color to add to end?"));
document.write("After adding to end: " + colorsList + "<br>");

colorsList.unshift("Purple", "Orange");
document.write("After adding two to start: " + colorsList + "<br>");

colorsList.shift();
document.write("After deleting first color: " + colorsList + "<br>");

colorsList.pop();
document.write("After deleting last color: " + colorsList + "<br>");

var userIdx = +prompt("Q9f: At which index do you want to add a color?");
var userColor = prompt("Enter color name:");
colorsList.splice(userIdx, 0, userColor);
document.write("After adding at index: " + colorsList + "<br>");

var delIdx = +prompt("Q9g: At which index do you want to delete color(s)?");
var delCount = +prompt("How many colors do you want to delete?");
colorsList.splice(delIdx, delCount);
document.write("After deleting: " + colorsList + "<br><br>");

// Q10
var scoresToSort = [320, 230, 480, 120];
document.write("Scores of Students : " + scoresToSort + "<br>");
scoresToSort.sort();
document.write("Ordered Scores of Students : " + scoresToSort + "<br><br>");

// Q11
var citiesList = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
var selectedCitiesList = citiesList.slice(2, 4);
document.write("Cities list:<br>" + citiesList + "<br>Selected cities list:<br>" + selectedCitiesList + "<br><br>");

// Q12
var stringArr = ["This ", " is ", " my ", " cat"];
document.write("Array:<br>" + stringArr + "<br>String:<br>" + stringArr.join("") + "<br><br>");

// Q13
var fifoArr = [];
fifoArr.push("keyboard", "mouse", "printer", "monitor");
document.write("Devices FIFO:<br>");
while (fifoArr.length > 0) {
    document.write("Out: " + fifoArr.shift() + "<br>");
}
document.write("<br>");

// Q14
var lifoArr = [];
lifoArr.push("keyboard", "mouse", "printer", "monitor");
document.write("Devices LIFO:<br>");
while (lifoArr.length > 0) {
    document.write("Out: " + lifoArr.pop() + "<br>");
}
document.write("<br>");

// Q15
var manufacturersList = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write("<select>");
for (var m = 0; m < manufacturersList.length; m++) {
    document.write("<option>" + manufacturersList[m] + "</option>");
}
document.write("</select>");
