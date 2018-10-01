
$("#googleButton").click(getGoogleData);
$("#govButton").click(getGovData);
$("#dribbbleButton").click(getDribbbleData);



function getGovData(){ //getting data from json and displaying
  var govHomeLocHTML = '';
  var govHomeIspHTML = '';
  $.getJSON("homeGov.json",function(json){
    for(var i = 0; i < json.length ; i++){
      govHomeLocHTML += "<p>" + json[i].physicalLocation + "<p>";
      govHomeIspHTML += "<p>" + json[i].ISP  + "<p>";
      console.log(json[i].physicalLocation);
    };
       $('#locationHome').html(govHomeLocHTML);
       $('#ispHome').html(govHomeIspHTML);
  });

  //from itp data
  var govItpLocHtml = '';
  var govItpIspHtml = '';
  $.getJSON("itpDataGov.json",function(json){
    for(var i = 0; i < json.length ; i++){
      govItpLocHtml += "<p>" + json[i].physicalLocation + "<p>";
      govItpIspHtml += "<p>" + json[i].ISP  + "<p>";
    console.log(json[i].physicalLocation);
    };
       $('#locationItp').html(govItpLocHtml);
       $('#ispItp').html(govItpIspHtml);
  });
};

function getGoogleData(){ //getting data from json and displaying
//TO DO: get data from home
  var googleHomeLocHTML = '';
  var googleHomeIspHTML = '';
  $.getJSON("homeGov.json",function(json){
    for(var i = 0; i < json.length ; i++){
      googleHomeLocHTML += "<p>" + json[i].physicalLocation + "<p>";
      googleHomeIspHTML += "<p>" + json[i].ISP  + "<p>";
      console.log(json[i].physicalLocation);
    };
       $('#locationHome').html(googleHomeLocHTML);
       $('#ispHome').html(googleHomeIspHTML);
  });

  //from itp data
  var googleItpLocHtml = '';
  var googleItpIspHtml = '';
  $.getJSON("itpGoogle.json",function(json){
    for(var i = 0; i < json.length ; i++){
      googleItpLocHtml += "<p>" + json[i].physicalLocation + "<p>";
      googleItpIspHtml += "<p>" + json[i].ISP  + "<p>";
    console.log(json[i].physicalLocation);
    };
       $('#locationItp').html(googleItpLocHtml);
       $('#ispItp').html(googleItpIspHtml);
  });
};

/*
function getDribbbleData(){ //getting data from json and displaying
  var dribbbleHomeLocHTML = '';
  var googleHomeIspHTML = '';
  $.getJSON("homeGov.json",function(json){
    for(var i = 0; i < json.length ; i++){
      govHomeLocHTML += "<p>" + json[i].physicalLocation + "<p>";
      govHomeIspHTML += "<p>" + json[i].ISP  + "<p>";
      console.log(json[i].physicalLocation);
    };
       $('#locationHome').html(googleHomeLocHTML);
       $('#ispHome').html(googleHomeIspHTML);
  });

  //from itp data
  var googleItpLocHtml = '';
  var googleItpIspHtml = '';
  $.getJSON("itpGoogle.json",function(json){
    for(var i = 0; i < json.length ; i++){
      govItpLocHtml += "<p>" + json[i].physicalLocation + "<p>";
      govItpIspHtml += "<p>" + json[i].ISP  + "<p>";
    console.log(json[i].physicalLocation);
    };
       $('#locationItp').html(googleItpLocHtml);
       $('#ispItp').html(googleItpIspHtml);
  });
};
*/

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
