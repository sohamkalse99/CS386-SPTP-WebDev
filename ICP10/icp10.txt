$(function () {
    fAnimate();
    $("#btn").click(fCreateLinks);
    $("#btn").click(fAnchorTarget);

})

// Used to create multiple links
function fCreateLinks() {
    // alert('Inside fCreateLinks method');
    $('body').append("<div id='linklist'><h1>List of Links</h1></div>");
    $('a').clone().appendTo('#linklist');
    $('div > a').after('<hr>');
}

//After clicking on the link it opens in new tab in the browser
function fAnchorTarget() {
    // alert('Inside fAnchorTarget method');
    $('a').attr('target', '_blank');
}

//Used to display the image as fade and content of the alt is displayed in an alert
function fAnimate() {
    let alt = $("#intro").attr('alt');
    $('#intro').hide().fadeIn(5000, function () { alert(alt) });
}