// toggle checked and unchecked
$("li").on("click", function(){
    $(this).toggleClass("completed");
});

// add delete function
$("span").on("click", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove(); // don't just fade out, remove the element
    });
    event.stopPropagation(); // prevent event bubbling
});