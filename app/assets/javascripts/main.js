
/*Particle prototype to compute each particle movment and lyfecicle
Code from http://codepen.io/soulwire/pen/foktm */
function Particle( x, y, radius ) {
    this.init( x, y, radius );
}

Particle.prototype = {
    
    init: function( x, y, radius ) {
    
        this.alive = true;
    
        this.radius = radius || 10;
        this.wander = 0.15;
        this.theta = random( TWO_PI );
        this.drag = 0.92;
        this.color = '#fff';
    
        this.x = x || 0.0;
        this.y = y || 0.0;
    
        this.vx = 0.0;
        this.vy = 0.0;
    },
    
    move: function() {
    
        this.x += this.vx;
        this.y += this.vy;
    
        this.vx *= this.drag;
        this.vy *= this.drag;
    
        this.theta += random( -0.5, 0.5 ) * this.wander;
        this.vx += sin( this.theta ) * 0.1;
        this.vy += cos( this.theta ) * 0.1;
    
        this.radius *= 0.96;
        this.alive = this.radius > 0.5;
    },
    
    draw: function( ctx ) {
    
        ctx.beginPath();
        ctx.arc( this.x, this.y, this.radius, 0, TWO_PI );
        ctx.fillStyle = this.color;
        ctx.fill();
    }
};


/* Jquery Dom Ready */
$(function(){
	
  /* Enable Pusher Library logs to console */
  Pusher.logToConsole = true;
	
  /* Initialise a new pusher object with the APP keys */
  var pusher = new Pusher('29d01404cb03899e6396', {
                          cluster: 'eu',
                          encrypted: true
                          });
  /* Grabs a reference of the HTML5 audio object */						  
  var sound = document.getElementById("audio");
  /* Lower's it's volume */
  sound.volume = 0.4;
  
  /* Subscribes to a new pusher channel named 'counter' */
  var channel = pusher.subscribe('counter');
  
  /* Particle Controll vars */
  var MAX_PARTICLES = 280;
  var COLOURS = [ '#69D2E7', '#A7DBD8', '#E0E4CC', '#F38630', '#FA6900', '#FF4E50', '#F9D423' ];  
  var particles = [];
  var pool = [];
  
  /* Initializes a new Sketch object */
  var demo = Sketch.create({
                           container: document.getElementById( 'background' )
                           });
  
 
  /* Particle Spawn Method */
  demo.spawn = function( x, y ) {
  
    if ( particles.length >= MAX_PARTICLES )
        pool.push( particles.shift() );
  
    particle = pool.length ? pool.pop() : new Particle();
    particle.init( x, y, random( 5, 40 ) );
  
    particle.wander = random( 0.5, 2.0 );
    particle.color = random( COLOURS );
    particle.drag = random( 0.9, 0.99 );
  
    theta = random( TWO_PI );
    force = random( 2, 8 );
  
    particle.vx = sin( theta ) * force;
    particle.vy = cos( theta ) * force;
  
    particles.push( particle );
  }
  
  
  /* Particle update method */
  demo.update = function() {
  
    var i, particle;
  
    for ( i = particles.length - 1; i >= 0; i-- ) {
  
        particle = particles[i];
  
        if ( particle.alive ) particle.move();
        else pool.push( particles.splice( i, 1 )[0] );
    }
  };
  
  /* Particle draw method */
  demo.draw = function() {
  
    demo.globalCompositeOperation  = 'lighter';
  
    for ( var i = particles.length - 1; i >= 0; i-- ) {
        particles[i].draw( demo );
    }
  };
  
  
  /* Bind a function to the Update action published through the pusher channel, when message arrives the listenner function will update the counter display on the center of the screen while, at the same time a sound will be played and some particles will be spawned in the center of the screen  */
  channel.bind('update', function(data) {
               $('h1').text(data.message);
               sound.play();
               
                    var i, x, y;
               
                    for ( i = 0; i < 30; i++ ) {
                        x = ( demo.width * 0.5 ) + random( -150, 150 );
                        y = ( demo.height * 0.5 ) + random( -150, 150 );
                        demo.spawn( x, y );
                    }
              
               
               });

  /* Some times during my tests the notification arrives before the page finish to reload, i've added a listtener to the submit button click event, that unbinds the 'update' event from pusher channel , preventing the sound and the animation to be played on the client that clicks the button */
  $('input[type=submit]').click(function(){
                                channel.unbind('update');
                                });

});


