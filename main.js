$(document).ready(function(){ //when the document is ready, then run this code
	$('#myNameP').on('click', function() {
		$('#myNameP').addClass('hidden')
		$('#myNameInput').removeClass('hidden')
		$('#myNameInput').trigger('focus')
		$('#myNameInput').val($('#MyNameP').text())
	
	})

	$('myNameInput').on('blur', function(){ 
		$('#myNameP').text($('#myNameInput').val())
		$('#myNameP').removeClass('hidden')
		$('#myNameInput').addClass('hidden')
	})
	///////////////////Section 2/////////////////
	$('#bioP').on('click', function(){
		$('#bioTextArea').val($('#bioP').text())
		$('#bioP').addClass('hidden')
		$('#bioTextArea').removeClass('hidden')
		$('#bioTextArea').trigger('focus')
		
		
	})

	$('#bioTextArea').on('blur', function(){
		$('#bioP').text($('#bioTextArea').val())
		$('#bioP').removeClass('hidden')
		$('#bioTextArea').addClass('hidden')

	})
})