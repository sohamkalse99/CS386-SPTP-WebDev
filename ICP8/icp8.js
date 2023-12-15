window.addEventListener("submit", fSubmit);

// function fSubmit
function fSubmit() {
    fRadioButtons();
    fTextInputs();
}

// function fRadioButtons
function fRadioButtons() {
    let childElements = document.getElementById('frm');
    for (let i = 0; i < childElements.childNodes.length; i++) {
        if (childElements.childNodes[i].name == 'gender') {
            if (childElements.childNodes[i].checked == true)
                alert(childElements.childNodes[i].value);

        }
    }
}

// function fTextInputs
function fTextInputs() {
    var textIp = document.querySelectorAll("input[type='text']");

    var fullName = "";
    for (var i = 0; i < textIp.length; i++) {
        var ip = textIp[i];
        fullName += ip.value + " ";
    }

    alert(fullName);
}

