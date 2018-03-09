// submit on enter
$("#say-input").keypress(function(event) {
    if (event.which == 13) {
        event.preventDefault();
        $("#say").submit();
    }
});
