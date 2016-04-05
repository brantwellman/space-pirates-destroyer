const CollisionSphere = require('./collision_sphere');
const ObstacleBuilder = require('./obstacle_builder');
const Bullet = require('./bullet');
const Maths = require('./math');
const Vector = require('./vector');

class Turret{
  constructor(loc, radius, width){
    this.loc = loc;
    this.collSphere = new CollisionSphere(loc, radius);
    this.obstacle = ( (new ObstacleBuilder()).turretObstacle(loc, width) );
    this.health = 5;
    this.timer = 0;
  }

  destroyed(){
    return this.health <= 0;
  }

  inCollisionRange(player){
    return this.collSphere.generalCollisionDetected(player.collSphere);
  }

  inFireRange(player){
    return this.loc.dist(player.loc) < 600;
  }

  fire(player, bullets){
    bullets.push(this.makeBullet(player));
    bullets.push(this.makeBullet(player));
    // bullets.push(this.makeBullet(player));
    // bullets.push(this.makeBullet(player));
    this.timer = 0;
  }

  makeBullet(player){
    var rad = this.collSphere.radius;
    var preAxis = new Vector(Math.random(-1.0, 1.0),Math.random(-1.0, 1.0),Math.random(-1.0, 1.0));
    var axis = Maths.scalMult(1/preAxis.mag(), preAxis);

    var pre1 = player.loc.minus(this.loc).plus(Maths.scalMult(1, player.momentum));
    var pre2 = pre1.rotateAround(axis, Math.random(-0.5,0.5));
    var heading = Maths.scalMult(1/pre2.mag(), pre2);
    var location = this.loc.plus(Maths.scalMult(2 * rad, heading));
    return new Bullet(location, heading, 10, 1, player.v);
  }

}

module.exports = Turret;