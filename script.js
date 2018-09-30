
$("#googleButton").click(getGoogleData);
$("#govButton").click(getGovData);

function getGoogleData(){
  var theHTML = '';
  $.getJSON("itpGoogle.json",function(json){
    for(var i = 0; i < json.length ; i++){
      theHTML += "<div id='physicalLocation'>";
      theHTML += "<p>" + json[i].physicalLocation + "<p>";
      theHTML += "</div>";
    };

       $('#physicalLocation').html(theHTML);
       let textInput = document.querySelector('#physicalLocation').textContent;
       console.log(textInput);
       // speak(textInput);
  });

};

function getGovData(){
  //get data from both itp and home JSON
  //display data side by side:
    //create 2 column divs
    //
  var theHTML = '';
  $.getJSON("homeGov.json",function(json){
    for(var i = 0; i < json.length ; i++){
      theHTML += "<div id='physicalLocation'>";
      theHTML += "<p>" + json[i].physicalLocation + "<p>";
      theHTML += "<p>" + json[i].isp  + "<p>";

      theHTML += "</div>";
    // $("#physicalLocation").append(json[i].physicalLocation);
    console.log(json[i].physicalLocation);
    };
       $('#physicalLocation').html(theHTML);
  });
};

//speech stuff
const synth = window.speechSynthesis;

const speak = text => {
  if (synth.speaking) {
    console.error('speechSynthesis.speaking');
    return;
  }
  let utterThis = new SpeechSynthesisUtterance(text);
  // utterThis.pitch = 2;
  // utterThis.rate = 0.5;
  synth.speak(utterThis);
  //when any other action, stop speaking
};
