var zip;

function ZipcodeInput() {
var userzip = document.getElementById("zip").value;

//error check - make sure the user put something in//
if(userzip === ""){
  alert("You didn't enter a zipcode!");
  return;
}
// find our country's lat and long//
var query = "https://opentable.herokuapp.com/api/restaurants?zip=" +userzip;
query= query.replace(/ /g, "%20")
// alert(query);

var zipRequest = new XMLHttpRequest();
zipRequest.open('GET', query, false);
// send the request, and see the output//
zipRequest.send();

//only want to pan if the info is correct//
if(zipRequest.readyState !=4 || zipRequest.status !=200 || zipRequest.responseText === ""){
  window.console.error("Oh no! Your request had an error!");
  return;
}

//get the country information//
var zipInformation = JSON.parse(zipRequest.responseText);


// document.getElementById("zipInformation")
document.getElementById(zipInformation);
// alert("Information" + zipInformation.length);

var i;
var name;
var address;
var phone;
var reserve_url;


var len=zipInformation["restaurants"].length;
var text="";
for (i=0; i<len; i++) {
  var consoleId = zipInformation["restaurants"][i]['id'];
  text += "<strong>" + zipInformation["restaurants"][i]['name'] + "</strong>" + "<br>";
  text += "<blockquote>" + "Address: " + zipInformation["restaurants"][i]['address'] + "</blockquote>" + "<br>";
  text += "<blockquote>" + "Phone: " + zipInformation["restaurants"][i]['phone'] + "</blockquote>" + "<br>";
  text += "<a href= '" + zipInformation['restaurants'][i]['reserve_url'] + "' target='_blank'>" + "<blockquote>" + zipInformation["restaurants"][i]['reserve_url'] + "</blockquote>" + "</a>" + "<br>";
}
document.getElementById("ConsoleInfo").innerHTML = "Here are the number of restaurants near you: " + zipInformation["restaurants"].length;
document.getElementById("ConsoleName").innerHTML = text;

}





function tabulateAnswers() {
  // initialize variables for each choice's score
  // If you add more choices and outcomes, you must add another variable here.
  var c1score = 0;
  var c2score = 0;
  var c3score = 0;


  // get a list of the radio inputs on the page
  var choices = document.getElementsByTagName('input');
  // loop through all the radio inputs

  function resetAnswer() {
    var answerbox = document.getElementById('answer');
    answerbox.innerHTML = "Your result will show up here!";
  }
}
