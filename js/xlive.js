jQuery('document').ready(function(){

	jQuery('.service-list .btn-toggle').on('click', function(){

		var list_service = jQuery(this).parent().parent();
		list_service.toggleClass('on');
		list_service.siblings().removeClass('on')

	});

});