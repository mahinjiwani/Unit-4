
var random_result;
var win = 0;
var lost = 0;   
var previous = 0;

// $(".crystal").attr('class', 'red');
var images = [
    'https://media.indiedb.com/cache/images/games/1/65/64760/thumb_620x2000/TC-Blue-Crystal.png',
    'https://i.ebayimg.com/images/g/5g0AAOSwcUBYTg~T/s-l300.jpg',
    'https://newvitruvian.com/images/transparent-emerald-2.png',
    'https://smhttp-ssl-64693.nexcesscdn.net/media/wysiwyg/crystal-meanings/citrine-glossary.jpg',
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



