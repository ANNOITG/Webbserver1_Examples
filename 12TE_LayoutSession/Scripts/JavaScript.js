/// <reference path="jquery-2.0.3.min.js" />
$(document).ready(function () {
    $('li').click(function () {
        $('p').animate({left:'250px'});
    });
});