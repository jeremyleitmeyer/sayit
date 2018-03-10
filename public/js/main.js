var btn   = document.querySelector('#modal-btn')
var modal = document.querySelector('.modal')
var close = document.querySelector('.close')

btn.addEventListener('click', function(){
    modal.classList.remove('hidden')
})

close.addEventListener('click', function(){
    modal.classList.add('hidden')
})

// submit on enter for form
$("#say-input").keypress(function(event) {
    if (event.which == 13) {
        event.preventDefault();
        $("#say").submit();
    }
});
