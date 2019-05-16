// var iPhonePrice = 899.95;
// var valute = "$";
// var number = 30;
// var taxRate = iPhonePrice * 0.18;
// var customsRate = iPhonePrice * 0.05;
// var result = valute + (iPhonePrice + customsRate + taxRate) * number;
// console.log(result) ;
// alert(result);




// sayHello();

// function sayHello() {
//     alert("hello");
// }



// iPhone (899.95)

// var taxRate = iPhonePrice * 0.18;
// var customsRate = iPhonePrice * 0.05;

// function iPhone (iPhonePrice, taxRate, customsRate) {
//     var result = iPhonePrice + customsRate + taxRate;
//     console.log(result);
// }





// var result1 = calculatePrice(890, 46);
// calculatePrice(650, 57);
// alert(result1);


// function calculatePrice(price, quantity) {
//     var result = price * quantity;
//     return result;
//     console.log(result);
// }



// calculateCelsius(1);


// function calculateCelsius(celsius) {
//     var result = celsius * 1.8 + 32;
//     console.log(result);
    
// }


// calculateFahrenheit(1);

// function calculateFahrenheit(farenheit) {
//     var result = (5/9) * (farenheit-32);
//     console.log(result);
// }

// CodeAcademy (1);

// function CodeAcademy (classes, sessionMonth, perMonth, winterBreak) {
//     classes = 3;
//     perMonth = 12;
//     winterBreak = 6;
//     sessionMonth = 6;
//     var result = classes *( ( perMonth * sessionMonth ) - winterBreak );
//     console.log(result);
    
// }


// function calculateTotalPrice(itemPrice) {
//     return itemPrice * 1.05 * 1.18;
// }

// var iPhone = calculateTotalPrice(30);





// function convertTemperature(temperature, type) {
//     if (type == "celsius") {
//         return temperature * 1.8 + 32; 
//     } else if (type == "fahrenheit") {
//         return (5/9) * (temperature - 32);
//     } else {
//         return temperature;
//     }

// }

// var fahr = convertTemperature (38, "celsius");
// var cels = convertTemperature(88, "fahrenheit");
// var sameNum = convertTemperature(300);


// function convertTemperature(temperature, type) {
//     if (type == "celsius") {
//         return temperature * 1.8 + 32; 
//     } 

//     if (type == "fahrenheit") {
//         return (5/9) * (temperature - 32);
//     } 

//     return temperature;
// }





// var userInput = prompt("Enter a number");



// function lazar(money) {
//     if (money<500) {
//         alert ("go lunch");
//     }
//     if (money>500) {
//         alert ("go cinema")
//     }
    
//     if (money<100)
//         alert ("go home")

// }

// var money = lazar (300);






// function registration (bhp){
//     if (bhp <= 85){
//         alert("3000 denars");
//     } else if (bhp > 85 && bhp < 150){
//         alert("5000 denars");
 
//     } else if (bhp > 150){
//         alert("15000 denars");
//     }
// }
 
// var bhp = registration (73);








// function salaryTax (salary) {
//     if (salary <= 1000) {
//         return salary / 1.11;
//     } else if (salary >= 1000) {
//         return ((salary - 1000) / 1.18 ) + 1000;
//     }

//     console.log(salary)
// }

// var salary = salaryTax (1001);


// console.log(salary);


// function calculateTax (salary, type) {
//     if (salary<=1000 && type!=="craftsman"){
//        return salary*0.11;
//     } else if (salary<=1000 && type==="craftsman"){
//        return salary*0.05;
//     } else if (salary>1000 && type!=="craftsman"){
//        return (1000*0.11)+((salary-1000)*(0.18));
//     } else if (salary>1000 && type==="craftsman"){
//        return (1000*0.05)+((salary-1000)*(0.1));
//     }else{
//        alert("wrong input");
//     }
//     }
//     var moneySum=calculateTax(1200, "craftsman");
//     alert(moneySum);


// function concatenateStrings(string1, string2, boolean) {
//     if (boolean === false) {
//         return string1 + string2
//     } else if (boolean === true) {
//         return string2 + string1
//     } else {
//         return 'Error in parameters, please check again.'
//     }
// }
// var result = concatenateStrings('Forze ', 'Juve ', false);
// alert(result);





// function sayHi() {
//     var i = 0;
//     while(i < 20) {
//         console.log("hai there");
//         i++;
//         if (i === 10) {
//             break;
//         }
//     }

