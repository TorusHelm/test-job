"use strict";
var	i = 2;

$(document).ready(function() {

	$("[header-scroll], [js__button-scroll]").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			header = parseInt($('[header-scroll]').css('height')),
		    top = $(id).offset().top - header;
		$('body,html').animate({scrollTop: top}, 800);
	});

	$("[categories=1]").chained("[runner=1]");

	function myJax() {
		$.ajax({
			type: "GET",
			url: "ajax/player.html",
			success: function (response) {
				var aOne = document.createElement('div');
					$(aOne).addClass('form__item');
					// aOne.innerText = response;
					$(aOne).html(response).find('.form__player label').html('Участник №' + i);
					$(aOne).find('[runner]').attr('runner', i);
					$(aOne).find('[categories]').attr('categories', i);
					$('.form__players').append(aOne);
					$("[categories="+i+"]").chained("[runner="+i+"]");
					asd();

					i++;
			}
		});
	}
	myJax();
	myJax();

	function asd() {
		$('[categories]').off('change').on('change', function() {
			var summ = 0;
			$('[categories] option:selected').each(function(i, e){
				var a = $(e).attr('summ');
				if ( typeof a != 'undefined')
					summ += Number(a);	
			});
			$('.form__rubles').html(summ + ' руб.');
			console.log(summ);
		});
		$('.form__close').off('click').on('click', function() {
			$(this).parent('.form__item').remove();
			i--;
			$('[categories]').trigger('change');
		});
	}

	asd();


	// $("#series").remoteChained({
	//     parents : "#mark",
	//     url : "/distance.json"
	// });


	// $('[js__select-type]').selectmenu();
	// $('[js__select-distance]').selectmenu({
	// 	disabled: true
	// });


	// $( "[js__select-type]" ).on( "selectmenuselect", function() {
	// 	$('[js__select-distance]').selectmenu(
	// 		"option", {
	// 			disabled: false,
	// 			refresh: true
	// 		}
	// 		);
	// } );


	// $('[js__select-type]').on('selectmenuselect', function (e, ui) {
		
		// $(this).parents('.form__item').find('[js__select-distance]').selectmenu("option",{disabled: false}, "refresh");

		// $(this).parents('.form__item').find('[js__select-distance]').selectmenu({
		// 	appendTo:;
		// });

		// var distance_opt = $(this).parents('.form__item').find('.form__distance select option'),
		// 	opt = $('.from').find('option'),
		// 	distance = $(this).parents('.form__item').find('.form__distance select');


		// console.log(distance_opt);

		// distance_opt.detach();

		// distance.addClass('d-none');

		//distance.append('<option value="11">a sdasdsadsad <b>asdasdasd</b></option><option value="12">10 км <b>asdsads</b></option>');

	// 	if(ui.item.value === '1') {
	// // 	//	distance.append('<option value="11">2 км <b>бесплатно</b></option><option value="12">10 км <b>бесплатно</b></option>');
	// // 		distance.append($('.2')),
	// // 		distance.append($('.3'))
	// 	}
	// 	else if(ui.item.value === '2') {
	// // 	//	distance.append('<option value="11">2 км <b>150 руб.</b></option><option value="12">10 км <b>150 руб.</b></option>');
	// // 		distance.append($('.4')),
	// // 		distance.append($('.5'))
	// 	}
	// 	else if(ui.item.value === '3') {
	// 	//	distance.append('<option value="11">2 км <b>350 руб.</b></option><option value="12">10 км <b>350 руб.</b></option>');
	// 		distance.append($('.6')),
	// 		distance.append($('.7'))			
	// 	}
	// 	else if(ui.item.value === '4') {
	// 	//	distance.append('<option value="11">2 км <b>350 руб.</b></option><option value="12">10 км <b>500 руб</b></option>');
	// 		distance.append($('.8')),
	// 		distance.append($('.9'))			
	// 	}
	// 	else if(ui.item.value === '5') {
	// 	//	distance.append('<option value="11">2 км <b>350 руб.</b></option><option value="12">10 км <b>350 руб.</b></option>');
	// 		distance.append($('.10')),
	// 		distance.append($('.11'))			
	// 	}
	// 	else if(ui.item.value === '6') {
	// 	//	distance.append('<option value="11">2 км <b>300 руб.</b></option><option value="12">10 км <b>300 руб.</b></option>');
	// 		distance.append($('.12')),
	// 		distance.append($('.13'))			
	// 	}
	// }); 


	$('[more-players]').click(function(){

		var players = $('.form__item').length;

		if(players <= 9) {

		console.log(players);

			myJax();
		}
		else {
			console.log('enough');
		}


	});

	$('#main-date').datepicker({
		changeMonth: true,
		changeYear: true,
		showOn: "button",
		buttonImage: "images/datepick.png",
		buttonImageOnly: true,
		buttonText: "Select date"
	});

	$('#main-date').mask('99/99/9999');
	$('#main-phone').mask('+79999999999');

});

$(window).scroll(function () {

	var header_h = parseInt($('.header').css('height'));
	console.log(header_h);

	if ($(this).scrollTop() > header_h) {
		$('[sticky-header]').addClass('header_sticky');
	} else {
		$('[sticky-header]').removeClass('header_sticky');
	}
});
