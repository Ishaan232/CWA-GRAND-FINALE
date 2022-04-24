var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();
function work(){
document.getElementById("textbox").innerHTML="";
recognition.start();
}
recognition.onresult = function(event){
    console.log(event);
    var x=event.results[0][0].transcript;
    console.log(x);
    document.getElementById("textbox").innerHTML = x;
    speak();
}
function speak(){
    var synth = window.speechSynthesis;
    speak_data = document.getElementById("textbox").value;
    var Utter_this= new SpeechSynthesisUtterance(speak_data);
    synth.speak(Utter_this);
    Webcam.attach("camera");
    setTimeout(function(){
img_id="selfie1"
 takesnapshot();
 speak_data="Taking your next selfie in 10 seconds"
 var utter_this=new SpeechSynthesisUtterance(speak_data)
 synth.speak(utter_this)
    },5000);
}
camera=document.getElementById(camera);
Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
 });
 function takesnapshot(){
    Webcam.snap(function(data_uri){
     if(img_id="selfie1")
      document.getElementById("result").innerHTML='<img id="selfie1" src="'+data_uri+'"/>';
      if(img_id="selfie2")
      document.getElementById("result").innerHTML='<img id="selfie2" src="'+data_uri+'"/>';
      if(img_id="selfie3")
      document.getElementById("result").innerHTML='<img id="selfie3" src="'+data_uri+'"/>';
    });
 }
 function save(){
   ex=document.getElementById("voice");
   somethingisback=document.getElementById("anyidofyourchoice").src;
   ex.href=somethingisback;
   ex.click();
 }