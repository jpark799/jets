let Jet = function(color, size) {
  this.color = color;
  this.size = size;

  this.fly = function() {
    console.log('whoooooosh!!!');
  };

  this.takeOff = function() {
    console.log('lift off!');
  };
};

module.exports = Jet;
