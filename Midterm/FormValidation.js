window.addEventListener("load", function(){
    let lgn = document.getElementById("lgn");
    lgn.addEventListener("click", fValidate);

    let rst = document.getElementById("rst");
    rst.addEventListener("click", fReset);
})

function fValidate(){
    let usr = document.getElementById("txtusr");
    let pwd = document.getElementById("txtpwd");
    let userValid = document.getElementById("usrvalid");
    let pwdValid = document.getElementById("pwdvalid");

    if(usr.value.length<8 || usr.value.length>20){
        userValid.innerHTML = "At least 8 and at most 20 characters" ;
        usr.style.background = 'red';
    }else{
        userValid.innerHTML = "" ;
        usr.style.background = '';
    }

    if(pwd.value.length<8 || pwd.value.length>20){
        pwdValid.innerHTML = "At least 8 and at most 20 characters";
        pwd.style.background = 'red';
    }else{
        pwdValid.innerHTML = "";
        pwd.style.background = '';
    }

    if (usr.value.length < 8 || usr.value.length > 20 || pwd.value.length < 8 || pwd.value.length > 20) {
        alert("Form Validation Failed");
        event.preventDefault();
    }
}

function fReset() {

    let usr = document.getElementById("txtusr");
    let pwd = document.getElementById("txtpwd");

    let userValid = document.getElementById("usrvalid");
    let pwdValid = document.getElementById("pwdvalid");

    usr.value = "";
    pwd.value = "";
    userValid.innerHTML = "";
    pwdValid.innerHTML = "";
    usr.style.backgroundColor = "";
    pwd.style.backgroundColor = "";
}