//     console.log("function has ended");


// }

// sayHi()



// function generateValues () {
//     var i = 0;
//     var max = 0;
//     while (i<20){
//         var random = Math.floor(Math.random() * 100) + 1  ;
//         console.log(random);
//         if (random>max){
//             max=random;
//         }
//         i++;
//     }
//     console.log("the max number is" + max);
// }
 
// generateValues();



// function sumOfNum () {
//     var x = 101;
//     var sum = 0;

//     while (x <= 150) {
//         sum = sum + Math.pow (x, 2);
//         x++;
//     }
    
//     console.log(sum);
// }

// sumOfNum();









// var i = 2524;
// var sum = 0;

// while (i>0) {
//     sum += i % 10;
//     i = Math.floor(i / 10);
//     i++;
// }

// console.log(sum);














// for (var i=0; i<=15; i++) {
//     if (i === 0) {
//         console.log(i +  " is even");
//     }
//     else if (x % 2 === 0) {
//         console.log(i + " is even");   
//     }
//     else {
//         console.log(i + " is odd");
//     }
// }















// for (var i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0){
//         console.log(i + "FizzBuzz");
//     }
//     else if (i % 3 === 0) {
//         console.log(i + "Fizz");
//     }
//     else if (i % 5 === 0) {
//         console.log(i + "Buzz");
//     }
//   else {
//         console.log(i);
//     }
// }


// var sum = 0;
// for (var i = 0; i < 1000; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//         sum += i;
//     }
// }

// console.log(sum);




// var testArray = ["vladimir", 56, true, null, [5, 4, 7], false, "Zoki", {} ];

// for (var index = 0; index < testArray.length; index++) {
//     var element = testArray[index];
//     if (Array.isArray(element)) {
//         for (var j = 0; j < element.length; j++) {
//             innerElement = element[j];
//             console.log[innerElement];
//         }
//     }
//     console.log(element);
// }


// function feedTheCats () {
//     var cats = ['Tabby', 'Lizzie', 'Marry'];
//     var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    
//     for (var i = 0; i < days.length; i++) {
//         var currentDay = days[i];

//         for (var index=0; index < cats.length; index++) {
//             var cat = cats[index];
//             if (cat === 'Tabby') {
//                 console.log (cat + "eat fish" + currentDay)
//             }

//             else if ( cat === 'Lizzie') {
//                 console.log(cat + "eat chicken" + currentDay);
//             }
//             else  {
//                 console.log (cat + "ate pork on" + currentDay)
//             }

//         }
//     }
// }

// feedTheCats ();




// function performCPR () {
//     var time = 60;

//     for (var index = 0; index < time; index++) {
//         console.log("performin CPR...");
//         if (index % 15 === 0 ) {
//             console.log("check the pulse");
//         }
//         if (index === time - 1) {
//             console.log("the patient died")
//         } 
        
//     }
// }


// function isPalindrome (number) {
//     var sum = 0;
//     var temp = number;
//     while (temp) {
//         var digit = Math.floor(temp % 10);
//         sum = sum * 10 + digit;
//         temp = Math.floor(temp / 10);
//     }

//     if (number === sum) {
//         console.log("Its Palindrome");
//     }
//     else {
//         console.log("Its not");
//     }
// }

// isPalindrome (45225);


// Write a JavaScript program which iterates the integers from 1 to 100. 
// But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". 
// For numbers which are multiples of both three and five print "FizzBuzz". 
// (Print with console.log)


// function iterateNumber () {
//     for (var i = 1; i <= 100; i++) {

//         if (i % 5 === 0 && i % 3 === 0) {
//             console.log("FizzBuzz");
//         }

//         else if (i % 3 === 0) {
//             console.log("Fizz");
//         }

//         else if (i % 5 === 0) {
//             console.log("Buzz");
//         }

//         else {
//             console.log (i);
//         }
//     }
// }

// iterateNumber ();


// function armstrongNumber () {
//     for (var i = 100; i < 1000; i++ ) {

//         var result = sum(i);

//         if (result === i) {
//             console.log(" The armstrong number is " + i);
//         }

//     }
// }
// armstrongNumber ();

// function sum(n) {
//     var suma=0;

//     while (n) {
//         var digit = n % 10;
//         suma += Math.pow(digit, 3);
//         n = Math.floor(n / 10);
//     }

//     return suma;

// }



