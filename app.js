//--------------------PART ONE--------------------//

//loop through and print the number 1 - 10

for (i=1; i<=10; i++){
    console.log(i)
 }


//if a number is divisble by 3 print the word fizz. if divisble by 5 print the word buzz. if divisible by 3 and 5 print fizzbuzz

 for (i=1; i <=15; i++){
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("Fizzbuzz")
     } else if ( i % 3 === 0){
         console.log("Fizz")
     } else if (i % 5  === 0 ){
         console.log ("Buzz")
     } else if (i % 3 > 0 && i % 5 > 0){
         console.log(i)
     }
 }


//--------------------PART TWO--------------------//


//check for prime numbers


for (n = 0; n < 1; n++){
    let n = 4;

    if(n % 2 === 0){
        console.log("Prime Number!")
    }else {
        console.log("Not a Prime Number!")
    }
}

//loop through each character in the string


let csvString = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"

const str = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"
for (let i = 0; i < csvString.length; i++){
     console.log(csvString[i])
 }


// //

               
//      function removeACharacter (string){
//         let firstString = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
//         let updatedString = firstString.replace("\n" , " ");
//         console.log(updatedString)


//      }
//      removeACharacter()

let firstString = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

function formatString(str){
    let new_arr = str.split('\n')
    const cell1 = new_arr[0]
    const cell2 = new_arr[1]
    const cell3 = new_arr[2]
    const cell4 = new_arr[3]
    console.log(cell1, cell2, cell3, cell4)

     let temp = []
     for(let i = 0 ; i <= new_arr.length-1; i++){
         temp.push(new_arr[i].split(','))
     }
     return temp
}
console.log(formatString(firstString))

    //turning the string into an array to be able to store the data into a varaiable

    // function changeFromStringToArray (string){
       
    //     let updatedString = string.replace("\n" , " ");

    
        
    //     console.log(Array.from(updatedString));
    // }
     
    //  changeFromStringToArray("ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26");



                        