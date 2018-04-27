var myArr,
carousel_array=[];
window.onload = function () {
    // TODO:: Do your initialization job

    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
        if(e.keyName == "back")
	try {
	    tizen.application.getCurrentApplication().exit();
	} catch (ignore) {
	}
    });

    // Sample code
   
    
};

$(document).ready(function(){
	
	var xmlhttp = new XMLHttpRequest();
	var url = "http://www.knowledgekids.ca/api/v1/all-tv-app.json";

	xmlhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	         myArr = JSON.parse(this.responseText);
	         getCarousel(myArr);
	      // console.log(JSON.stringify(myArr.carousel[0].image_url.promo_carousel));
	       //console.log(JSON.stringify(myArr.carousel[0].image_url.promo_carousel_retina));
	    }
	};
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
	 function getCarousel(myArr)
     {
		 for(var i=0;i<myArr.carousel.length;i++)
			{
			 carousel_array.push(myArr.carousel[i]);
			console.log(carousel_array[i].image_url.promo_carousel);
			}
     }
	
	//console.log(myArr[0]);
});