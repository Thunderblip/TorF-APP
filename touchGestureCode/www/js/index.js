<!-- For more info on jQuery Mobile,  touch gestures and other useful events see : http://api.jquerymobile.com/category/events/ -->

$(document).on("pagecreate","#pageone",function(){
    
  
  	$('#tapholdtext').on("taphold",function(){
    	$(this).hide();
 	});                       

	$('#taptext').on("tap",function(){
    	$(this).css('color', 'red');
 	}); 

	$('#swipetext').on("swipeleft",function(){
    	$(this).css('color', 'green');
  	});   
    
    $('#swipetext').on("swiperight",function(){
    	$(this).css('color', 'blue');
  	});   
    
    $('#TorF').on("tap",function(){
    	 
        //some stuff
        var val = randomNumber();
        
        $("#myText").text(val);
        
   if (val) {
    navigator.notification.beep(1);
       
} else { 
    navigator.notification.beep(2);
}
        
  	});  


});

function randomNumber() {
    return !!Math.round(Math.random());
} 


