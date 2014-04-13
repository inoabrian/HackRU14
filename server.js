var express = require('express')
  ,app = express()
  , server = require('http').createServer(app)
  , io = require('socket.io').listen(server)
  , path = require('path');

server.listen(8000);

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/codejawb.html');
});
app.use(express.static(path.join(__dirname, 'public')));


var socketsArray = new Array();
var timer = null;
var questionArray = new Array();
  questionArray.push("Using variables a and b generate an out put and store in variable c where c = 20.");
  questionArray.push("Create a for loop that returns an array with the vowels in order.");
  //questionArray.push("Print out the first 3 letters of the word (programmers).");
  //questionArray.push("Print out the remainder of 23/2");
  //questionArray.push("");

var answerArray = new Array();
  answerArray.push("var a = 5; var b = 4; var c = a*b;");
  answerArray.push("var a = new Array(); for(var i = 0; i < 5; i++){a.push(i+1); }");
 
 
 var usernames = {};

var rooms = ['Lobby'];

 
	io.sockets.on('connection', function (socket) {
  		socketsArray.push(socket);
  		socket.emit('news', { hello: 'world' });
  		socket.on('my other event', function (data) {
    	console.log(data);
	});
  
  socket.on('startround', function (data) {
  		
  		var triggered = false;
  		var seconds = 120;
  		var max = 120;
  		timer = setInterval(function(){
  		    seconds -= 1;
  			for(var i = 0; i < socketsArray.length; i++){
    			socketsArray[i].emit('time-elapsed', {seconds:seconds, max:max}); // call time-elapsed each time a second passes in time.
   				
   			}
   			if(seconds <= 0){
   				clearInterval(timer);
   				socket.emit('round-ended'); // call when time hits ZERO.
   			}
   			if(triggered == false){
   				//$('#startbtn').prop( "disabled", true );
   				socket.emit('disable-btn'); // call when session has begun to disable start button
   			}
   			
  		}, 1000);
  		for(var i = 0; i < socketsArray.length; i++){
    		socketsArray[i].emit('roundstart', {time:max, question:questionArray[ Math.floor(Math.random() * questionArray.length) ]});
   		}
  });
  
  socket.on('player-submission',function(data){
  	//var editor = ace.edit("editor");
  	//var getlength = editor.getSession().getLength();  
    //var whatsthis = editor.getSession().getLines(0,getlength);
  	//console.log(data.code);
  	//console.log('Length: ' + data.getlength)
  	var answerline = "";
  	for(var i = 0; i < data.code.length; i++)
  	{
  		answerline += data.code[i];
  	}
  	if(answerline == answerArray[0]){
  		var points = 25;
  		clearInterval(timer);
  		socket.emit('correct-answer', {points: points});
  	}
  	
  });
  
	/*socket.on(function(data){
		
	});*/
	  
});