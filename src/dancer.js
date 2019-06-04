// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.top = top;
  this.left = left;
  // console.log(this)
};

makeDancer.prototype.step = function() {
  console.log(this)
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
  this.setPosition();
};

makeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  // console.log(this)
  // this.$node.css(styleSettings);
};


