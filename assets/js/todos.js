// toggle checked and unchecked
$("ul").on("click", "li",function(){
    $(this).toggleClass("completed");
});

// add delete function
$("ul").on("click", "span",function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove(); // don't just fade out, remove the element
    });
    event.stopPropagation(); // prevent event bubbling
});

$("input[type='text']").on("keypress",function(event){
    if (event.which === 13){
        let text = $(this).val();
        $(this).val("");
        //creat new li and add to ul
        $("ul").append("<li> <span>X</span> " + text +" </li>");
    }
});