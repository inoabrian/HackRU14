  var room = "abc123";

  var socket = io.connect('http://localhost:8000');
  socket.on('news', function (data) {
    console.log(data);
    socket.emit('my other event', { my: 'data' });
  });
  var time = 0;
  socket.on('roundstart', function (data) {
       $('#question-area').text('// ' + data.question + '\n');
       time = data.time;
  });
  
  /*called for when every second passes */
  socket.on('time-elapsed', function (data) {
  		
  		
       console.log(data.seconds);
    	$('#clockTimer').text(  Math.floor(data.seconds / 60) + ':' + (data.seconds % 60) );
    	if(data.seconds <= (data.max - (data.max * .8)) ){
   				$('#clockTimer').toggleClass('well');
                $('#clockTimer').toggleClass('alert alert-danger');
   		}
  });
  
  // called when session is created to de-activate start button
  socket.on('disable-btn', function (data) {
       //var editor = ace.edit("editor");
       //$('#question-area').text('// ' + data.question + '\n');
    	
    	$('#startbtn').prop( "disabled", true );
    	
  });
  
  
  socket.on('round-ended', function(data){
  		var editor = ace.edit("editor");
  		editor.setReadOnly(true);
  		$('#submit').prop( "disabled", true );
    	$('#clear').prop( "disabled", true );
  });
  
  
  socket.on('correct-answer',function(data){
  	var points = data.points;
  	points += time;
  	$(document).ready(function(){
  		$('#points').text(points);
  		$('#circle-text').text('WINNER');
  		$('#popup-start').toggleClass('hidden');
  		
  	});
  	//console.log(points);
  	socket.emit('round-ended');
  });
