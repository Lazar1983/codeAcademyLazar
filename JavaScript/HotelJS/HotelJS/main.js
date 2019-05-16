var hotel = new Hotel("Hilton");

for (var i = 0; i < 30; i++) {
    var newCustomers = getRandomNumber(2, 5);
    var generateEmployees = 3;

    for (var index = 0; index < newCustomers; index++) {
        var customer = new Human(index);
        hotel.admit(customer);
    }
    for (var index = 0; index < generateEmployees; index++){
        var employee = new Employee(index);
        hotel.generateEmployees(employee);
    }
 
    hotel.work();
}

console.log ("The hotel finished working ", hotel);

// document.body.style.display = "flex";
// var el = document.createElement ("div");
// el.style.height = "100px";
// el.style.width = "100px";
// el.style.backgroundColor = "blue";
// document.body.appendChild(el);

// el.addEventListener("mouseover", function(event) {
	
// 	for (var index = 0; index < 1; index ++) {
// 		var el = document.createElement ("div");
// 		el.style.height = "100px";
// 		el.style.width = "100px";
// 		el.style.marginLeft = "10px";
// 		el.style.backgroundColor = "blue";
// 		document.body.appendChild(el);
// 	}
// });
        
// function handleNumber(num) {
//     // code goes here
// }
// function handleOperator(oper) {
//     // code goes here
// }

// $(document).ready(function() {
//     $('button').on('click', function(e) {
//         let btn = e.target.innerHTML;
//         if (btn >= '0' && btn <= '9') {
//             console.log('number');
//         } else {
//             console.log('operator');
//         }
//     });
// });

// $(document).ready(function() {
//     $('button').on('click', function(e) {
//         let btn = e.target.innerHTML;
//         if (btn >= '0' && btn <= '9') {
//             handleNumber(btn);
//         } else {
//             handleOperator(btn);
//         }
//     });
// });

// function handleNumber(num) {
//     if (num1 === '') {
//         num1 = num;
//     } else {
//         num2 = num;
//     }
// }

// function handleOperator(oper) {
//     operator = oper;
// }

// function displayButton(btn) {
//     $('.calc-result-input').text(btn);
// }

// function handleNumber(num) {
//     if (num1 === '') {
//         num1 = num;
//     } else {
//         num2 = num;
//     }
//     displayButton(num);
// }

// function handleTotal() {
//     switch (operator) {
//         case '+':
//             total = +num1 + +num2;
//             displayButton(total);
//             break;
//     }
// }

// function handleOperator(oper) {
//     if (operator === '') {
//         operator = oper;
//     } else {
//         handleTotal();
//         operator = oper;
//     }             
// }
