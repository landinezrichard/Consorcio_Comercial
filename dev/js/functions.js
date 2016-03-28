$(document).ready(function() {

	/**/
	var arrow_izq ='<span class="icon-chevron-thin-left"></span>';
	var arrow_der ='<span class="icon-chevron-thin-right"></span>';

	/*Banner del Index*/
	$('.Banner-slides.owl-carousel').owlCarousel({
		// itemsCustom: [
		// 	[0, 1]
		// ],
		nav: true,
		autoPlay: false,
		slideSpeed: 1000,
		pagination: true,
		loop:true,
		responsive: {
			0:{
				items:1
			}
		}
	});

	/*Slider Otros Proyectos*/
	$('.Index-itemSlideCarousel.owl-carousel').owlCarousel({		
		nav: false,
		autoPlay: false,
		slideSpeed: 1000,
		pagination: true,
		loop:true,
		responsive: {
			0:{
				items:1
			}
		}
	});

	/*Modificar los controles del Owl*/
	$.each($('.owl-prev'),function(elemento){
			$(this).html(arrow_izq);
	});

	$.each($('.owl-next'),function(elemento){
			$(this).html(arrow_der);
	});

});