// function sumOfMultiples(min, max) {
//     var suma = 0;
//     for (var index = min; index < max; index++) {
//         if (index % 5 === 0 && index % 3 === 0) {
//             suma += index;
//         }
//     }

//     console.log("The sum is " + suma);
// }

// sumOfMultiples(2, 100);




// function fight() {
//     if {
//         console.log("Human win " + human)
//     }
// }




// fight();




// function orcWarrior () {

// }




// function humanFootman () {
//     var man = 550;
//     for (var hitpoints = 0; hitpoints <= 500; hitpoints++){
//         if (man < 0){
//             console.log("died" + man);
//         }
        

//     }

// }


// (function() {

//     var width, height, largeHeader, canvas, ctx, points, target, animateHeader = true;

//     // Main
//     initHeader();
//     initAnimation();
//     addListeners();

//     function initHeader() {
//         width = window.innerWidth;
//         height = window.innerHeight;
//         target = {x: width/2, y: height/2};

//         largeHeader = document.getElementById('large-header');
//         largeHeader.style.height = height+'px';

//         canvas = document.getElementById('demo-canvas');
//         canvas.width = width;
//         canvas.height = height;
//         ctx = canvas.getContext('2d');

//         // create points
//         points = [];
//         for(var x = 0; x < width; x = x + width/20) {
//             for(var y = 0; y < height; y = y + height/20) {
//                 var px = x + Math.random()*width/20;
//                 var py = y + Math.random()*height/20;
//                 var p = {x: px, originX: px, y: py, originY: py };
//                 points.push(p);
//             }
//         }

//         // for each point find the 5 closest points
//         for(var i = 0; i < points.length; i++) {
//             var closest = [];
//             var p1 = points[i];
//             for(var j = 0; j < points.length; j++) {
//                 var p2 = points[j]
//                 if(!(p1 == p2)) {
//                     var placed = false;
//                     for(var k = 0; k < 5; k++) {
//                         if(!placed) {
//                             if(closest[k] == undefined) {
//                                 closest[k] = p2;
//                                 placed = true;
//                             }
//                         }
//                     }

//                     for(var k = 0; k < 5; k++) {
//                         if(!placed) {
//                             if(getDistance(p1, p2) < getDistance(p1, closest[k])) {
//                                 closest[k] = p2;
//                                 placed = true;
//                             }
//                         }
//                     }
//                 }
//             }
//             p1.closest = closest;
//         }

//         // assign a circle to each point
//         for(var i in points) {
//             var c = new Circle(points[i], 2+Math.random()*2, 'rgba(255,255,255,0.3)');
//             points[i].circle = c;
//         }
//     }

//     // Event handling
//     function addListeners() {
//         if(!('ontouchstart' in window)) {
//             window.addEventListener('mousemove', mouseMove);
//         }
//         window.addEventListener('scroll', scrollCheck);
//         window.addEventListener('resize', resize);
//     }

//     function mouseMove(e) {
//         var posx = posy = 0;
//         if (e.pageX || e.pageY) {
//             posx = e.pageX;
//             posy = e.pageY;
//         }
//         else if (e.clientX || e.clientY)    {
//             posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
//             posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
//         }
//         target.x = posx;
//         target.y = posy;
//     }

//     function scrollCheck() {
//         if(document.body.scrollTop > height) animateHeader = false;
//         else animateHeader = true;
//     }

//     function resize() {
//         width = window.innerWidth;
//         height = window.innerHeight;
//         largeHeader.style.height = height+'px';
//         canvas.width = width;
//         canvas.height = height;
//     }

//     // animation
//     function initAnimation() {
//         animate();
//         for(var i in points) {
//             shiftPoint(points[i]);
//         }
//     }

//     function animate() {
//         if(animateHeader) {
//             ctx.clearRect(0,0,width,height);
//             for(var i in points) {
//                 // detect points in range
//                 if(Math.abs(getDistance(target, points[i])) < 4000) {
//                     points[i].active = 0.3;
//                     points[i].circle.active = 0.6;
//                 } else if(Math.abs(getDistance(target, points[i])) < 20000) {
//                     points[i].active = 0.1;
//                     points[i].circle.active = 0.3;
//                 } else if(Math.abs(getDistance(target, points[i])) < 40000) {
//                     points[i].active = 0.02;
//                     points[i].circle.active = 0.1;
//                 } else {
//                     points[i].active = 0;
//                     points[i].circle.active = 0;
//                 }

//                 drawLines(points[i]);
//                 points[i].circle.draw();
//             }
//         }
//         requestAnimationFrame(animate);
//     }

