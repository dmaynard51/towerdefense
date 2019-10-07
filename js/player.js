game.Player = me.Sprite.extend({
    init: function () {

        var image = me.loader.getImage("player");
        this._super(me.Sprite, "init", [me.game.viewport.width / 2 - image.width / 2, me.game.viewport.height - image.height - 20, { image: image }]);
        
     
  
        this.velx = 450;
        this.maxX = me.game.viewport.width - this.width;
        
        // add a default collision shape. Add a body for for physics (collision)
        this.body = new me.Body(this);
 
        this.body.addShape(new me.Rect(2, 2, this.width, this.height));
        
        this.body.setVelocity(0, 0);
        this.body.collisionType = me.collision.types.PLAYER_OBJECT;
        
        this.isKinematic = false;

    },
   
    onCollision: function (res, other) {
        if (other.body.collisionType === me.collision.types.ENEMY_OBJECT) {
            //me.game.world.removeChild(this);
            game.playScreen.enemyManager.removeChild(other);         
            me.game.pause(1)
            return true;
        }
    },    
    
    update: function (time) {
        this._super(me.Sprite, "update", [time]);
      
        if (me.input.isKeyPressed("left")) {
          this.pos.x -= this.velx * time / 1000;
        }

        if (me.input.isKeyPressed("right")) {
          this.pos.x += this.velx * time / 1000;
        }

        if (me.input.isKeyPressed("shoot")) {
            me.game.world.addChild(me.pool.pull("laser", this.pos.x - game.Laser.width, this.pos.y - game.Laser.height))
        }
        
        this.pos.x = me.Math.clamp(this.pos.x, 0, this.maxX);
        
        this.body.update();  
        me.collision.check(this);        
        
        return true;
    },
    

    
});
