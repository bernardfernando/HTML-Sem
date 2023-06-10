function yourName(){
let user = prompt("What is your name");

return document.write(user);

}

function timeOfDay(){
let time = -1;
    while(time <0 || time >24){
        
        time  = prompt("what hour is it? 0 - 23 ");

}


let location = prompt("what is your location, county")
let message ="";

if(time <=11 && location ==="england"){
    message = "Good morning to you ";
} else if (time <=18 && location === "england"){
    message ="Good afternoon";
}
else if(time <=23 && location === "england"){

    message = "Good night"
} else if(time <6 && location === "england"){

    message = "Too early, early bird"
}

return document.write(message)
}

// FOR LOOP
//let myPets = ["dog","cat", "goldfish"]
// LOOPs
// initialization / condition/ increment

//for (let i = 0; i < myPets.length; i++) {

   // console.log("I love my pet " + myPets[i])
//}

// while loop (condition) {}
// statement
//}

//let n = 0;
//let x = 0;

//while (n < 3) {
   // n++
    //x += n
    //console.log(n)
    //console.log(x)

   // if(x.=3){
   //     break
   // }

   //let answer

  // while (){
  //  answer = prompt ("Guess a number between 1 and 10")
   // if(answer !=7){
 //       alert ("Try again");
  //  } else {
  //      alert("congratulation, You wine");
  //  }

 //  }
// for loop for 
function addingStarsToPage(){
let comment = prompt("")

}