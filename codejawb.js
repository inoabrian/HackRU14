if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to your worst nightmare.";
  };
  
  Template.hello.player1 = function() {
	return "Josh";  
  };
  
  Template.hello.player2 = function() {
	return "Andrew";  
  };
  
  Template.hello.events({
    'click input': function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
