  /*              Question Array                  */
  var questionArray = new Array();
  //questionArray.push("Create a loop that fills an array with the numbers 1-5 in that order." + <br> + "Then output the array." + <br> + "\r\n//Use these variables." + </br> + "//var i;" + </br> + "\r\n//var output;");
  //questionArray.push("Create a for loop that returns an array with the vowels in order.");
  //questionArray.push("Question3.");
  questionArray.push("Question4.");
  questionArray.push("Question5.");
  /******************End Of Question Array*****************/
  
  
  var max = questionArray.length - 1;
  var min = 0;
  var randomIndex = Math.floor(Math.random() * (max - min + 1)) + min;


  /*              Answer Array              */
  
  var answerArray = new Array();
  answerArray.push('for(var i = 0; i < 5; i++){console.log(i+1);}');

  /*****************End Of Answer Array**************/
  
$(document).ready(function(){
    /******   Set up the Ace Editor     ******/
	var editor = ace.edit("editor");
	editor.setTheme("ace/theme/monokai");
	editor.getSession().setMode("ace/mode/javascript");
    editor.getSession().setUseWrapMode(true);
    editor.getSession().setUseWorker(false);
    
    var seceditor = ace.edit("code");
    seceditor.setTheme("ace/theme/monokai");
    seceditor.getSession().setMode("ace/mode/javascript");
    seceditor.getSession().setUseWrapMode(true);
    seceditor.getSession().setUseWorker(false);
    seceditor.setReadOnly(true);
    
   
    /********************************************/
 
    
    /******       Submit Button Clicked   *******/
    $("#submit").click(function(e){
      e.preventDefault();
      //var trail  = editor.getSession().getDocument();
      var getlength = editor.getSession().getLength();
      //console.log("Length:" + getlength);
      var whatsthis = editor.getSession().getLines(0,getlength);

     //console.log(whatsthis);
      
      var code = "";
      //$("#code").text("");
      for(var line in whatsthis){
          //console.log("A line:" + whatsthis[line]);
          
          code += whatsthis[line];
          code += "\n";
          //$("#code").append(code);
          //$("#code").append('<br>');
      }
        //seceditor.setValue(code);
        //console.log(code);
        seceditor.setValue(code.toString());        
        
      
      //console.log(range);
      //console.log(trail);
      //var code = editor.getValue();
      /**************************************
      var spaceChar = "\u21B5";
      //console.log(spaceChar);
      for(var lines in code){
        console.log(code[lines]);
        if(code[lines] == spaceChar){
          console.log("NEWLINE BITCH");
        }
      }*****/
      /********************************************/
      
      //$("#code").text(code);
      /*var s = document.createElement('script');
      s.type = 'text/javascript';
      try {
        s.appendChild(document.createTextNode(code));
        document.body.appendChild(s);
      } catch (e) {
        s.text = code;
        document.body.appendChild(s);
      }
      //for(var lines in code){console.log(code);}
      //console.log(answerArray[0]);
      //console.log(s.text);
      //var a = s.text.indexOf('f');
      //s.text = code.substring(a);
      //console.log(s.text);
      //console.log(answerArray[0]);
      //if(answerArray[0] == s.text){alert("Congratz!");} */
    });
    /*********************************************/
    
    /*******        Clear Button Clicked    *******/
    $("#clear").click(function(e){
      e.preventDefault();
      var code = "";
      code += editor.setValue("Code here ->");
      seceditor.setValue(code.toString());
    });
	  /***********************************************/
    
	  /********       Side Bar Handler        ********/
   $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("active");
      $("#main_icon").toggleClass("glyphicon glyphicon-chevron-right");
      $("#main_icon").toggleClass("glyphicon glyphicon-chevron-left");
  });
    /************************************************/
});
