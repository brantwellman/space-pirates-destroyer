class CollisionSphere {
  constructor(loc, radius){
    this.loc = loc;
    this.radius = radius;
  }

  generalCollisionDetected(sphere) {
    return this.loc.dist(sphere.loc) < (sphere.width + this.radius);
  }
}

module.exports = CollisionSphere;
