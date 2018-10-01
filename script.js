
$("#googleButton").click(getGoogleData);
$("#govButton").click(getGovData);
$("#netflixButton").click(getNetflixData);



function getGovData(){ //getting data from json and displaying
  if(synth.speaking == true){
    synth.cancel();
    console.log("logging");
  }

  var govHomeLocHTML = '';
  var govHomeIspHTML = '';
  $.getJSON("homeGov.json",function(json){
    for(var i = 0; i < json.length ; i++){
      govHomeLocHTML += "<p>" + json[i].physicalLocation + "<p>";
      govHomeIspHTML += "<p>" + json[i].ISP  + "<p>";
      // console.log(json[i].physicalLocation);
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
    // console.log(json[i].physicalLocation);
    };
       $('#locationItp').html(govItpLocHtml);
       $('#ispItp').html(govItpIspHtml);

//speak stuff
        var homeText = $('#ispItp p').text();
        var itpText = $('#ispHome p').text();
        // console.log(text);
        speak(homeText);
        speak(itpText);
  });


};

function getNetflixData(){ //getting data from json and displaying

  if(synth.speaking == true){
    synth.cancel();
    console.log("logging");
  }
//TO DO: get data from home
  var netflixHomeLocHTML = '';
  var netflixHomeIspHTML = '';
  $.getJSON("homeNetflix.json",function(json){
    for(var i = 0; i < json.length ; i++){
      netflixHomeLocHTML += "<p>" + json[i].physicalLocation + "<p>";
      netflixHomeIspHTML += "<p>" + json[i].ISP  + "<p>";
      // console.log(json[i].physicalLocation);
    };
       $('#locationHome').html(netflixHomeLocHTML);
       $('#ispHome').html(netflixHomeIspHTML);
  });

/*  //from itp data
  var netflixItpLocHtml = '';
  var netflixItpIspHtml = '';
  $.getJSON("itpNetflix.json",function(json){
    for(var i = 0; i < json.length ; i++){
      googleItpLocHtml += "<p>" + json[i].physicalLocation + "<p>";
      googleItpIspHtml += "<p>" + json[i].ISP  + "<p>";
    // console.log(json[i].physicalLocation);
    };
       $('#locationItp').html(netflixItpLocHtml);
       $('#ispItp').html(netflixItpIspHtml);
  });
    */
  //speak stuff
         var homeText = $('#ispItp p').text();
         var itpText = $('#ispHome p').text();
         // console.log(text);
         speak(homeText);
         speak(itpText);

};


function getGoogleData(){ //getting data from json and displaying
  var googleHomeLocHTML = '';
  var googleHomeIspHTML = '';
  $.getJSON("homeGoogle.json",function(json){
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

      var homeText = $('#ispItp p').text();
      var itpText = $('#ispHome p').text();
      // console.log(text);
      speak(homeText);
      speak(itpText);
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
