function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier = ml5.imageclassiier('MobileNet',modelLoaded);
}
{
  
  function modelLoaded() {
    console.log('model Loaded');

  }
  function draw(){
    image(video, 0, 300, 300);
    classiier.classiy(video, gotresult );
  }
  var previous_result = '';
}
function gotresult( error, results) {
  if(error) {
    console.error(error);
    } else {
      if((results[0].confidence > 0.5  &&  (previous_result != results[0]. label)){
        console.log(results);
        previous_result = results[0].label;
        var utterThis = new speechSynthesisUtterance(speak_data);
        synth.speak(utterThis)

        document.getElementById("result_object_name").innerhtml = results[0].VIDEO
        label;
        document.getElementById("result_object_accuracy").innerHTML = results
        [0].confidence.tofixed(3);
      }
      }
    }