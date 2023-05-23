// let button = document.getElementById("btn");

// button.addEventListener("click", () => {
//   const height = parseInt(document.getElementById("height").value);
//   const weight = parseInt(document.getElementById("weight").value);
//   const result = parseInt(document.getElementById("output").value);

//   let height_status = false;
//   let weight_status = false;

//   //height
//   if (height === "" || isNaN(height) || height <= 0) {
//     document.getElementById("height-error").innerHTML =
//       "Please Enter a Valid height";
//   } else {
//     document.getElementById("height-error").innerHTML = "";
//     height_status = true;
//   }
//   //weight
//   if (weight === "" || isNaN(weight) || weight <= 0) {
//     document.getElementById("weight-error").innerHTML =
//       "Please enter a valid weight";
//   } else {
//     document.getElementById("weight-error").innerHTML = "";
//     weight_status = true;
//   }
//   if (weight_status && height_status) {
//     const bmi = (weight / Math.pow(height / 10000, 2)).toFixed(1);
//     //BMI Thingie
//     if (bmi < 18.4) {
//       result.innerHTML = "Underweight : " + bmi;
//     } else if (bmi >= 18.4 && bmi < 24.9) {
//       result.innerHTML = "Normal : " + bmi;
//     } else {
//       result.innerHTML = "Overweight : " + bmi;
//     }
//   } else {
//     alert("you have to enter something hun ");
//     result.innerHTML = "";
//   }
// });


function calculate () {
    let height = parseInt(document.getElementById("height").value)
    let weight = parseInt(document.getElementById("weight").value)
    let result = document.getElementById("output")

    document.getElementById("height").value = height + "cm"
    document.getElementById("weight").value = weight + "kg"

    bmi = (weight /  Math.pow(height/100, 2)).toFixed(1);
    result.textContent = bmi;

    if( bmi < 18.5) {
        bmi + "Severly under weight check yourself 😒"
    } else if (bmi >= 18.5 && bmi <= 24.9 ) {
        bmi + " You are a NPC 🤷‍♀️"
    } else if (bmi >= 25 && bmi <= 29.9) {
        bmi + "you are part of the big 5 🦬🦛"
    } else {
        bmi + " you are going to die young 💕"
    }

    document.getElementById("output").innerHTML = bmi ;
    document.getElementById("message").innerHTML = result.textContent;


}