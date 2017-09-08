// - Collect the following metrics about the user's browsing experience
//     - Total time spent on page
//     - What percentage of the page was viewed
//         - If they scroll down, and then back up, record the furthest down they ever scrolled
//     - Time spent hovering the mouse over each element on the page. 
//     - How many vowels were typed into the text area
//         - Count all the text that was typed, not just what ends up in the text-area
//         - Example: If the user typed "hello", then deleted it, and typed "hello" again, you should record that they typed 4 vowels.
//     - If they left the page by clicking a link, record which link they clicked. 

// - When the user leaves the page, console.log all the metrics you've collected.
//     - You can use the `unload` event to run a callback function when the user leaves the page. 
//     - You will need to enable the option 'preserve log' in your dev-tools so that you can view the console.log after leaving the page. 




//Total time spent on page//
$(document).ready(function(){ //when the document is ready, then run this code
	var end = 0;
	var start=Date.now(); //deinfes the time when the window is opened

//     - What percentage of the page was viewed
//         - If they scroll down, and then back up, record the furthest down they ever scrolled
	var maxScroll=0;
	$(window).scroll(function(event) {
		var scrollPercent=Math.round(($(window).scrollTop()/$(document).height()*100))
	//console.log(scrollPercent)
		if (scrollPercent>maxScroll) {
			maxScroll = scrollPercent			
		}
	})


//- Time spent hovering the mouse over each element on the page. 
	var hoverStart;
	var hoverEnd;


	$('#opinionBox').hover(function(){   
		hoverStart = (new Date()).getTime();
		// console.log(hoverStart)
	}, function(){
       	hoverEnd = ((new Date().getTime() - hoverStart) / 1000);
    });


//- How many vowels were typed into the text area
//         - Count all the text that was typed, not just what ends up in the text-area
//         - Example: If the user typed "hello", then deleted it, and typed "hello" again, you should record that they typed 4 vowels.
	var char=0;
	var vcount=0;
	var vowel_list = ["a","e","i","o","u","A","E","I","O","U"];
	var totalString = "" 

	$('#opinionBox').keypress(function(event){
		// console.log(event.target.value) //check here to see what I'm looking at/for
	  if (vowel_list.indexOf(event.key) > -1)
	  { 
	    vcount++;  
	  }
	});
// - If they left the page by clicking a link, record which link they clicked. 
	var url = ''
	$('a').click(function(){
		url=$(this).attr('href')	
	});	
// When the user leaves the page, console.log all the metrics you've collected.
//     - You can use the `unload` event to run a callback function when the user leaves the page. 
//     - You will need to enable the option 'preserve log' in your dev-tools so that you can view the console.log after leaving the page. 
	$( window ).on("unload", function(){
		end = Date.now();
		//console.log(end);
		//console.log(end-start/1000 + " seconds");
	
	console.log('Time on page: ', (end-start/1000 + " seconds"))
	console.log("Maximum scroll precentage: " + maxScroll)
	console.log("You hovered for " + hoverEnd +  " seconds.")
	console.log("Vowel count from text box: " + vcount)
	console.log("Link used to leave the page: " + url)
	});

})//end of (document).ready

