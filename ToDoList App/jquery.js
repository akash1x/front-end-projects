$("ul").on("click", "li", function() {
    $(this).toggleClass("done")
})

$("ul").on("click", "span", function(e) {
    e.stopPropagation();
    $(this).parent().fadeOut(300, function() {
        $(this).remove();
    });
})

$("#inp").keypress(function(event) {
    if (event.which === 13) {
        var inpText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class=\"fas fa-trash \"></i></span>" + inpText + "</li>");
    }
})