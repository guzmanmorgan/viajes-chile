$(document).ready(function () {

	//CAMBIO DE COLOR EN BARRA NAVBAR
	$(window).scroll(function () {
		$('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
	});

	// TOOLTIP BOOSTRAP 5.1
	var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
	var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
		return new bootstrap.Tooltip(tooltipTriggerEl)
	})

	// MODAL BOOSTRAP 5.1
	$('#myModal').on('shown.bs.modal', function () {
		$('#myInput').trigger('focus')
	})








});
