  // back end
	
	



// front end
$(document).ready(function() {
	
  $(".movie").click(function() {
		$(".title-details").show();
    $(".title-details").append('<form><div class="show-details">' +
																 '<div class="form-group">' +
                                   '<label for="new-type">Showtime</label>' +
                                   '<input type="text" class="form-control ">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-street">Age</label>' +
                                   '<input type="text" class="form-control new-street">' +
                                 '</div>'  +
                               '</div></form>');
  });

  $("form#new-contact").submit(function(event) {
    event.preventDefault();

	
  });
});