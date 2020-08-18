// Check off specific to dos by clicking

$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

//Click on X to Delete Todo
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        // grabbing new todo text from from input
        var todoText = $(this).val();
        // clear input
        $(this).val("");
        // create a new li and add to ul
        $("ul").append("<li><span>x </span>" + todoText + "</li>");
    }
})