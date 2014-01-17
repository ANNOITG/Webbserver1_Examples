/// <reference path="jquery-2.0.3.min.js" />


/*.menu ul li:hover {
            background-color: rgba(255, 255, 255, 0.1);
            margin-left: 20px;
        }*/



$(document).ready(function () {
    $('.menu ul li').hover(function () {
        $(this).stop().animate(
            {
            marginLeft: "20px",
            }, 300);
    }, function () {
        $(this).stop().animate(
            {
            marginLeft: "0",
            }, 100);
    });
});