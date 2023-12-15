$(function(){
    $(".delete").click(fDeleteRow);
    $(".delete").mouseover(fMousePointer);
    $("#even, #odd").change(fAlternateRow);
    fAlternateRow();
})

//This function applies same color to alternated rows
function fAlternateRow(){
    // console.log("fAlternateRow");
    $("tr:even").css({"background-color": $("#even").val()});
    $("tr:odd").css({"background-color":$("#odd").val()});
}

//When mouse cursor hovered over delete button, the cursor changes to pointer 
function fMousePointer(){
    // let deleteBtn = document.getElementsByClassName("delete");
    $(this).css('cursor', 'pointer');
}

//This function deletes a row from table and maintains the color combination
function fDeleteRow(){
    // let deleteBtn = document.getElementsByClassName("delete");

    let tr = $(this).closest('tr');

    tr.fadeOut(2000, function(){
        tr.remove();
        fAlternateRow();
    })
}