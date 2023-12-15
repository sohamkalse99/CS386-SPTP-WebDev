window.addEventListener("DOMContentLoaded", fLoad);

// Function fLoad
function fLoad(){
    console.log("Inside fLoad");
    let lgnbtn = document.getElementById("login");
    let rstbtn = document.getElementById("reset");

    lgnbtn.addEventListener('click', fValidation);
    rstbtn.addEventListener('click', fReset);

}

// Function fValidation
// When no value present in the text box and if the submit button is clicked the text box turns red
// If text is present the text box turns green
function fValidation(){
    let txtip =  document.querySelectorAll("input[type='text']");
   console.log("Inside fValidation");
    for(let i =0;i<txtip.length;i++){
        let input = txtip[i];
        if(input.value.length == 0)
            input.style.background = "red";
        else{
            input.style.background = "green";
        }
    }
    return false;
}

// Function fReset
// When clicked on the reset button all the values get vanished as well color gets vanished if present
function fReset(){
    let txtip =  document.querySelectorAll("input[type='text']");
    console.log("Inside fReset");

    for(let i=0;i<txtip.length;i++){
        let input = txtip[i];
        
        input.style.background = '';
        input.value = '';
    }
}