

var random_result;
var win = 0;
var lost = 0;   
var previous = 0;

// $(".crystal").attr('class', 'red');
var images = [
    'http://cdn.shopify.com/s/files/1/1342/5013/products/giant_crystal_blue2_grande.jpg?v=1472097716',
    'https://i.ebayimg.com/images/g/5g0AAOSwcUBYTg~T/s-l300.jpg',
    'https://www.zerotoys.com/v/vspfiles/photos/MAGICALCRYSTALS-3.jpg',
    'https://images.catsolonline.com/cache/TK_656072-500x500.jpg',
]

random_result = Math.floor(Math.random() * 69 ) + 30;

$("#result").html('Random Result: ' + random_result);

for(var i = 0; i < 4; i++){

        var random = Math.floor(Math.random() * 11) + 1;
        // console.log(random);



        var crystal = $("<div>");
            crystal.attr({
                "class": 'crystal',
                "data-random": random
            });    
        crystal.css({
            "background-image": "url('" + images[i] + "')",
            "background-size": "cover"

        });
      $(".crystals").append(crystal);  
}



$(".crystal").on('click', function () {

    var num =  parseInt($(this).attr('data-random'));

    previous += num;

    console.log(previous);

    if(previous > random_result) {
        lost--;

        $("#lost").html(lost);

    }
    else if(previous === random_result){
        win++;

        $("#win").html(win);

    }

});



