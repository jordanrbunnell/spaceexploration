var spaceMission = $(".spaceMission");
var mainBlock = $(".main-block");
var title= $(".title");


function homePage(){
    // var videoTitle;
    $(document).ready(function () {
        // event.preventDefault();
        $(".mainBlock-Contents").empty();
        var divMain = $("<div class='homePageContent'>")
        var homePageContent = $("<p class='homePageTitle' style='font-size: 20px; font-weight: bold; padding:10px'>");
        homePageContent.text("Top Stories");
//         <div id="search">    
//         <input type="text" style="margin-bottom:30px;" name="searchText">
//         <button id="submitBtn" class="fa fa-search"></button>        
//   </div>
        divMain.append(homePageContent);
       
        // h3.append(span);
        var div = $("<form>");
      
        var input = $("<input type='text'  id='search' name='Textsearch'>");
        var button = $("<button id='submitButton' class='searchBox'> <i class='material-icons'>search</i>");
        div.append(input).append(button);
        homePageContent.append(div);
        divMain.append(div);
        mainBlock.append(divMain);
        // Grant CesiumJS access to your ion assets
        var videoTitle=[];
        var hrefValue =[];
        var queryURL1 = "https://images-api.nasa.gov/search?q=Nasa Space Mission&media_type=video";

        $.ajax({
          url: queryURL1,
          method: "GET",
          success: function (response) {
          console.log(response);

          for(var i = 0 ; i<6; i++){
         
             var href= response.collection.items[i].href;
             var title = response.collection.items[i].data[i].title;
             console.log(href);
             console.log("Title"+videoTitle[i]);
             hrefValue.push(href);
             videoTitle.push(title);
          }

          console.log(hrefValue);
          console.log(videoTitle);
         
        for(var j=0; j<6; j++){ 
        $.ajax({
        url: href[j],
        success: function (response1) {
        console.log(response1[j]);
                

                    console.log(response1[j]);
                    if(response1[j].matches("~orig.mp4")){
                        console.log(response1[j]);

                        var video = function (j) {
                            console.log(videoTitle[j]);
                            return ('<div class="video">' +
                              '<p class="title">' + videoTitle[j] + '</p>' +
                              '<img src=' +response1[j]+ 'width="50" height="50">' +
                              '</div>');
                          }
                  
                         divMain.append(video(j));
                         mainBlock.append(divMain);
                    }
                }
            });
    
        }
    }
});
});

}

// AJAX call
     $.ajax({
        url: "https://api.nasa.gov/planetary/apod?api_key=6oFKRPYlitRe8khoY4zxJVrqOqD8GjisXLnWf2PJ",
        method: "GET"
      }).then(function(response) {
        console.log(response)
        const header = document.querySelector("#apod");
        header.setAttribute("style", `background-image:  url(${response.url}); background-position: center; background-repeat: no-repeat; background-size: cover;`);
      });

    $.ajax({
        url: "https://api.nasa.gov/planetary/apod?api_key=6oFKRPYlitRe8khoY4zxJVrqOqD8GjisXLnWf2PJ",	        
        method: "GET"	     
      }).then(function(response) {	     
        console.log(response)
        $("#apod").attr("src", response.url);
    });      


