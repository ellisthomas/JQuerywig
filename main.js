var outputEl = document.getElementById("outputEl");
var userInput = document.getElementById("userInput");
// var output = document.getElementById("output");
var containerEl = document.getElementsByClassName("person__container");
var outputBioEdit = document.getElementById("userEditText");
var clicked;


var people = [{
    name: "Michael Jordan",
    title: "Air Jordan",
    bio: "Michael Jeffrey Jordan, also known by his initials, MJ, is an American retired professional basketball player, businessman, and principal owner and chairman of the Charlotte Hornets. Jordan played 15 seasons in the National Basketball Association (NBA) for the Chicago Bulls and Washington Wizards. His biography on the NBA website states: By acclamation, Michael Jordan is the greatest basketball player of all time. Jordan was one of the most effectively marketed athletes of his generation and was considered instrumental in popularizing the NBA around the world in the 1980s and 1990s.",
    image: "https://s-media-cache-ak0.pinimg.com/236x/a1/a0/2f/a1a02f1b785609a7c3315c78128ec27d.jpg",
    lifespan: {
        birth: "February 17, 1963",
        death: "N/A",
    }
},
 {
    name: "Randy Moss",
    title: "Moss",
    bio: "Randy Gene Moss is a former American football wide receiver who played 14 seasons in the National Football League (NFL). He holds the NFL single-season touchdown reception record (23 in 2007), the NFL single-season touchdown reception record for a rookie (17 in 1998), and is second on the NFL all-time regular season touchdown reception list with 156. He is widely considered to be among the greatest wide receivers of all-time.",
    image: "https://s-media-cache-ak0.pinimg.com/564x/e6/f6/7d/e6f67da119645910538452e019b85c2f.jpg",
    lifespan: {
        birth: "February 13, 1977",
        death: "N/A",
    }
},
 {
    name: "Michael Johnson",
    title: "Superman",
    bio: "Michael Duane Johnson is a retired American sprinter. He won four Olympic gold medals and eight World Championships gold medals. He formerly held the world and Olympic records in the 200 m and 400 m as well as the world record in the indoor 400 m.He is the only male athlete in history to win both the 200 metres and 400 metres events at the same Olympics, a feat he accomplished at the 1996 Summer Olympics in Atlanta. Johnson is also the only man to successfully defend his Olympic title in the 400 m.",
    image: "http://media3.s-nbcnews.com/i/newscms/2016_27/1141336/michael-johnson-olympics-today-160706-tease_9cc50f4f84abe51822f591bed5695675.jpg",
    lifespan: {
        birth: "September 13, 1967",
        death: "N/A",
    }
}, 
{
    name: "Muhammad Ali",
    title: "Gut Punch",
    bio: "Muhammad Ali was an American professional boxer and activist. He is widely regarded as one of the most significant and celebrated sports figures of the 20th century. From early in his career, Ali was known as an inspiring, controversial, and polarizing figure both inside and outside the ring.",
    image: "http://ndigo.com/wp-content/uploads/2016/06/Ali-boxing-ndigo-chicago.jpg",
    lifespan: {
        birth: "January 17, 1942",
        death: "June 3, 2016",
    }
}];

function editBio(){
    var clickedCard = $(".clicked").find("span").text();
    console.log(clickedCard);
    $("#userInput").val(clickedCard);
}          

function copyText(event) {
    if (event.keyCode !== 13) {
        $(".clicked").find("span").text($("#userInput").val());
    } else {
        $("#userInput").blur();
        $("#userInput").val("");
        $(".clicked").removeClass("clicked");
    }
}    
//////////////// JQuery write to DOM /////////////////////

$.each (people, function (index,value) {
    index += 1;
    $("#outputEl").append(`<person class="card">`);
    $(".card:nth-of-type(" + index + ")").append(`<header><h2>${value.title}<h2><h3>${value.name}</h3></header>`);
    $(".card:nth-of-type(" + index + ")").append(`<section><span>${value.bio}</span><br><img class="bioPic" src=${value.image}></section>`);
    $(".card:nth-of-type(" + index + ")").append(`<footer><h3>Born: ${value.lifespan.birth}<br>Died: ${value.lifespan.death}</h3></footer>`);
});

$("person").addClass("person__container");


//Change border of card selected and gain focus on input field

$(".person__container").click(function() {
    $(this).siblings().removeClass("clicked");
    $(this).siblings().addClass("unclicked");

    $(this).addClass("clicked");
    $("#userInput").focus(); 
    editBio();
});    

//Add user input to input field

$("#userInput").keyup(function(event) {
    copyText(event);
});


