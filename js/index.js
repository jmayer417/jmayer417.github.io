$(function(){
	$('#projectAcontent').hide();
	$('#projectBcontent').hide();
	$('#projectCcontent').hide();

        function toggleProjectA(){
          // slideUp if #name is being displayed
          // or slideDown if the #name is hidden
          $('#projectAcontent').slideToggle();
        }

        function toggleProjectB(){
        	$('#projectBcontent').slideToggle();
        }

        // Call the toggleName function when 
        // element matching the selector of #button is clicked
        $('#projectA').click(toggleProjectA);
        $('#projectB').click(toggleProjectB);
});