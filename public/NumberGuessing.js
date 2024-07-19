document.addEventListener("DOMContentLoaded", ()=>{
    const input = document.getElementById("guess");
    const inputAgain = document.getElementById("guess1");
    const random = Math.floor(Math.random()*100+1);
    const check_button = document.getElementById("button");
    const feedback = document.getElementById('feedback');
    console.log(random)


    check_button.addEventListener("click", ()=>{
        console.log(typeof parseInt(input.value));
        console.log(typeof random);
        console.log(input.value);
        console.log(random);
        console.log(parseInt(input.value) == random)
        if (parseInt(input.value) == random) {
            
            inputAgain.style.display = "none";
            feedback.textContent = "Congratulations! You guessed the number.";
        } 
        else if (parseInt(input.value)> random) {
            console.log("Try a lower number");
            feedback.textContent = "Try a lower number";
        }
        else if (parseInt(input.value)< random){
            console.log("Try a higher number");
            feedback.textContent = "Try a higher number";
        }else{
            console.log("Please enter a number");
            feedback.textContent = "Please enter a number";
        }    

    });

    
    inputAgain.addEventListener("guess", () => {
        // var guessAgain = parseInt(inputAgain.value);
        if (inputAgain === random) {
            console.log("Congratulations! You guessed the number again.");
            inputAgain.style.display = "none";   
    }
    });
});