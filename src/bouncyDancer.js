var makeBouncyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img src="tomatoDancer.png" class="dancer">');
//   this.$node = $('<div class="bouncy"></div>');

  this.setPosition(top, left);
};

makeBouncyDancer.prototype = Object.create(makeDancer.prototype);
makeBouncyDancer.prototype.constructor = makeBouncyDancer;

makeBouncyDancer.prototype.step = function() {
//   console.log(this)
  var oldStep = makeDancer.prototype.step.bind(this);
  oldStep();
  this.$node.slideToggle();

};

makeBouncyDancer.prototype.setPosition = function(top, left) {
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  };
  