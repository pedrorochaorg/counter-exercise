$(function(){
Pusher.logToConsole = true;

var pusher = new Pusher('29d01404cb03899e6396', {
    cluster: 'eu',
    encrypted: true
});

var channel = pusher.subscribe('counter');
    channel.bind('update', function(data) {
        //alert(data.message);
        $('h1').text(data.message);
    });
});