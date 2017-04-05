var people = [{
    name: "Michael Jordan",
    title: "Air Jordan",
    bio: "Michael Jeffrey Jordan, also known by his initials, MJ, is an American retired professional basketball player, businessman, and principal owner and chairman of the Charlotte Hornets. Jordan played 15 seasons in the National Basketball Association (NBA) for the Chicago Bulls and Washington Wizards. His biography on the NBA website states: By acclamation, Michael Jordan is the greatest basketball player of all time. Jordan was one of the most effectively marketed athletes of his generation and was considered instrumental in popularizing the NBA around the world in the 1980s and 1990s.",
    image: "http://www.famoussportspeople.com/wp-content/uploads/2016/04/michael-jordan-basketball-sport-wallpapers-hd-wallpapers-hd-celebrities-sports-photo-michael-jordan-wallpaper.jpg",
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


var outputEl = document.getElementById("outputEl");
var userInput = document.getElementById("userInput");
var output = document.getElementById("output");
var containerEl = document.getElementsByClassName("person__container");
var clicked;


function toDom() {
    for (var i = 0; i < people.length; i++) {
        // console.log(people[i]);

        outputEl.innerHTML +=
            `<div class="person__container" id="person--${i}">
            <person>
                <header class="child">
                    <h2 class="grandChild"> ${people[i].title}</h2>
                    <h3 calss="grandChild"> ${people[i].name}</h3>
                </header>
                <section class="child">
                    <img class=" grandChild bioPic" src="${people[i].image}"><br>Bio: ${people[i].bio} </section>
                <footer class="child">
                    <p>Birth: ${people[i].lifespan.birth}<br>Death: ${people[i].lifespan.death}</p>
                </footer>
            </person>
        </div>`;
    }
}
toDom();

//Change border of card selected and gain focus on input field

$(".person__container").click(function() {
    $(this).siblings().removeClass("clicked");
    $(this).siblings().addClass("unclicked");

    $(this).addClass("clicked");
    $("#userInput").focus(); //added #id from input field cursor only goes to input field if a card is selected

    // editBio();
});

// Replace bio text with user input text

$("#userInput").change(function() {
    $("bio").value($(this).val());
});

///////////////////////////

// function editBio() {
//     $("#userInput").keyup(function() {
//         $("thisBio").text($(this).val());
//     });
// }







