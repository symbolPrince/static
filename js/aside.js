"use strict"; 
var $ = window.jQuery; 
$(document).ready(function () { 
    $(".cuhksz-council-botton").click(function () { 
        var t = $(".cuhksz-council-botton").height(), c = $(this).next().height(), n = c + t + 100; 
        console.log(c), console.log(n), $(this).parent().css("height", n), $(this).parent().siblings().css("height", "auto") }), $(".cuhkz-clocs").click(function () { $(this).parent().parent().parent().css("height", "auto") 
    }) 
});
