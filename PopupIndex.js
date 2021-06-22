<script>
if (document.cookie.indexOf("MS_USER_COOKIE") > -1) {
    window.onload = function () {
      // alert("user actively logged in during this session");
    }
} else { 
     // alert("user not actively logged in during this session"); 
      var poppy = sessionStorage.getItem('myPopup');
      if(poppy !== "true"){
	  setTimeout(function(){
        // makes the pop up display, fires the utag and sets poppy variable to true
        jQuery('.sparks_popup_housing').addClass('sparks_popup_reveal');
        sessionStorage.setItem('myPopup','true');
		        // closes the popup
        jQuery('#svg_close_x_sparks_popup').click(function() {
          jQuery('.sparks_popup_housing').removeClass('sparks_popup_reveal');
          jQuery('.sparks_popup_housing').fadeOut(500);
          sessionStorage.setItem('myPopup','true');
		  
        });
        // button click
        jQuery('#Sign in now').click(function() {
          sessionStorage.setItem('myPopup','true');
		  
        });
      }, 10000); // closes initial setInterval function
      } // closes if statement if poppy is not true
}  
</script>