game.PlayScreen = me.ScreenObject.extend({
    checkIfLoss: function (y) {
        if (y >= this.player.pos.y) {
            this.reset();
        }
    },
    /**
     *  action to perform on state change
     */
    onResetEvent: function() {
        me.game.world.addChild(new me.ColorLayer("background", "#000000"), 0);
        this.player = me.pool.pull("player");
        
        
        me.game.world.addChild(this.player, 1);

        me.input.bindKey(me.input.KEY.LEFT, "left");
        me.input.bindKey(me.input.KEY.RIGHT, "right");
        me.input.bindKey(me.input.KEY.A, "left");
        me.input.bindKey(me.input.KEY.D, "right");
        me.input.bindKey(me.input.KEY.SPACE, "shoot", true);


        
        //this.enemyManager2 = new game.EnemyManager(); 

      
        /*
        me.timer.setInterval(function(){
            me.game.world.addChild(me.pool.pull("enemy", 50, 50), 2);
        }, 5000);*/
        //this.enemyManager = new game.EnemyManager();
        //this.enemyManager.createEnemies();
        //me.game.world.addChild(this.enemyManager, 2);          

            //this.enemyManager2 = new game.EnemyManager();
            //this.enemyManager2.createEnemies();  
            //me.game.world.addChild(this.enemyManager2, 2);

            //this.enemyManager = new game.EnemyManager();
            //this.enemyManager.createEnemies();
            //me.game.world.addChild(this.enemyManager, 2);              


            //this.enemyManager = new game.EnemyManager();
            //this.enemyManager.createEnemies();          
            //this.enemyManager.createEnemies2();                 
            //me.game.world.addChild(this.enemyManager, 2);
            me.timer.setInterval(function(){
            me.game.world.addChild(me.pool.pull("enemy", 50, 50), 2);
            }, 2000);  
            /*
            me.timer.setInterval(function(){

            this.enemyManager = new game.EnemyManager();
            this.enemyManager.createEnemies(); 
            me.game.world.addChild(this.enemyManager, 2);
            //me.game.world.addChild(this.enemyManager, 2);  
            }, 5000);     */                   
            
            //me.game.world.addChild(me.pool.pull("enemy", 50, 50), 2);
    },


    /**
     *  action to perform when leaving this screen (state change)
     */
    onDestroyEvent: function() {
        me.input.unbindKey(me.input.KEY.LEFT);
        me.input.unbindKey(me.input.KEY.RIGHT);
        me.input.unbindKey(me.input.KEY.A);
        me.input.unbindKey(me.input.KEY.D);
        me.input.unbindKey(me.input.KEY.SPACE);
    }
});