//     function shiftPoint(p) {
//         TweenLite.to(p, 1+1*Math.random(), {x:p.originX-50+Math.random()*100,
//             y: p.originY-50+Math.random()*100, ease:Circ.easeInOut,
//             onComplete: function() {
//                 shiftPoint(p);
//             }});
//     }

//     // Canvas manipulation
//     function drawLines(p) {
//         if(!p.active) return;
//         for(var i in p.closest) {
//             ctx.beginPath();
//             ctx.moveTo(p.x, p.y);
//             ctx.lineTo(p.closest[i].x, p.closest[i].y);
//             ctx.strokeStyle = 'rgba(156,217,249,'+ p.active+')';
//             ctx.stroke();
//         }
//     }

//     function Circle(pos,rad,color) {
//         var _this = this;

//         // constructor
//         (function() {
//             _this.pos = pos || null;
//             _this.radius = rad || null;
//             _this.color = color || null;
//         })();

//         this.draw = function() {
//             if(!_this.active) return;
//             ctx.beginPath();
//             ctx.arc(_this.pos.x, _this.pos.y, _this.radius, 0, 2 * Math.PI, false);
//             ctx.fillStyle = 'rgba(156,217,249,'+ _this.active+')';
//             ctx.fill();
//         };
//     }

//     // Util
//     function getDistance(p1, p2) {
//         return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
//     }
    
// })();

// function war(min, max) {

//     for (var min = 18; max <=35; min++) {
//         var min = Math.floor (Math.random()*min) - Warrior();

//         if (min <= 0) {
//             console.log (Warrior + "died");
//         }

//         else if (min <= 0) {
//             console.log (Warrior + "died");

//         }
//     }
    

// }

// var orc = new Warrior ("Orc", 770, 5);
// var human = new Warrior ("Human", 500, 9);

// function Warrior (name, hitpoints, armor) {
//     this.name = name;
//     this.hitpoints = hitpoints;
//     this.armor = armor;

//     this.atack = function(target) {
//         var damage = 
        
        

        
//     }
// }




// war();



// window.getRandomNumber = function(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// window.calculatePercent = function(percent) {
//     return (100 - percent) <= getRandomNumber(0, 100);
// }



// function war() {
//     var orc = new Combatant("Zugzug", 560, 16, 32, 5, "orc");

//     var human = new Combatant("Dzordz", 480, 22, 27, 9, "human");

//     while (orc.health > 0 && human.health > 0) {
//         orc.attack(human);
//         human.attack(orc);
//     }

//     if (orc.health <= 0) {
//         console.log(human.name + " has won the battle");
//     } else if (human.health <= 0) {
//         console.log(orc.name + " has won the battle");
//     } else {
//         console.log("The battle ended with a tie");
//     }

// }



// function Combatant(name, health, min, max, armor, type) {
//     this.name = name;
//     this.health = health;
//     this.minDamage = min;
//     this.maxDamage = max;
//     this.armor = armor;
//     this.type = type;
//     this.evasion = 10;

//     this.attack = function(target) {
//         var damage = getRandomNumber(this.minDamage, this.maxDamage);
//         if (this.type === "orc" && calculatePercent(20)) {
//             damage *= 1.5;
//             console.log(this.name + " scored a critical hit for " + damage);
//         }
//         target.recieveDamage(damage);
//     }

//     this.recieveDamage = function(dmg) {
//         var chance = calculatePercent(100 - this.evasion);
//         var armor = this.armor;
//         if (this.type === "human" && calculatePercent(30)) {
//             armor *= 1.3;
//             console.log(this.name + " has blocked an attack with armor " + armor);
//         }
//         if (chance) {
//             this.health = this.health + armor - dmg;
//         } else {
//             console.log(this.name + " has evaded the attack");
//         }
        
//     }
// }


function hotel(){
    var a_rooms = 10; 
    var b_rooms = 5;

    return {
        
        total_rooms : function() { 
                return a_rooms + b_rooms;
            } ,
        book_a :  function(){ 
                if (a_rooms > 0) { 
                    a_rooms--;
                    return "A room booked (" + a_rooms + ") left";
                } else {
                    return "no A rooms left";
                }
            } ,
        book_b : function(){ 
                if (b_rooms > 0) { 
                    b_rooms--;
                    return "A room booked (" + b_rooms + ") left";
                } else {
                    return "no B rooms left";
                }
            }
    };
}


