$(document).ready(function(){
    $nav = $('.navbar');
    $toggleCollapse = $('.toggle-collapse')
});

// click event on toggle menu

$toggleCollapse.click(function(){
    $navbar.toggleClass('collapse')
})