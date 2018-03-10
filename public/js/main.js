var btn   = document.querySelector('#modal-btn')
var modal = document.querySelector('.modal')
var close = document.querySelector('.close')
var mark  = document.querySelector('.question')
var info  = document.querySelector('.info-box')

btn.addEventListener('click', function(){
    modal.classList.remove('hidden')
})

close.addEventListener('click', function(){
    modal.classList.add('hidden')
})

mark.addEventListener('mouseenter', function(){
    info.classList.remove('hidden')
})

mark.addEventListener('mouseleave', function(){
    info.classList.add('hidden')
})

// submit on enter for form
$("#say-input").keypress(function(event) {
    if (event.which == 13) {
        event.preventDefault();
        $("#say").submit();
    }
});
