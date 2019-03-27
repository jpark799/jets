let Jet = function(color, size) {
  this.color = color;
  this.size = size;

  this.fly = function() {
    console.log('whoooooosh!!!');
  };

<<<<<<< HEAD
  this.takeOff = function () {
    console.log('lift off!!!');
  }
}

=======
  this.takeOff = function() {
    console.log('lift off!');
  };
};
>>>>>>> 5c8d4dedf5b05d17061016adde5ec96597b6a282

module.exports = Jet;
