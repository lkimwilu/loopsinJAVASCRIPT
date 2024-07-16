// for (var i = 0; i< 5; i++) {
//     console.log("for loop iteration: " + i);
//     i++;
// }


//  WHILE loop iteration

// var i = 0;
// while (i < 5) {
//     console.log("while loop iteration: " + i);
//     i++;
// }



//  DO-WHile loop iteration
// Executes code of block then checks condition later
// var i = 100;
// do {
//     console.log("do-while loop iteration: " + i);
//     i++;
// } while (i < 5);



// CONTROLFLOW INTERRUPTIONS
// EXAMPLE of break
// for (var i = 0; i < 10; i++) {   
//     if (i ==5) {
//         break; 
//     }
//     console.log("loop with break: " + i);
// }
// 2.using continue statement
//  for (var i = 0; i < 10; i++){
//     if (i % 2 === 0) {
//         continue;
//     }
//     console.log("loop with continue: " + i);
// }
// 3.using return statement
// function add(a, b) {
//     return a + b;
// }
// let a = 1, b = 2
//  console.log(add(a, b));


// CONTINUE statement
// for  (i = 0; i < 10; i++) {
//     if (i % 2=== 1) {
//         continue;
//     }
//     console.log("loop with continue: " + i);
// }




// for (var i = 0; i < 3; i++) {

//     for (var j = 0; j < 3; j++) {

//         if (j===1)
//         continue;
//     console.log(`i = ${i}, j = ${j}`);
//     }
// }


//  var i = 0; 
//  while (i < 20){
//     if (i % 2 ===0) 
//         continue;{
//         console.log("loop with continue: " + i);
//         }
//         i++;
//     }


// Use a loop to print even numbers between 0 and 20.(While loop, )
    // for (var i = 0; i < 20; i++) {
    //     if (i % 2 === 0) {
    //         continue;  
    //     }
    //     console.log("loop with continue: " + i);  
    // }

    // Use a loop to print even numbers between 0 and 20.( do while loop, )
    var i = 0;  // Initialize the counter

do {
    if (i % 2 === 0) {  
        console.log(i);  
    }
    i++;  
} while (i <= 20);