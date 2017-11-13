<!-- For more info on jQuery Mobile,  touch gestures and other useful events see : http://api.jquerymobile.com/category/events/ -->

$(document).on("pagecreate","#pageone",function(){
    
    shake.startWatch(onShake, 40);
  
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
        var onShake = function(){
            navigator.notification.beep(1);
        }
        
        $("#myText").text(val);
        
        if (val) {
    navigator.notification.beep(3);
            //vibrate for 2000 milliseconds
navigator.vibrate(2000);
       
} 
        else { 
    navigator.notification.beep(2);
            //vibrate for 200 milliseconds
//wait for 300 milliseconds
//wait for 500 milliseconds
navigator.vibrate([200, 300, 500]);
}
        
  	});  


});

function randomNumber() {
    return !!Math.round(Math.random());
} 


