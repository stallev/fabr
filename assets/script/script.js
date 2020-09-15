$(document).ready(function() {

    $(".maskedphone").inputmask("+7 (999)-99-99-999");

var submited=false;

	$(".jobs-slider").owlCarousel({
		loop:true,
		nav:true,
		dots:true,
		items:1,
		navText:
		['',
		'']
	});
		
	$(".callback-btn").click(function(){
		$("#callback").modal();
	});
	
	$(".zamer-btn").click(function(){
		$("#zamer-popup").modal();
	});
	
	$(".know-btn").click(function(){
		$("#stoimost-popup").modal();
	});
	
	$(".buy-btn").click(function(){
		var zakazname=$(this).closest(".uslugi-item").find(".uslugi-item-ttl").text();
		$("#zakaz-popup .callback-header").text(zakazname);
		$("#zakaz-popup input[name='zakazname']").val(zakazname);
		$("#zakaz-popup").modal();
	});
	
	$(".zayavka-btn").click(function(){
		$("#stoimost-rasch-popup").modal();
	});
	
	$(".svoe-btn").click(function(){
		var zakazname="Узнать стоимость: "+$(this).closest(".svoe-item").find(".svoe-item-ttl").text();
		$("#svoe-popup .callback-header").text(zakazname);
		$("#svoe-popup input[name='zakazname']").val(zakazname);
		$("#svoe-popup").modal();
	});
	
	$(".open-policy").click(function(){
		$(this).closest('.modal').modal('hide');
		setTimeout(function(){$("#policy").modal();},500);
	});
	
	$(".policy-link").click(function(){
		$("#policy").modal();
	});
	
	$(".jobs-img").click(function(){
		var jobname=$(this).find(".jobs-name").text();
		$("#jobs-popup .jobs-popup-header").text($(this).find(".jobs-name").text());
		$("#jobs-popup .jobs-popup-description").html($(this).find(".jobs-text").html());
		$("#jobs-popup .jobs-popup-img").css("backgroundImage", $(this).find(".jobs-big-img").css('backgroundImage'));
		$("#jobs-popup").modal();
	});


	//Добавленный код
	/*$(".zayavka-open-form").submit(function() {
		var str = $(this).serialize();
		$.ajax({
			type: "POST",
			url: "contact.php",
			data: str,
			success: function(msg) {
				if(msg == 'OK') {
					result = '<p>Ваш заказ принят</p>';
					$(".fields").hide();
				} else {
					result = msg;
				}
			$('.note').html(result);
			}
		});
		return false;
		});
		});
		*/
		

	$(".zayavka-open-btn, .predl-btn").click(function(){
		var button = $(this);
		var buttontext=button.find('div span').text();
		var form = $(this).closest('form');
		var phone=form.find("input[name='phone']").val();
      var flag=form.find("input[name='flag']").val();
		var valid=true;
		
		var rv_phone = /[0-9\s\-\+\(\)]/g;
		if(phone.length > 4 && rv_phone.test(phone)){
			form.find("input[name='phone']").removeClass('error').addClass('not_error');
			valid=valid&true;
		}else{
			form.find("input[name='phone']").removeClass('not_error').addClass('error')
			.tooltip({
				title:'Пожалуйста, введите корректный номер телефона', 
				placement: 'top', 
				trigger: 'manual'
			})
			.tooltip('show');
			valid=valid&false;
		}
		
		if(valid){
			var form_data = form.serialize();
			console.log(form_data);
			if(form_data){
				console.log("Good");
			}
			button.find('div span').text('Отправка...');
			$.ajax({
				type: "POST",
				url: "mail-class.php",
				data: form_data,
				success: function(data){
					console.log(!data);
					button.find('div span').text(buttontext);
					if(data){
						console.log("Good23");
						submited=true;
                      switch (flag){
                        case '7':
                          yaCounter45140673.reachGoal('besplatno');
                          break;
                        case '8':
                          yaCounter45140673.reachGoal('special');
                          break;
                      }
						form.trigger('reset');
                      	setTimeout(function(){$("#thanks").modal();},500);
						setTimeout(function(){$("#thanks").modal('hide');},3500);
						submited=false;
					}else{
						alert("Ваше сообщение НЕ отпрвлено. Пожалуйста, повторите отправку");
					}
				},
				error: function(){
					button.find('div span').text(buttontext);
					alert("Сервер отправки недоступен. Пожалуйста, повторите попытку");
				}
			});
		}
	});
	

	$(".modal-btn").click(function(){
		var button = $(this);
		var buttontext=button.find('div span').text();
		var form = $(this).parent();
		var phone=form.find("input[name='phone']").val();
      var flag=form.find("input[name='flag']").val();
		var valid=true;
		
		var rv_phone = /[0-9\s\-\+\(\)]/g;
		if(phone.length > 4 && rv_phone.test(phone)){
			form.find("input[name='phone']").removeClass('error').addClass('not_error');
			valid=valid&true;
		}else{
			form.find("input[name='phone']").removeClass('not_error').addClass('error')
			.tooltip({
				title:'Пожалуйста, введите корректный номер телефона', 
				placement: 'top', 
				trigger: 'manual'
			})
			.tooltip('show');
			valid=valid&false;
		}
		
		if(valid){
			var form_data = form.serialize();
			button.find('div span').text('Отправка...');
			$.ajax({
				type: "POST",
				url: "mail-class.php",
				data: form_data,
				success: function(data){
					button.find('div span').text(buttontext);
					if(data){
						submited=true;
                      switch (flag){
                        case '1':
                          yaCounter45140673.reachGoal('callback');
                          break;
                        case '2':
                          yaCounter45140673.reachGoal('zamer');
                          break;
                        case '3':
                          yaCounter45140673.reachGoal('stoimost');
                          break;
                        case '4':
                          yaCounter45140673.reachGoal('usluga');
                          break;
                        case '5':
                          yaCounter45140673.reachGoal('raschstoimost');
                          break;
                        case '6':
                          yaCounter45140673.reachGoal('svoeokno');
                          break;
                      }
						form.trigger('reset');
						button.closest('.modal').modal('hide');
					}else{
						alert("Ваше сообщение НЕ отправлено. Пожалуйста, повторите отправку");
					}
				},
				error: function(){
					button.find('div span').text(buttontext);
					alert("Сервер отправки недоступен. Пожалуйста, повторите попытку");
				}
			});
		}
	});
	
	$("input, textarea").focus(function(){
		$(this).removeClass('error').tooltip('hide');
	});

	$('.modal').on('hidden.bs.modal', function(){
		if(submited){
			$("#thanks").modal();
			setTimeout(function(){$("#thanks").modal('hide');},3000);
			submited=false;
		}
	});

});