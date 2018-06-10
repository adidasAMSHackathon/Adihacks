function start() {
  webgazer.setTracker("clmtrackr"); //set a tracker module
  webgazer.setRegression("ridge"); //set a regression module

  webgazer
    .setGazeListener(function(data, elapsedTime) {
      if (data == null) {
        return;
      }
      var xprediction = data.x; //these x coordinates are relative to the viewport
      var yprediction = data.y; //these y coordinates are relative to the viewport
      // console.log("X: " + xprediction + " Y: " + yprediction);
    })
    .begin();

  webgazer.showPredictionPoints(true);
  // console.log("Webgazer has started");
  //   console.log(webgazer);
  //   webgazer.setTracker("clmtrackr"); //set a tracker module
  //   console.log(webgazer.tracker);
  // var prediction = webgazer.getCurrentPrediction();
  // if (prediction) {
  //   var x = prediction.x;
  //   var y = prediction.y;
  // }
}
