//-----------------------------
//	DOCUMENT READY
//-----------------------------

$(document).ready(function() {

	//-----------------------------
	//	Like feature
	//-----------------------------
	$('.js-like').on('click', function(event) {
		event.preventDefault();
		$(this).text('Liked!')
		 .closest('.news-item')
		 .addClass('is-liked');
	});

	//-----------------------------
	//	Form visibility
	//-----------------------------
	$('.js-add-link').on('click', function(event) {
		event.preventDefault();
		$('.js-form').toggleClass('is-visible');
	});

	//-----------------------------
	//	Modal visibility
	//-----------------------------
	$('.js-show-modal').on('click', function(event) {
		event.preventDefault();
		$('.js-modal').addClass('is-visible');
		$('.js-modal-overlay').addClass('is-visible');
	});

	$('.js-modal-overlay').on('click', function(event) {
		$('.js-modal').removeClass('is-visible');
		$('.js-modal-overlay').removeClass('is-visible');
	});
});

