//initialize the app with the input hidden
function init(){
    $("input[type='text']").hide();
}

init();

// add click and keypress listeners

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

// listener for input
$("input[type='text']").on("keypress",function(event){
    if (event.which === 13){
        let text = $(this).val();
        $(this).val("");
        //creat new li and add to ul
        $("ul").append("<li> <span><i class='fa fa-trash' aria-hidden='true'></i></span> " + text +" </li>");
    }
});

// listener for adding new To Do
$(".fa-plus").on("click", function(){
    $("input[type='text']").fadeToggle();
});