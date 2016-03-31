const Player = require('./player');
const Vector = require('./vector');

class CollisionSphere {
  constructor(loc, radius){
    this.loc = loc;
    this.radius = radius;
  }

  generalCollisionDetected(sphere) {
    return (this.loc.dist(sphere.loc) < (sphere.radius + this.radius));
    debugger
  }

  // frontCollisonDetected(sphere) {
  //   // if collision detected and in front of player
  //   return
  // }
  //
  // backCollisionDetected(spere) {
  //   // if collision detected and behind player
  // }
  //
  // isVisibleTo(player){
  //   return player.head.dot(this.loc.minus(player.loc)) > 0
  // }

}

module.exports = CollisionSphere;