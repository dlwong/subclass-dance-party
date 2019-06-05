$(document).ready(function() {
  window.dancers = [];

  /////blinky dancer
  $('.addDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer.$node);
  });

  //////shaky dancer
  $('.addShakyButton').on('click', function(event) {
    var shakyMakerFunctionName = $(this).data('shaky-maker-function-name');

    var shakyMakerFunction = window[shakyMakerFunctionName];

    var shaker = new shakyMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(shaker.$node);
    window.dancers.push(shaker.$node);
  });


});
  //////bouncy dancer
  $('.addBouncyButton').on('click', function(event) {
    var bouncyMakerFunctionName = $(this).data('bouncy-maker-function-name');

    var bouncyMakerFunction = window[bouncyMakerFunctionName];

    var bouncer = new bouncyMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );                                                                                                          
    $('body').append(bouncer.$node);
    window.dancers.push(bouncer.$node);
  });

  //////bouncy dancer
  $('.lineUp').on('click', function(event) {
    var styleSettings = {
      top: 500
    };
    
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].css(styleSettings)
    }
  });

