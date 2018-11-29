/*
 * Code for ajaxTime.js
 * 
 * Randeep Singh Sibia, 000750531
 */
var message1;
var message2;
  $(document).ready(function() {
   

   var launchAjax = function () { // event handler for button click
             $(".method").attr("disabled", false);                                                   //enable the element
             $(".types").attr("disabled", false);                                  	             //enable the element
             $("#refresh").attr("disabled", false);                                                  //enable the element
        
            //store input values in variables
            var n = $("select.method").val();
            var t = $(".types").val();
            
            $.get(
                "https://csunix.mohawkcollege.ca/~000750531/private/10065/a5/php/pingen.php",
                {
                name: t,
                method: n
                },
                function (data)  {
                $("#pin").html(data);
                }
            );

       };
        $("#refresh").click(function() { // adds the event handler
       
         //store input values in variables
         var method = $("select.method").val();
         var type = $(".types").val();
         var type1 = "ASCII";
         var type2 = "Random";
                
         if( method == type1 ||  method == type2 && type.length != 0){

          //fadeOut the error message
          $("#error").fadeOut();
	 
          //disable the elements	 
          $(".method").attr("disabled", true);
          $(".types").attr("disabled", true); 
          $("#refresh").attr("disabled", true); 

          $("#pin").html("Getting PIN");                                                                 //print message on second division

         setTimeout(function(){ $("#pin").html("Hover here to show the PIN");  }, 2000);                 //re-print message on second division after some time
      
         var counter = 0;
         //function display pin when mouse cursor hover over second divsion 
         $("#pin").mouseenter(function(){
         if(counter == 0)
         {
            $("#pin").css("background-color", "lightgrey");
            $("#pin").html(launchAjax);
            counter = 1;
         }
        
    });
        //function changes text and style when mouse cursor hover over second divsion 
        $("#pin").mouseleave(function(){
        $("#pin").css("background-color", "lightblue");
        $("#pin").html("Hover here to show the PIN");
        });
     
    } 
    else  
    {
       $("#error").show();
       $("#method_value").html("Please choose a method");
       $(".method").attr("disabled", false);
       $("#refresh").attr("disabled", false); 
    }  
   

   });

 });  
	
  
 
