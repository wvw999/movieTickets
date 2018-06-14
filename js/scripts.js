// back end
function Movie(nick, title, rating, image, times) {
  this.nick = nick;
  this.title = title;
  this.rating = rating;
  this.image = image;
	this.times = times;
}

Movie.prototype.populatePageInfo = function() {
       $('#movieInfo').append('<div class="col-md-4">' +
				'<div class="movieContainer" id="' + this.nick + '">' +
				'<img src="' + this.image + '">' +
					'<h2 class="movie">' + this.title + '</h2>' +
					'<h3>rated ' + this.rating + '</h3>' +
				'</div>' +
	  		'<div class="title-details">' +
          '<h3>showtimes</h3>' +
          '<p>' + this.times + '</p>' +
		  	'</div>' +
      '</div>');
}

function pushToPopulate(title) {
  console.log(title);
  title.forEach(function(name) {
  name.populatePageInfo();
  });
}


// front end
$(document).ready(function() {
  var bunny = new Movie("bunny", "Fluffy Bunnies", "G", "img/bun.jpg", [1, 3, 5, 7]);
  var car = new Movie("car", "Fast Car Make Out", "PG-13", "img/car.jpg", [2, 4, 6, 9]);
  var grit = new Movie("grit", "Gritty and Serious", "R", "img/grit.jpg", [4, 6, 8, 10]);
  var titles = [bunny, car, grit];
  pushToPopulate(titles);

  $(".movie").click(function() {
		$(".title-details").show();
//     $('.col-md-4').not().hide();
    $(".title-details").append('<form><div class="show-details">' +
                                 '<div class="form-group">' +
                                   '<label for="new-street">enter your age:</label>' +
                                   '<input type="text" class="form-control new-street">' +
                                 '</div>'  +
                               '</div></form>');
  });

  $("form#new-contact").submit(function(event) {
    event.preventDefault();


  });
});
