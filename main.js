// darkMode
$('.checkbox').click(function(){
    if( $('input.checkbox').is(':checked')){
        $('.theme').attr('href', 'dark.css');
    }else{
        $('.theme').attr('href', 'light.css');
    }
});


// NavBar
let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let searchBtn = document.querySelector(".bx-search");

btn.onclick = function() {
    sidebar.classList.toggle("active");
}
searchBtn.onclick = function() {
    sidebar.classList.toggle("active");
}

searchBtn.onclick = function() {
    sidebar.classList.toggle("active");
}