window.addEventListener("load", fLoad);

function fLoad() {
    let btn = document.getElementById("btnSend");
    btn.addEventListener("click", fAJAX);
}

// When user clicks on submit button a joke gets displayed in the text area based on the joke category in the drop down list
function fAJAX() {
    // alert("Inside fAJAX method");
    let txtarea = document.getElementsByTagName("textarea")[0];
    txtarea.value = " ";

    let xhr = new XMLHttpRequest();
    let drpDwnLst = document.getElementById("ddlCategory");
    xhr.open('GET', 'https://v2.jokeapi.dev/joke/' + drpDwnLst.value + '?safe-mode&type=single');

    xhr.send();

    xhr.addEventListener("load", function () {
        // console.log("Status"+xhr.status);

        if (xhr.status != 200) {
            console.log("Status: " + xhr.status);
            console.log(xhr.statusText);
        } else {
            console.log(xhr.response);
            const obj = JSON.parse(xhr.response);
            txtarea.value = obj.joke;
        }
    });

}