vex.defaultOptions.className = 'vex-theme-plain';

/*vex.dialog.open({

	message:"Send an email to Kris",
	content: "",
	
			
});*/

$('#contact').click(function(){
	vex.dialog.alert("Coming Soon!");

});

$('#hover-button').click(function(){
		$('.header').toggleClass('inactive');
		$('.footer').toggleClass('inactive');
		
		if($(this).text() == "In-Active"){
			$(this).text("Active");
			$('body').css(paddingBottom: '0px');
			vex.dialog.alert("Please hover your mouse to the left side of the screen to access the menu!");
		}else{
			$(this).text("In-Active");
			$('body').css(paddingBottom: '75px');
		}
			
});