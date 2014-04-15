$(document).ready(function(){
	$('#popup-start').click(function(){
		$('#popup-start').toggleClass('hidden');
		socket.emit('startround');
	});
	
	
	
	$("#submit").click(function(){
		var editor = ace.edit("editor");
  		var getlength = editor.getSession().getLength();  
    	var code = editor.getSession().getLines(0,getlength);
      	socket.emit('player-submission', {code:code, lines:getlength});
    });
});