// APOD Button Click
$(document).ready(function () {

   $('.sidenav').sidenav();

   $(".homeBtn").on("click", function(event){
    event.preventDefault();
    homePage();

   });

   $(".apodBtn").on("click",function (event) {
    event.preventDefault();
    $(".homePageContent").empty();
    $(".mainBlock-Contents").empty();
    
    $(".apod").text("About APOD");
  });

// Local Hubble View Button Click
$(".localHubbleViewBtn").on("click", function(event){
    event.preventDefault();
    $(".homePageContent").empty();
    $(".mainBlock-Contents").empty();
   
    $(".localHubbleView").text("Local Sky View");
});

// Near Earth Objects
$(".newEarthObjectsBtn").on("click", function(event){
    event.preventDefault();
    $(".homePageContent").empty();
    $(".mainBlock-Contents").empty();
  
    $(".nearEarthObjects").text("Near Earth Objects");
    
});

// Mars Weather
$(".marsWeatherBtn").on("click", function(event){
    event.preventDefault();
    $(".homePageContent").empty();
    $(".mainBlock-Contents").empty();
  
    $(".marsWeather").text("Mars Weather");
    
});

var APIKey = "unepUpoJglDuNOxtOuPToAdKApZ40RRSvfwIHto6";
var quotes = [
  "Space, the final forntier. -Star Trek",
  "The Earth is the cradle of humanity, but mankind cannot stay in the cradle forever. -Konstantin Tsiolkovsky",
  "I know the sky is not the limit because there are footprints on the Moon - and I made some of them -Buzz Alrdin",
  "There is no sound in outer space",
  "Never limit yourself because of others limited imagination; never limit others becasuse of your own limited imagination. -Mae Jemison",
  "Earth is a small town with many neighborhoods in a very big universe. -Ron Garan",
  "I looked and I looded but I didn't see God. -Yuri Gagarin",
  "Gravity hurts. -Victor Alexandrow",
  "We are limited only by our imagination. -Ron Garan",
  "In the context of general relativity, space almost is a substance. It can bend and twist and stretch, and probably the best way to thing about space is to just kind of imagine a big piece of rubber that you can pull and twist and bend. -Alan Guth",
  "Two things are infinite: the universe and human stupidity, and I'm not sure about the universe. -Albert Einstein",
  "For me, it is far better to grasp the Universe as it really is than to persist in delusion, however satisfying and reassuring. - Carl Sagan",
  "By denying scientific principles, one may maintain any paradox. -Galileo Galilei",
]
function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById("quoteDisplay").innerHTML = quotes[randomNumber];
}
// $(document).ready(function(){
//      // AJAX call
//      $.ajax({
//         url: "https://api.nasa.gov/planetary/apod?api_key=6oFKRPYlitRe8khoY4zxJVrqOqD8GjisXLnWf2PJ",
//         method: "GET"
//       }).then(function(response) {
//         console.log(response)
//         const header = document.querySelector("#apod");
//         header.setAttribute("style", `background-image:  url(${response.url}); background-position: center; background-repeat: no-repeat; background-size: cover;`);
//       });
// })


// Space Mission (Started Working - Yakini)
$(".spaceMissionBtn").on("click",function(event){
    console.log("Got click");
   
   event.preventDefault();
   $(".homePageContent").empty();
    $(".mainBlock-Contents").empty();
   
    var h3 = $("<h3 style='font-size: 22px; font-weight: bold;background-color: rgb(196, 187, 140); padding:15px'>");
    h3.text("Space Mission");
    spaceMission.append(h3);
    var spaceMissionDetails = $("<p class = details>").text("NASA has successfully launched over 200 crewed flights. Two have ended in failure, STS-51-L (the Challenger disaster) in 1986, and STS-107 (the Columbia disaster) in 2003. (Apollo 1 in 1967 lost three crew members but never launched.)");
    
    var table= $("<table class='responsive-table'><thead><tr><th>Program</th><th>Start Date</th><th>End Date</th><th>Launched missions</th><th>Notes</th> </tr> </thead> ");
    var tableContents1 = $("<tbody><tr><td>Mercury Program</td><td>1959</td><td>1963</td><td>6</td><td>First U.S. crewed program</td> </tr>");
    var tableContents2 = $("<tr><td>Gemini Program</td><td>1963</td><td>1966</td><td>10</td><td>Program used to practice space rendezvous and EVAs</td> </tr>");
    var tableContents3 = $("<tr><td>Apollo Program</td><td>1961</td><td>1972</td><td>11</td><td>Brought first human to the Moon</td> </tr>");
    var tableContents4 = $("<tr><td>Skylab</td><td>1973</td><td>1974</td><td>3</td><td>first American space station</td> </tr>");
    var tableContents5 = $("<tr><td>Space Shuttle</td><td>1981</td><td>2011</td><td>135</td><td>First missions in which a spacecraft was reused</td> </tr>");
    var tableContents6 = $("<tr><td>International Space Station</td><td>1998</td><td>Ongoing</td><td>54</td><td>Joint with Roscosmos, CSA, ESA, and JAXA</td> </tr>");
    var tableContents7 = $("<tr><td>Artemis program</td><td>2017</td><td>Ongoing</td><td>0</td><td>Current program to bring humans to the Moon again</td> </tr>");

    spaceMission.append(spaceMissionDetails);
    table.append(tableContents1);
    table.append(tableContents2);
    table.append(tableContents3);
    table.append(tableContents4);
    table.append(tableContents5);
    table.append(tableContents6);
    table.append(tableContents7);
    spaceMission.append(table);
});

// Space Information
$(".spaceInfoBtn").on("click", function(event){
    event.preventDefault();
   
    $(".homePageContent").empty();
    $(".mainBlock-Contents").empty(); 
   
    $(".spaceInfo").text("Space Information");

});
});

$(document).on("click", 'ul a', function(event){
    event.preventDefault();
   
   $('div a').removeClass('active');
   $(this).addClass('active');

   const mq = window.matchMedia( "(max-width: 600px)" );

   if(mq.matches){
        if($('div a').hasClass('active')){
            $(".side-block").empty();
        }
    // }else{
    //     if($('div a').hasClass('active')){
    //         $(".side-block");
    //     }
    }
  
});

homePage();