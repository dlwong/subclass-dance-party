var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  // this = Object.create(makeBlinkyDancer.prototype);
  // var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  makeDancer.call(this, top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  // this.hello = 'hello';
  // console.log(makeDancer)
  this.oldStep = this.step();
  // this.oldStep = this.step;
  
  // return this;
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  // var counter = 0;
  // counter++;
  // console.log(counter)
  this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
  console.log('sdf')
};



