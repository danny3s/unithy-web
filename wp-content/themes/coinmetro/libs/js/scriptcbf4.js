var sourceSwap = function () {
	var $this = $(this);
	var newSource = $this.data('alt-src');
	$this.data('alt-src', $this.attr('src'));
	$this.attr("src", newSource);
}

var sourceSwapclose = function () {
	var $this = $(this);
	var newSource = $this.data('close-src');
	$this.data('close-src', $this.attr('src'));
	$this.attr("src", newSource);
}


$(document).ready(function() {

	showHidelang();

	function showHidelang () {
		$("#langchanger li > a").hover(
			function () {
				$('#langchanger ul').removeClass('langout').addClass('langin');
			},
			function () {
				$('#langchanger ul').removeClass('langin').addClass('langout');
			}
			);

		var currentLang = $('#langchanger .current-lang a img').attr('src');
		$('#langchanger .current-lang').attr('style','display:none;');
		$('#langchanger > li > a > img').attr('src', currentLang);

	}

	(function(p,u,s,h) {
		p._pcq = p._pcq || [];
		p._pcq.push(['_currentTime', Date.now()]);
		s = u.createElement('script'); s.type = 'text/javascript'; s.async = true;
		s.src = 'https://cdn.pushcrew.com/js/179d8c93c831e20364bfb979bc67d8d3.js';
		h = u.getElementsByTagName('script')[0]; h.parentNode.insertBefore(s, h);
	})(window,document);

	$('.navbar-toggler img[data-close-src]').click(function() {
		new Image().src = $(this).data('close-src');
	}).click(sourceSwapclose);

	$('img[data-alt-src]').each(function() {
		new Image().src = $(this).data('alt-src');
	}).hover(sourceSwap, sourceSwap);

	var sourceSwapt = function () {
		var $this = $('.ga-floated-telegram img[data-alt-srct]');
		var newSource = $this.data('alt-srct');
		$this.data('alt-srct', $this.attr('src'));
		$this.attr("src", newSource);
	}

	$('.ga-floated-telegram').each(function() {
		new Image().src = $('.ga-floated-telegram img[data-alt-srct]').data('alt-srct');
	}).hover(sourceSwapt, sourceSwapt);

	$('#update-form').bootstrapValidator({
		// trigger: 'blur',
		// To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
		feedbackIcons: {
			valid: 'glyphicon glyphicon-ok',
			invalid: 'glyphicon glyphicon-remove',
			validating: 'glyphicon glyphicon-refresh'
		},
		fields: {
			name: {
				validators: {
					notEmpty: {
						message: gaMessage[0]
					},
					regexp: {
						regexp: /^[a-zA-Z ]+$/,
						message: gaMessage[1]
					}
				}
			},
			email: {
				validators: {
					notEmpty: {
						message: gaMessage[2]
					},
					emailAddress: {
						message: gaMessage[3]
					}
				}
			},
			message: {
				validators: {
					notEmpty: {
						message: gaMessage[4]
					},
					stringLength: {
						min: 10,
						max: 200,
						message:gaMessage[5]
					}
				}
			}
		}
	}).on('success.form.bv', function(e) {

		$('#btn-send-new-msg').click(function() {
			$('#update-form')[0].reset();
			$('.form-thankyou').slideUp();
			$('.form-input').slideDown();
		});

		// Do something ...
		$('#update-form').data('bootstrapValidator').resetForm();

		// Prevent form submission
		e.preventDefault();

		// Get the form instance
		var $form = $(e.target);

		// Get the BootstrapValidator instance
		var bv = $form.data('bootstrapValidator');

		var email = $("#email").val();
		var name = $("#name").val();
		var msg = $("#message").val();
		$.ajax(
		{
			type: "POST",
			url: "https://mandrillapp.com/api/1.0/messages/send.json",
			data: {
				'key': 'IaClVDufxK65i9novBSzkQ',
				'message': {
					'from_email':'hello@coinmetro.com',
					'from_name': name,
					'headers': {
						'Reply-To': email
					},
					'subject': 'Coinmetro - Contact Form Submission',
					'text':'Name: ' + name + '\n' + 'Email: ' + email + '\n' + 'Message: ' + msg,
					'to': [
					{
						'email': 'hello@coinmetro.com',
						'name': 'Coinmetro',
						'type': 'to'
					}]
				}
			}
		})
		.done(function(response) {
			$('.bv-form').slideUp();
			$('.form-thankyou').slideDown();
		})
		.fail(function(response) {
			console.log('Error sending message.');
		});
        return false; // prevent page refresh
    });
	$('#update-formn').bootstrapValidator({
		// trigger: 'blur',
		// To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
		feedbackIcons: {
			valid: 'glyphicon glyphicon-ok',
			invalid: 'glyphicon glyphicon-remove',
			validating: 'glyphicon glyphicon-refresh'
		},
		fields: {
			name: {
				validators: {
					notEmpty: {
						message: gaMessage[0]
					},
					regexp: {
						regexp: /^[a-zA-Z ]+$/,
						message: gaMessage[1]
					}
				}
			},
			email: {
				validators: {
					notEmpty: {
						message: gaMessage[2]
					},
					emailAddress: {
						message: gaMessage[3]
					}
				}
			},
			message: {
				validators: {
					notEmpty: {
						message: gaMessage[4]
					},
					stringLength: {
						min: 10,
						max: 200,
						message:gaMessage[5]
					}
				}
			}
		}
	}).on('success.form.bv', function(e) {

		$('#btn-send-new-msg').click(function() {
			$('#update-formn')[0].reset();
			$('.form-thankyou').slideUp();
			$('.form-input').slideDown();
		});

		// Do something ...
		$('#update-formn').data('bootstrapValidator').resetForm();

		// Prevent form submission
		e.preventDefault();

		// Get the form instance
		var $form = $(e.target);

		// Get the BootstrapValidator instance
		var bv = $form.data('bootstrapValidator');

		var email = $("#emailn").val();
		var name = $("#namen").val();
		var msg = $("#messagen").val();
		$.ajax(
		{
			type: "POST",
			url: "https://mandrillapp.com/api/1.0/messages/send.json",
			data: {
				'key': 'IaClVDufxK65i9novBSzkQ',
				'message': {
					'from_email':'hello@coinmetro.com',
					'from_name': name,
					'headers': {
						'Reply-To': email
					},
					'subject': 'Coinmetro - Contact Form Submission.',
					'text':'Name: ' + name + '\n' + 'Email: ' + email + '\n' + 'Message: ' + msg,
					'to': [
					{
						'email': 'hello@coinmetro.com',
						'name': 'Coinmetro',
						'type': 'to'
					}]
				}
			}
		})
		.done(function(response) {
			$('.bv-form').slideUp();
			$('.form-thankyou').slideDown();
		})
		.fail(function(response) {
			console.log('Error sending message.');
		});
        return false; // prevent page refresh
    });
});

var data = [
{"name" : "Initial Coin Offering", "hvalue" : 50, "color": "#a08ac9" },
{"name" : "Platform Liquidity", "hvalue" : 20, "color": "#5c6783" },
{"name" : "Team Distribution*", "hvalue" : 10, "color": "#87dee8" },
{"name" : "Community Rewards", "hvalue" : 7.5, "color": "#ffdb03" },
{"name" : "Advisor Compensation", "hvalue" : 2.5, "color": "#ff8251" },
{"name" : "Public Presale", "hvalue" : 10, "color": "#5cd05f" }

];

var data2 = [
{"name" : "HR & Development", "hvalue" : 40, "color": "#a08ac9" },
{"name" : "Marketing", "hvalue" : 30, "color": "#5c6783" },
{"name" : "War chest; possible buyouts, takeovers, acquisitions, etc.", "hvalue" : 20, "color": "#87dee8" },
{"name" : "Legal, Compliance, Regulatory", "hvalue" : 10, "color": "#ffdb03" }

];

eventDateTime = String(eventDateTime);
if (eventDateTime == "undefined") {var eventDateTime = "December 31 2017 00:00 GMT";}
if (noteUrl === "undefined") {var noteUrl = "#";}

$(document).ready(function () {
	TweenMax.ticker.fps(60);

	if($('#ga-plan').length){
		gachart("ga-chart-1", data);
		gachart("ga-chart-2", data2);
		chartsAnim();
	}

	if($('#team').length){
		slider("ga-s1");
		slider("ga-s2");
	}

	if($('#train').length){
		gaOnScroll($('#train'), "train");
	}

	if($('#ga-landing-menu').length){
		gaLandingMenu();
	}

	if($('.ga-floated-banner').length){
		gaFloatedBanner();
	}

	if($('#clock').length){
		clock();
	}

	if($('#banim').length){
		bountyGraph();
	}

	if($('.ga-train-b').length){
		bountyTrain();
	}

	if($('#ga-whitepaper').length){
		whitePaperMenu();
	}

	if($('#animtext').length){
		textanim();
	}

	if($('.owl-carousel').length){
		gaCarousel();
	}

	if($('.ga-invested').length){
		//gaGetStats();
	}

	if($('.ga-pitchdec-page').length){
		pitchdecSlide();
	}

	if($('#ga-pd-comments').length){
		pdComments();
	}
	if($('#planeText').length){
		plane();
	}

	if($('#headerNotification').length){
		headerNotification();
	}

	popovers();
	headerShowHide();

	function headerNotification() {

		if ($('.ga-sale-is-live').css('display') != 'none') {
			$('#ga-header').addClass('ga-header-plus40');
			$('#event').addClass('ga-event-plus40');
		}

	}

	function plane() {

		var i = 0;
		$('#planeText').html(planeStr[i]);

		setInterval(function() {
			i++;
			if(i>=planeStr.length) {i=1}

			$('#planeText').html(planeStr[i]);

		}, 30000);

	}

	function pdComments(trg) {

		var data = [
			{name : "Jeff254", message : "Missing Deposits ", time: "13 minutes", market:"self.bitfinex"},
			{name : "x_Skyline3_x", message : "Neo withdrawal issue > 12 days", time: "17 minutes", market:"self.bitfinex"},
			{name : "FunkyBerry", message : "Almost a month my two BTC Deposit still showing 1/3 Confirmed [No Action Taket Yet]", time: "10 hours", market:"self.bitfinex"},
			{name : "manish_bist03", message : "To „approve” button of a withdraw is unclickable for me", time: "11 hours", market:"self.bitfinex"},
			{name : "BobbyG", message : "Bitfinex support? ", time: "1 day", market:"self.bitfinex"},
			{name : "BaronVonHumungus", message : "I still haven’t received money to withdrew to my bank account", time: "3 days", market:"self.bitfinex"},
			{name : "EricQuartz", message : "70 DAYS I’M WAITING FOR MY COINS.", time: "5 days", market:"self.bitfinex"},
			{name : "EmilieStone", message : "[Warning] Fake bitfinex official accounts", time: "9 days", market:"self.bitfinex"},
			{name : "JazzySylvia", message : "You make millions daily and can’t SUPPORT your users…", time: "12 days", market:"self.bitfinex"},
			{name : "Steve009", message : "Class Action Lawsuit on Coinbase", time: "19 days", market:"self.CoinBase"},
			{name : "George981B", message : "How long does it take for Binance SUPPORT to answer the ticket?!", time: "20 days", market:"self.bitfinex"},
			{name : "N3odoc", message : "Missing wire deposit ", time: "21 days", market:"self.CoinBase"},
			{name : "web_elf", message : "Identification Verification Issues", time: "23 days", market:"self.CoinBase"},
			{name : "jamesddolls", message : "Verifying withdrawal uk bank account with coinbase", time: "25 days", market:"self.CoinBase"},
			{name : "Guilh3m", message : "ID verification takes ages", time: "27 days", market:"self.CoinBase"},
			{name : "Guilh3m", message : "Binance SUPPORT didn’t fix my account", time: "27 days", market:"self.CoinBase"}
		];

		var html = '';
		var container = $("#ga-pd-comments");
		var scroll = $("#pd-scroll");
		var bar = $("#pd-scroll-bar");
		var slider = $(".ga-pd-slider");
		var drag = false;
		var previousOffset = 0;

		data.forEach(function(element) {
			html += "<div class='ga-pd-wu-item'><div class='container ga-100h'><div class='row ga-100h align-items-center'><div class='col-md-1 col-sm-3 col-3 ga-pl50'><img src='../wp-content/uploads/message.png'></div><div class='col-md-11 col-sm-9 col-9 ga-pl75 ga-70h'><div class='row'><div class='col-md-12 ga-height-pd'><strong>"+element.message+" <strong>("+element.market+")</strong></strong></div></div><div class='row'><div class='col-md-6'><span>Submitted "+element.time+" ago by <span>"+element.name+"</span></span></div><div class='col-md-6 d-flex justify-content-end ga-pr30'><span>comment&nbsp share&nbsp save&nbsp hide&nbsp report&nbsp cross&nbsp post</span></div></div></div></div></div></div>";
		});
		container.append(html);

		var containerH = container.outerHeight();
		var barH = bar.outerHeight();
		var scrollH = scroll.outerHeight();
		var sliderH = slider.outerHeight();
		var offsetT = 0;
		var posY = 0;
		var posYE = 0;
		var coef = (containerH-sliderH)/(barH-scrollH);
		var s = document.getElementById("pd-scroll");
		var c = document.getElementById("ga-pd-comments");

		scroll.on('mousedown touchstart', function(event){
			event.preventDefault();
			var touch = undefined
			if (event.originalEvent.touches){touch = event.originalEvent.touches[0];}
			posY = event.clientY || touch.clientY;

			document.onmousemove = elementDrag;
			document.touchmove = elementDrag;
		});

		$(document).on('mouseup touchend', function(){
			document.onmouseup = null;
			document.onmousemove = null;
		});

		function elementDrag(e) {
			e = e || window.event;
			posYE = posY - e.clientY;
			posY = e.clientY;
			var movePos = (s.offsetTop - posYE);
			var curpositionB = parseInt(s.style.top);

			if(movePos < 0){s.style.top = 0;c.style.top=0}else{
				if(movePos > (sliderH-scrollH)){
					s.style.top = (sliderH-scrollH) + "px";
				}else{
					s.style.top = movePos + "px";
					c.style.top = movePos*-1*coef + "px";
				}
			}
		}
	}

	var reverse = false;

	function calendarPlay() {
		var calendar = $('#milestones');
		calendar.addClass("ga-calendar-play");
	}

	function moveComments() {
		var scroll = $('#pd-scroll');
		var bar = $("#pd-scroll-bar");
		var barH = bar.outerHeight();
		var scrollH = scroll.outerHeight();
		var container = $("#ga-pd-comments");
		var slider = $(".ga-pd-slider");
		var containerH = container.outerHeight();
		var sliderH = slider.outerHeight();
		var posS,posC;

		if(reverse){posS=0;posC=0}else{posS = barH - scrollH;posC=-1*(containerH - sliderH);}

		$(scroll).animate({top:posS}, 30000, "linear", function() {
			if(reverse){reverse = false;}else{reverse=true}
			moveComments();
		});

		$(container).animate({top:posC}, 30000, "linear", function() {
		});

		scroll.hover(function() {
			$(container).stop( true, false );
			$(scroll).stop( true, false );
		})


	}

	function pitchdecSlide(trg) {

		var slides = $('.ga-pitchdec-page > div');
		var len = slides.length;
		var targetid;
		var target;
		var current = 0;
		var scr = true;
		var duration = 500;
		var disable = 600;
		var lastScrollTop = 0;
		var lastDirection = 1;
		var st;

		if(trg) {
			if(window.innerWidth>991){
			disableScroll();
			Object.keys(slides).forEach(function(key) {
				if(trg == ("#"+$(slides[key]).attr("id"))){
					current = key-1;
				}
			});
		}
		}

		$(document).on("scroll", onScroll);

		function onScroll(e) {

			if(window.innerWidth>991){

			checkDirection();

			if(scr){
				scr = false;
				disableScroll();
				e.preventDefault();
				moveSlide();

			setTimeout(function() {
				scr=true;
				enableScroll();
			}, disable);
			}
		}
		}

		function checkDirection() {
			st = $(this).scrollTop();
			if (st > lastScrollTop){
					lastDirection = 1;
			} else {
					lastDirection = -1;
			}
			lastScrollTop = st;
			if(scr){
				if ((current>0 || lastDirection>0) && (current+1<len || lastDirection<0)){
				current += lastDirection;
			}
			}
		}

		function moveSlide() {

			targetid = slides[current];
			target = $(targetid);

			if($(targetid).attr("id") == "what-users"){
				moveComments();
			}
			if($(targetid).attr("id") == "milestones"){
				calendarPlay();
			}

			$('html, body').stop().animate({
				'scrollTop': target.offset().top
			}, {
				duration: duration,
				complete: function() {
					//current++;
				}
			}, 'swing');
		}

		function disableScroll() {
  		if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, false);
  		window.onwheel = preventDefault; // modern standard
  		window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  		window.ontouchmove  = preventDefault; // mobile
  		document.onkeydown  = preventDefaultForScrollKeys;
		}

		function enableScroll() {
    	if (window.removeEventListener)
      window.removeEventListener('DOMMouseScroll', preventDefault, false);
    	window.onmousewheel = document.onmousewheel = null;
    	window.onwheel = null;
    	window.ontouchmove = null;
    	document.onkeydown = null;
		}
		var keys = {37: 1, 38: 1, 39: 1, 40: 1};

		function preventDefault(e) {
  	e = e || window.event;
  	if (e.preventDefault)
      e.preventDefault();
  	e.returnValue = false;
		}

		function preventDefaultForScrollKeys(e) {
    	if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
		}

	}

	function gaGetStats(){

		var investedDef = "0000";
		var soldDef = "0000";
		var priceDef = "0.03";
		var contributorsDef = "0000";

		var invested = $('#ga-invested');
		var sold = $('#ga-sold');
		var price = $('#ga-price');
		var contributors = $('#ga-contributors');
		var pricef = $('#ga-f-price');
		var contributorsf = $('#ga-f-contributors');

		getData();

		setInterval(function() {
			getData();
		}, 60000);

		function getData(){
		$.ajax({
			type: 'GET',
			url: 'https://api.coinmetro.com/sale-stats',
			headers: {
        		'Content-Type':'application/json'
    		},
			dataType: 'json',
			success: function (data) {
				console.log("API:ok");
				$.each(data, function(index, element) {
					console.log(element);

				});
			},
			error: function () {
				console.log("Error - Get Stats Data");
				invested.text(investedDef);
				sold.text(soldDef);
				price.text(priceDef);
				contributors.text(contributorsDef);
				pricef.text(priceDef);
				contributorsf.text(contributorsDef);
			}
		});
		}

	}

	function gaCarousel (){
		$('.owl-carousel').owlCarousel({
			loop:true,
			margin:10,
			smartSpeed: 700,
			autoplay:true,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:3
				},
				1000:{
					items:4
				}
			}
		})
	}

	function popovers(){
		$('.ga-star-popover').webuiPopover({width:750, type:'async', animation:"pop", url:noteUrl, container:"#bonus"});
		$('#popup-price-link').webuiPopover({width:550, url:'#popup-price', animation:"pop", container:"#event"});

		$('*[data-popup]').click(function(){
			var link = $(this).attr('href');
			var id = $(this).data('popup');
			if(link == "#"){
			$('#'+id).addClass("ga-popup-show");
			$(".ga-popup-close").attr("data-popup-close", id);

			$('*[data-popup-close]').click(function(){
				var id = $(this).data('popup-close');
				$('#'+id).addClass("ga-popup-hide");
				setTimeout(function() {
					$('#'+id).removeClass("ga-popup-hide");
					$('#'+id).removeClass("ga-popup-show");
				}, 700);
			});
		}
		});


	}

	function whitePaperMenu(){

		var menu = $("#ga-whitepaper");
		var expandMenu = $(".ga-expand-menu");
		var header = $("#ga-header");
		var expmenu = $(".ga-expand-menu");
		var lastpos = 0;
		var menupos = menu.position();
		var offset = 90;
		var pd = $('.ga-pitchdec').length;

		if(pd){var offset = 0;}

		$(window).scroll(function () {

			var scrollPos = $(document).scrollTop();
			if (lastpos == 0){lastpos = scrollPos;}

			if (scrollPos > menu.outerHeight()) {

				expmenu.addClass("ga-exp-visible");

				if(window.innerWidth>767){
					menu.addClass("ga-whitepaper-fix");
					menu.removeClass("ga-wpanim-bottom");
				}else{
					if(menu.hasClass("ga-opened")){
						var pos = menu.position();
						if(pos.top < menupos.top+10){

							menu.css({ top: "+="+(lastpos-scrollPos) });
							lastpos = scrollPos;
						}else{
							lastpos = 0;
							menu.css({ top: -1});
						}
					}else{
						menu.css({ top: ""});
					}
				}

				if(menu.hasClass("ga-opened")){
					if(window.innerWidth>767){
						menu.removeClass("ga-opened");
						menu.addClass("ga-wpanim-top");
					}
				}

			}else{
				menu.removeClass("ga-whitepaper-fix");
				menu.removeClass("ga-wpanim-top");
				expmenu.removeClass("ga-exp-visible");

			}
		});

		expandMenu.click(function(){
			menu.css({ top: ""});
			lastpos = 0;

			if(menu.hasClass("ga-opened")){
				menu.removeClass("ga-opened");
				header.removeClass("scroll-up");
				header.addClass("scroll-down");
				menu.addClass("ga-wpanim-top");
				menu.removeClass("ga-wpanim-bottom");
			}else{
				menu.removeClass("ga-wpanim-top");
				header.removeClass("scroll-down");
				header.addClass("scroll-up");
				menu.addClass("ga-opened");
				menu.addClass("ga-wpanim-bottom");
				menu.addClass("ga-whitepaper-fix");
				expmenu.removeClass("ga-exp-visible");
			}
		})

		$(".ga-whitepaper-page").click(function() {
			if(menu.hasClass("ga-opened")){
				menu.removeClass("ga-opened");
				header.removeClass("scroll-up");
				header.addClass("scroll-down");
				menu.addClass("ga-wpanim-top");
				menu.removeClass("ga-wpanim-bottom");
			}
		});
		$(document).on("scroll", onScroll);

		$('.ga-whitepaper-nav a[href^="#"]').on('click', function (e) {
			e.preventDefault();
			$(document).off("scroll");

			$('.ga-whitepaper-nav a[href^="#"]').each(function () {
				$(this).removeClass('ga-whitepaper-active');
			})
			$(this).addClass('ga-whitepaper-active');

			var target = this.hash,
			//menu = target;
			target = $(target);
			var hash = this.hash;

			if(target.length){

				menu.removeClass("ga-opened");
				header.removeClass("scroll-up");
				header.addClass("scroll-down");
				menu.addClass("ga-wpanim-top");
				menu.addClass("ga-whitepaper-fix");
				menu.removeClass("ga-wpanim-bottom");

				$('html, body').stop().animate({
					'scrollTop': target.offset().top-offset
				}, {
					duration: 500,
					complete: function() {
						if(pd){pitchdecSlide(hash);}
					}
				}, 'swing');

			}

		});
		function onScroll(event){
			var scrollPos = $(document).scrollTop();
			$('.ga-whitepaper-nav a').each(function () {

				var currLink = $(this);

				if(currLink.length){

					var link = currLink.attr("href");
					if(link.length > 2 && link.indexOf('#') > 0){

						var refElement = $(currLink.attr("href"));

						if(refElement.length){

							if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() -100 > scrollPos) {
								$('.ga-whitepaper-nav a').removeClass("ga-whitepaper-active");
								currLink.addClass("ga-whitepaper-active");
							}
							else{
								currLink.removeClass("ga-whitepaper-active");
							}
						} }
					}

				});
		}
	}

	var marker = true;

	function gaOnScroll(telement, funcname){

		$(window).scroll(function () {

			var scrollPos = $(document).scrollTop();
			var refElement = telement;

			if (refElement.position().top < scrollPos+400) {
				if ( marker ) {
					train();
				}

			}
		});

	}

	function textanim(){

		var typed = new Typed('#animtext', {
			strings: typedStr,
			typeSpeed: 15,
			backSpeed: 50,
			loop: false,
			backDelay: 1500,
			startDelay: 500,
			fadeIn: true,
			cursorChar:"<img src='/wp-content/uploads/line.png'>"
		});

	}

	function bountyTrain(){

		var timeScale = 0;
		var buildingsBgWidth = 1490;
		var coin = $('.ga-bounty-coin');
		var train = $('.ga-train-b');
		var buildings = $('.ga-roadmap-buildings-b');
		var containerWidth = $(".ga-train-b-animation").outerWidth();
		var trainWidth = $(".ga-train-b").outerWidth();
		var firstStop = trainWidth+(containerWidth/10);

		var trainAnim = new TimelineMax({ repeat: -1, delay:0, repeatDelay: 3});
		var buildingsAnim = new TimelineMax({ repeat: -1, repeatDelay: 0 });

		TweenMax.to(coin, 0, {x:firstStop-(trainWidth/2),y:-80})

		buildingsAnim.to(buildings, 50, {backgroundPosition:'-='+buildingsBgWidth+'px', ease: Linear.easeNone});


		trainAnim.to(train, 5, {x:'+='+firstStop+'px', rotation:0.001, ease: Power2.easeOut, onComplete:coinMove}).to(train, 10, {x:'+='+(containerWidth-firstStop+trainWidth)+'px', ease: Power3.easeIn, onStart:buildingsMove});

		function buildingsMove (){

			var tmr = setInterval(function() {
				if(timeScale < 1){
					timeScale = timeScale +0.1;
					buildingsAnim.timeScale(timeScale)
				}else{
					timeScale = 0;
					clearInterval(tmr);
				}}, 300);

		}

		function coinMove(){

			buildingsAnim.timeScale(0.1);

			TweenMax.to(coin, 0.5, {opacity:1, delay:0, repeat:0, ease: Linear.easeNone});
			TweenMax.to(coin, 1.5, {y:'-='+-52+'px', delay:0.5, repeat:0, ease: CustomEase.create("custom", "M0,0 C0.14,0 0.16,0.438 0.19,0.561 0.231,0.728 0.226,0.954 0.286,1 0.36,0.962 0.344,0.392 0.462,0.392 0.562,0.392 0.536,0.976 0.59,0.998 0.658,0.976 0.642,0.514 0.73,0.514 0.846,0.514 0.766,0.97 0.822,0.998 0.876,0.998 0.878,0.922 0.894,0.86 0.914,0.77 1,0.448 1,0.448")});
			TweenMax.to(coin, 0.5, {opacity:0, delay:2.0, repeat:0, ease: Linear.easeNone});
			TweenMax.to(coin, 0, {x:firstStop-(trainWidth/2),y:-80, delay:3})
		}
	}

	function bountyGraph(){

		var animCycle = 1;

		function animateSVG(svg, path, circlebg, time, delay, linevisible, reverse, remove) {

			setTimeout(function() {

				var elements;
				var snapC = Snap("#"+svg);
				var path1 = $("#"+path).attr("d");
				var myPathC = snapC.path(path1).attr({fill: 'none', stroke: "#000",strokeWidth: 2, opacity:linevisible});
				var circle1 = snapC.circle(0, 0, 6).attr({opacity: 0, fill: circlebg,stroke: "#5D6783",strokeWidth: 2});

				setTimeout(function() {circle1.attr({opacity: 1})}, 10);

				var triangleGroup = snapC.g( circle1 );

				if(reverse == true) {
					var begC = myPathC.getTotalLength();
					var lenC = 0;
				}else{
					var begC = 0;
					var lenC = myPathC.getTotalLength();
				}

				setTimeout( function() {

					Snap.animate(begC, lenC, function( value ) {
						movePoint = myPathC.getPointAtLength( value );
						triangleGroup.transform( 't' + parseInt(movePoint.x) + ',' + parseInt( movePoint.y) + 'r' + (movePoint.alpha - 90));

					}, time,mina.easeinout, function(){

						if(remove){
							myPathC.remove();
							triangleGroup.remove();
						}else{

							setTimeout(function() {myPathC.remove();triangleGroup.remove();}, 40000);
						}
					});
				});

			}, delay);

		}

		function startAnimation(cycle){


			setTimeout(function() {$(".ga-graph-5p-text").removeClass("graph-5-anim");}, 2000);
			setTimeout(function() {$(".graph-coin").removeClass("graph-5-anim");}, 2000);

			switch (cycle) {
				case 1:
				animateSVG("banim", "cyclePath1", "#A08AC1", 4500,0, 0, false);
				setTimeout(function() {animCycle++; startAnimation(animCycle);}, 4500);
				break;
				case 2:

				setTimeout(function() {$(".ga-graph-loader").removeClass("ga-graph-loader-active");$("#ga-graph-loader-v").removeClass("ga-graph-loader-v-ok");}, 10000);
				setTimeout(function() {$("#ga-graph-loader-v").addClass("ga-graph-loader-v-ok");}, 800);

				var i = 0;
				var timerId = setInterval(function() {
					i++;
					$("#ga-graph-loader-"+i).addClass("ga-graph-loader-active");
					if(i==4){clearInterval(timerId);}

				}, 200);

				animateSVG("banim", "cyclePath2", "#A08AC1", 2500,1000, 0, false, true);
				animateSVG("banim", "cyclePath21", "#A08AC1", 2500,1000, 0, false, true);
				setTimeout(function() {animCycle++; startAnimation(animCycle);}, 3500);
				break;
				case 3:
				animateSVG("banim", "cyclePath23", "#8FD5E1", 2500,0, 0, false);
				animateSVG("banim", "cyclePath24", "#8FD5E1", 2500,0, 0, false);
				animateSVG("banim", "cyclePath25", "#8FD5E1", 2500,0, 0, false);
				animateSVG("banim", "cyclePath26", "#8FD5E1", 2500,0, 0, false);
				animateSVG("banim", "cyclePath27", "#8FD5E1", 2500,0, 0, false);
				animateSVG("banim", "cyclePath28", "#8FD5E1", 2500,0, 0, false);
				setTimeout(function() {animCycle++; startAnimation(animCycle);}, 2500);
				break;
				case 4:

				animateSVG("banim", "cyclePath31", "#A08AC1", 4500,500, 0, false);
				$("#graph-sect1").addClass("graph-active");
				$("#cyclePath31").addClass("graph-l-active");
				$(".ga-graph-social-text").addClass("graph-t-active");

				setTimeout(function() {

					setTimeout(function() {$(".graph-coin").addClass("graph-5-anim");}, 4500);

					$(".ga-graph-5p-text").addClass("graph-5-anim");
					animateSVG("banim", "cyclePath4", "#ffdb03", 4500,0, 0, false);
					animCycle++; startAnimation(animCycle);}, 5000);

				break;
				case 5:

				animateSVG("banim", "cyclePath35", "#A08AC1", 3500,500, 0, false);
				$("#graph-sect5").addClass("graph-active");
				$("#cyclePath35").addClass("graph-l-active");
				$(".ga-graph-socialg-text").addClass("graph-t-active");

				setTimeout(function() {

					setTimeout(function() {$(".graph-coin").addClass("graph-5-anim");}, 4500);

					$(".ga-graph-5p-text").addClass("graph-5-anim");
					animateSVG("banim", "cyclePath4", "#ffdb03", 4500,0, 0, false);
					animCycle++; startAnimation(animCycle);}, 4000);

				break;
				case 6:

				animateSVG("banim", "cyclePath36", "#A08AC1", 2500,500, 0, false);
				$("#graph-sect3").addClass("graph-active");
				$("#cyclePath36").addClass("graph-l-active");
				$(".ga-graph-messaging-text").addClass("graph-t-active");

				setTimeout(function() {

					setTimeout(function() {$(".graph-coin").addClass("graph-5-anim");}, 4500);

					$(".ga-graph-5p-text").addClass("graph-5-anim");
					animateSVG("banim", "cyclePath4", "#ffdb03", 4500,0, 0, false);
					animCycle++; startAnimation(animCycle);}, 3000);

				break;
				case 7:

				animateSVG("banim", "cyclePath34", "#A08AC1", 2500,500, 0, true);
				$("#graph-sect4").addClass("graph-active");
				$("#cyclePath34").addClass("graph-l-active");
				$(".ga-graph-forums-text").addClass("graph-t-active");

				setTimeout(function() {

					setTimeout(function() {$(".graph-coin").addClass("graph-5-anim");}, 4500);

					$(".ga-graph-5p-text").addClass("graph-5-anim");
					animateSVG("banim", "cyclePath4", "#ffdb03", 4500,0, 0, false);
					animCycle++; startAnimation(animCycle);}, 3000);

				break;
				case 8:

				animateSVG("banim", "cyclePath33", "#A08AC1", 3500,500, 0, true);
				$("#graph-sect6").addClass("graph-active");
				$("#cyclePath33").addClass("graph-l-active");
				$(".ga-graph-invites-text").addClass("graph-t-active");

				setTimeout(function() {

					setTimeout(function() {$(".graph-coin").addClass("graph-5-anim");}, 4500);

					$(".ga-graph-5p-text").addClass("graph-5-anim");
					animateSVG("banim", "cyclePath4", "#ffdb03", 4500,0, 0, false);
					animCycle++; startAnimation(animCycle);}, 4000);

				break;
				case 9:

				animateSVG("banim", "cyclePath3", "#A08AC1", 4500,500, 0, true);
				$("#graph-sect2").addClass("graph-active");
				$("#cyclePath3").addClass("graph-l-active");
				$(".ga-graph-other-text").addClass("graph-t-active");

				setTimeout(function() {

					setTimeout(function() {
						$(".graph-active").removeClass("graph-active");
						$(".graph-l-active").removeClass("graph-l-active");

						$(".ga-graph-socialg-text").removeClass("graph-t-active");
						$(".ga-graph-social-text").removeClass("graph-t-active");
						$(".ga-graph-forums-text").removeClass("graph-t-active");
						$(".ga-graph-other-text").removeClass("graph-t-active");
						$(".ga-graph-invites-text").removeClass("graph-t-active");
						$(".ga-graph-messaging-text").removeClass("graph-t-active");
						$(".ga-graph-other-text").removeClass("graph-t-active");
					}, 4500);

					setTimeout(function() {$(".graph-coin").addClass("graph-5-anim");}, 4500);

					$(".ga-graph-5p-text").addClass("graph-5-anim");
					animateSVG("banim", "cyclePath4", "#ffdb03", 4500,0, 0, false);
					animCycle++; startAnimation(animCycle);}, 5000);

				break;
				case 10:
				animateSVG("banim", "cyclePath4", "#ffdb03", 4500,0, 0, false);
				setTimeout(function() {animCycle=1; startAnimation(animCycle);}, 4500);
				break;
				default:
				console.log("Error - Animation not found")
			}
		}


		startAnimation(animCycle);
	}


	function chartsAnim(){

		$(window).scroll(function () {

			var scrollPos = $(document).scrollTop();
			var refElement = $("#ga-plan");

			if (refElement.position().top < (scrollPos+200)) {

				if(!refElement.hasClass("ga-enable-anim")){
					refElement.addClass("ga-enable-anim");
					setTimeout(function() {$("div[data-table-number='1'][data-chart-pos='1']").click();}, 1500);
					setTimeout(function() {$("div[data-table-number='2'][data-chart-pos='1']").click();}, 2000);
				}
			}
		});

	}

	function headerShowHide(){

		var scrollPos = 0;
		var headerHeight = $('#ga-header').height();
		var pd = $('.ga-pitchdec').length;

		$(window).scroll(function(){

			if(window.innerWidth>991){

				var st = $(this).scrollTop();
				if (st > scrollPos){
					if($(window).scrollTop() > 0){
						$('#ga-header').removeClass('scroll-up').addClass('scroll-down');
					//$('#js-main-menu').add('#js-mob-menu-trigger').removeClass('open');
				}
			} else {
				if($(window).scrollTop() > 0){
					$('#ga-header').removeClass('scroll-down').addClass('scroll-up');
				}
			}
			scrollPos = st;
			if($(window).scrollTop() > 0){
				$('#ga-header').addClass('fix-header');
			} else{
				$('#ga-header').removeClass('fix-header').removeClass('scroll-up');
			}

			if($(window).scrollTop() > 500){
				if($('#ga-header').hasClass('scroll-up')){
					$('#ga-header').addClass('scrol-d');
				}
			} else{
				$('#ga-header').removeClass('scrol-d')
			}

		}
	});


	}

	function gaFloatedBanner(){
		$(window).scroll(function(){
			var st = $(this).scrollTop(),
			windowBot = st + $(this).height(),
			formPosition = 800,
			formPositionHeight = 110,
			breackPoint = formPosition + formPositionHeight,
			footerPosition = $('.footer').offset().top;

			if((st < breackPoint) || (windowBot > footerPosition)){
				$('.ga-floated-banner').removeClass('show');
			} else{
				$('.ga-floated-banner').addClass('show');
			}
		});
	}
	function gaLandingMenu(){

		$(".ga-landing-close").click(function(){

			var visible = $("#ga-landing-menu").hasClass( "ga-landing-visible" );
			console.log(visible);

			if(!visible){
				$("#ga-landing-menu").addClass( "ga-landing-visible" );
				$("#ga-landing-menu").removeClass( "ga-landing-unvisible" );
				$('.ga-floated-banner').removeClass('show');
			}else{
				$("#ga-landing-menu").removeClass( "ga-landing-visible" );
				$("#ga-landing-menu").addClass( "ga-landing-unvisible" );
			}
		});

		$(document).on("scroll", onScroll);

		$('.ga-landing-primary-menu a[href^="#"]').hover(function (e) {
			$(this).addClass('ga-land-active');
		}, function(){
			$(this).removeClass('ga-land-active');
		});

		$('.ga-landing-primary-menu a[href^="#"]').on('click', function (e) {
			e.preventDefault();
			$(document).off("scroll");

			$('.ga-landing-primary-menu a[href^="#"]').each(function () {
				$(this).removeClass('ga-land-active');
			})
			$(this).addClass('ga-land-active');

			var target = this.hash,
			menu = target;
			target = $(target);

			$('html, body').stop().animate({
				'scrollTop': target.offset().top+2
			}, 500, 'swing', function () {
				//window.location.hash = target;
				$(document).on("scroll", onScroll);
			});
		});

		function onScroll(event){
			var scrollPos = $(document).scrollTop();
			$('.ga-landing-primary-menu a').each(function () {
				var currLink = $(this);

				if($('*').is(currLink.attr("href"))) {

					var refElement = $(currLink.attr("href"));

					if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() -100 > scrollPos) {
						$('.ga-landing-primary-menu a').removeClass("ga-land-active");
						currLink.addClass("ga-land-active");
					}
					else{
						currLink.removeClass("ga-land-active");
					}
				}

			});
		}
	}

	function gachart(id, cdata){

		$("#"+id+" .exp").donutpie({
			radius: 150,
			tooltip : false,
			tooltipClass : "donut-pie-tooltip-bubble"
		});
		$("#"+id+" .exp").donutpie('update', cdata);
		$("#"+id+" .exp-bg").donutpie({
			radius: 148,
			tooltip : false,
			tooltipClass : "donut-pie-tooltip-bubble"
		});
		$("#"+id+" .exp-bg").donutpie('update', cdata);

		$("#"+id+" .exp .slice").each( function(index) {
			$(this).click( function() {
				$("#"+id+" .exp .slice").css( "transform", "scale(1.0)" );
				$(this).css( "transform", "scale(1.1)" );

				var s = id.slice(-1);
				var block = $('.ga-plan-button[data-table-number="'+s+'"][data-chart-pos="'+(index+1)+'"]');

				gaclearbloks(s);
				gachangebg(block);
				gapercincrease(block, '#'+id);

			});
		});

		$('.ga-plan-button').click(function(){
			var tableNumber = $(this).data("table-number");
			var chartNumber = $(this).data("chart-pos");

			$('#ga-chart-'+tableNumber+' .exp .slice').css( "transform", "scale(1.0)" );
			$('#ga-chart-'+tableNumber+' .exp .slice:nth-child('+chartNumber+')').css( "transform", "scale(1.1)" );

			gapercincrease($(this), '#ga-chart-'+tableNumber);
			gaclearbloks(tableNumber);
			gachangebg($(this));
		});

		function gachangebg(bgblock){
			bgblock.css({'backgroundColor':bgblock.find(".ga-circle").css("borderTopColor"), 'color':'#ffffff'});
			bgblock.find(".ga-circle").css("border-color", "#FFFFFF");
		}

		function gapercincrease(block, ids){
			var perc = block.find('span').html();
			var i = 0;
			var intr = setInterval(function(){
				if(i < parseFloat(perc)){
					$(ids+' span').html((i = (i * 10 + 0.1 * 10) / 10)+"%");
				}else{
					clearTimeout(intr);
				}
			}, 1)
		}

		function gaclearbloks(tn){
			$('.ga-plan-button').each(function() {
				if (tn == $(this).data("table-number")) {
					$(this).removeAttr("style");
					$(this).find(".ga-circle").removeAttr("style");
				}
			});
		}

	}

	function slider(id){

		var sid = '#'+id;
		var gaSlider = $(sid);
		var gaSliderRow = $(sid+' .ga-slider-row');
		var itemWidth = $(sid+' .ga-slider-row div').outerWidth();

		checkSliderRow();

		$(sid+' .arrow-left').on('click', function (e) {

			$(sid+' .arrow-left').css("pointer-events","none");

			gaSliderRow.animate({ "left": "+="+itemWidth }, "slow" , function() {
				$(sid+' .arrow-left').css("pointer-events","auto");
				checkSliderRow ();
			});


		});


		$(sid+' .arrow-right').on('click', function (e) {

			$(sid+' .arrow-right').css("pointer-events","none");

			gaSliderRow.animate({ "left": "-="+itemWidth }, "slow", function() {
				$(sid+' .arrow-right').css("pointer-events","auto");
				checkSliderRow ();
			});


		});

		function checkSliderRow (){

			var rowWidth = gaSliderRow.outerWidth();
			var sliderWidth = gaSlider.outerWidth();
			var itemWidthLeft = sliderWidth - rowWidth;

			if(gaSliderRow.position().left == 0){

				$(sid+' .arrow-left').css("pointer-events","none");
				$(sid+' .arrow-left').fadeTo( "fast", 0.5 );
			}else{
				$(sid+' .arrow-left').css("pointer-events","auto");
				$(sid+' .arrow-left').fadeTo( "fast", 1 );

			}
			if(gaSliderRow.position().left == itemWidthLeft){

				$(sid+' .arrow-right').css("pointer-events","none");
				$(sid+' .arrow-right').fadeTo( "fast", 0.5 );
			}else{
				$(sid+' .arrow-right').css("pointer-events","auto");
				$(sid+' .arrow-right').fadeTo( "fast", 1 );
			}
		}
	}

	function train(){

		marker = false;
		var trainHtml="";
		var columnHtml="";
		var dateBoardMargin = 400;
		var skyBgWidth = 955;
		var buildingsBgWidth = 1503;
		var containerWidth = $(".ga-train-animation").outerWidth();
		var sky = $(".ga-roadmap-sky");
		var train = $(".ga-roadmap-train");
		var road = $(".ga-roadmap-date-row");
		var column = $(".ga-roadmap-date-colum-row");
		var buildings = $(".ga-roadmap-buildings");
		var trainAnimation = $(".ga-train-animation");
		var previousOffset = 0;
		var drag = false;
		var reverse = false;
		var trainAnimt=0;
		var roadAnimt =0;
		var columnAnimt = 0;
		var buildingsAnimt = 0;
		var skyAnimt = 0;
		var lastOffset = 0;
		var trainIter = 4;
		var cloudIter = 8;
		var maxInertionT = 16;
		var maxInertionC = 8;
		var transparecy = false;
		var roadmapmask = $(".ga-roadmap-mask");
		var roadmapmaskd = $(".ga-roadmap-mask div");

		if($(".ga-train-animation").hasClass("ga-tr-blue")){
			transparecy=true;
		}

		var trainAnim = new TimelineMax({ repeat: -1, repeatDelay: 0 });
		var roadAnim = new TimelineMax({ repeat: -1, repeatDelay: 0 });
		var columnAnim = new TimelineMax({ repeat: -1, repeatDelay: 0 });
		var buildingsAnim = new TimelineMax({ repeat: -1, repeatDelay: 0 });
		var skyAnim = new TimelineMax({ repeat: -1, repeatDelay: 0 });
		var roadmask = new TimelineMax({ repeat: 0, repeatDelay: 0 });
		var roadmaskbg = new TimelineMax({ repeat: -1, repeatDelay: 0 });
		var roadmaskbgd = new TimelineMax({ repeat: -1, repeatDelay: 0 });

		buildRoadMap();



		if(!transparecy){



			var trainAnim = new TimelineMax({ repeat: -1, repeatDelay: 0 });
			var roadAnim = new TimelineMax({ repeat: -1, repeatDelay: 0 });
			var columnAnim = new TimelineMax({ repeat: -1, repeatDelay: 0 });
			var buildingsAnim = new TimelineMax({ repeat: -1, repeatDelay: 0 });
			var skyAnim = new TimelineMax({ repeat: -1, repeatDelay: 0 });
			var roadmask = new TimelineMax({ repeat: 0, repeatDelay: 0 });
			var roadmaskbg = new TimelineMax({ repeat: -1, repeatDelay: 0 });
			var roadmaskbgd = new TimelineMax({ repeat: -1, repeatDelay: 0 });

			buildingsAnim.to(buildings, 60, {backgroundPosition:'-='+buildingsBgWidth+'px', rotation:0.001, ease: Linear.easeNone});
			skyAnim.to(sky, 20, {backgroundPosition:'-='+skyBgWidth+'px',rotation:0.001, ease: Linear.easeNone});

			trainAnim.to(train, 2, {x:'+='+503+'px', rotation:0.001, ease: Linear.easeNone}).to(train, 78, {x:'+='+containerWidth+'px', rotation:0.001, ease: Linear.easeNone});
			roadAnim.to(road, 80, {x:'-='+6400+'px', rotation:0.001, ease: Linear.easeNone});
			columnAnim.to(column, 80, {x:'-='+6400+'px', ease: Linear.easeNone});
		}else{

			var trainAnim = new TimelineMax({ repeat: 0, repeatDelay: 0 });
			var roadAnim = new TimelineMax({ repeat: 0, repeatDelay: 0 });
			var columnAnim = new TimelineMax({ repeat: 0, repeatDelay: 0 });
			var buildingsAnim = new TimelineMax({ repeat: 0, repeatDelay: 0 });
			var skyAnim = new TimelineMax({ repeat: -1, repeatDelay: 0 });
			var roadmask = new TimelineMax({ repeat: 0, repeatDelay: 0 });
			var roadmaskbg = new TimelineMax({ repeat: 0, repeatDelay: 0 });
			var roadmaskbgd = new TimelineMax({ repeat: 0, repeatDelay: 0 });

			var bgsize = 6400;
			var bgtime = 50;
			var bgspeed = bgsize/bgtime;
			var stopPos = containerWidth/2+100;
			var trmasktime = (stopPos/bgspeed)/2;
			var timeScale = 1;
			var mailstoneS = 300;
			var mailstone = 3;
			var offset = (mailstoneS*(mailstone))-containerWidth/2;

			buildingsAnim.to(buildings, 60, {backgroundPosition:'-='+buildingsBgWidth+'px', rotation:0.001, ease: Linear.easeNone});
			skyAnim.to(sky, 20, {backgroundPosition:'-='+skyBgWidth+'px',rotation:0.001, ease: Linear.easeNone});

			trainAnim.to(train, 0, {x:'-='+50+'px'});

			columnAnim.to(column, 0, {x:'-='+offset+'px'});
			roadAnim.to(road, 0, {x:'-='+offset+'px'});
			roadmaskbgd.to(roadmapmaskd, 0, {x:'-='+offset+'px'});

			roadAnim.to(road, bgtime, {x:'-='+bgsize+'px',rotation:0.001, ease: Linear.easeNone});
			columnAnim.to(column, bgtime, {x:'-='+bgsize+'px',rotation:0.001, ease: Linear.easeNone});
			trainAnim.to(train, trmasktime, {x:'+='+stopPos+'px',rotation:0.001, ease: Linear.easeNone});
			roadmask.to(roadmapmask, trmasktime, {x:'+='+stopPos+'px', rotation:0.001, ease: Linear.easeNone});
			roadmaskbgd.to(roadmapmaskd, trmasktime*2, {x:'-='+stopPos*3+'px', rotation:0.001, ease: Linear.easeNone});

			setTimeout(function() {

				var tmr = setInterval(function() {
					if(timeScale > 0){
						timeScale = timeScale -0.1;

						buildingsAnim.timeScale(timeScale);
						roadAnim.timeScale(timeScale);
						columnAnim.timeScale(timeScale);
						roadmask.timeScale(timeScale);
						roadmaskbgd.timeScale(timeScale);
						trainAnim.timeScale(timeScale);

					}else{
						$(".ga-transparency-train-description span").addClass("graph-5-anim");
						$(".ga-transparency-train-description strong").addClass("graph-5-anim");
						$(".ga-description-black").removeClass("ga-opacityn");
						$(".ga-description-black").removeClass("ga-opacityn");
						timeScale = 0;
						clearInterval(tmr);
						buildingsAnim.stop();
						roadAnim.stop();
						columnAnim.stop();
						roadmask.stop();
						roadmaskbgd.stop();
						trainAnim.stop();
					}}, 300);

			}, (trmasktime*1000)-2000);


		}

		if(!transparecy){

			trainAnimation.on('mousedown touchstart', function(event){
				event.preventDefault();
				event.stopPropagation();
				drag = true;
			});

			$( "*" ).on('mouseup touchend', function(){
				drag = false;

				var trainO = parseInt((lastOffset/trainIter));
				var cloudO = parseInt((lastOffset/cloudIter));

				var timerId = setInterval(function() {

					if(trainO != 1 && trainO != 0){

						trainO = trainO -1;

						if(cloudO != 1){
							cloudO = cloudO -1;

						}

						trainAnim.timeScale(trainO);
						roadAnim.timeScale(trainO);
						columnAnim.timeScale(trainO);
						buildingsAnim.timeScale(cloudO);
						skyAnim.timeScale(cloudO);

					}else{

						trainAnim.timeScale(1);
						roadAnim.timeScale(1);
						columnAnim.timeScale(1);
						buildingsAnim.timeScale(1);
						skyAnim.timeScale(1);
						clearInterval(timerId);
						lastOffset = 0;
					}

				}, 40);

				previousOffset = 0;

			});

			trainAnimation.on('mousemove touchmove', function(event){

				var touch = undefined;
				trainAnimt=trainAnim.time();
				roadAnimt =trainAnim.time();
				columnAnimt = columnAnim.time();
				buildingsAnimt = buildingsAnim.time();
				skyAnimt = skyAnim.time();

				if (event.originalEvent.touches){touch = event.originalEvent.touches[0];}

				if(touch){var pageX = touch.pageX;}else{var pageX = event.pageX;}

				$('.ga-cursor').offset({
					left: (event.pageX)
					, top : (event.pageY)
				})

				if(drag){

					if(previousOffset == 0){previousOffset = pageX;}

					if(previousOffset > pageX){
						var offset = previousOffset - pageX;

						if (trainAnim.reversed()) {

							trainAnim.play(trainAnimt);
							roadAnim.play(roadAnimt);
							columnAnim.play(columnAnimt);
							buildingsAnim.play(buildingsAnimt);
							skyAnim.play(skyAnimt);

						}

						if((offset/cloudIter) < 2){
							offset = 16;
						}

						trainAnim.timeScale(parseInt((offset/trainIter)));
						roadAnim.timeScale(parseInt((offset/trainIter)));
						columnAnim.timeScale(parseInt((offset/trainIter)));
						buildingsAnim.timeScale(parseInt((offset/cloudIter)));
						skyAnim.timeScale(parseInt((offset/cloudIter)));

						lastOffset = offset;
						previousOffset = pageX;
					}

					if(previousOffset < pageX){

						var offset = pageX - previousOffset;

						trainAnim.reverse();
						roadAnim.reverse();
						columnAnim.reverse();
						buildingsAnim.reverse();
						skyAnim.reverse();

						if((offset/cloudIter) < 2){
							offset = 16;
						}

						trainAnim.timeScale(parseInt((offset/trainIter)));
						roadAnim.timeScale(parseInt((offset/trainIter)));
						columnAnim.timeScale(parseInt((offset/trainIter)));
						buildingsAnim.timeScale(parseInt((offset/cloudIter)));
						skyAnim.timeScale(parseInt((offset/cloudIter)));

						lastOffset = offset;
						previousOffset = pageX;

					}

				}
			});

		}

		function buildRoadMap(){

			for (var i = 0; i < month.length; i++){
				trainHtml += "<div class='ga-roadmap-date-block' style='left:"+i*dateBoardMargin+"px;'><span>"+month[i]+"</span><img class='ga-roadmap-date' src='/wp-content/uploads/date.png'><strong>"+description[i]+"</strong></div>";
				columnHtml += "<div class='ga-roadmap-date-colum' style='left:"+i*dateBoardMargin+"px;'><img class='ga-roadmap-date-column' src='/wp-content/uploads/date-column.png'></div>";
			}

			column.html( columnHtml );
			road.html( trainHtml );
		}

	}

	function clock(){

		// set 3d transforms
		TweenMax.set("#clock", {perspective:1500})
		TweenMax.set(".upper", {rotationX:0.01, transformOrigin:"50% 100%"})
		TweenMax.set(".lower", {rotationX:0.01, transformOrigin:"50% 0%"})

		// set clock
		var t, ss, mm, hh, curentTime, ms;
		var interval;

		var eventD, eventH, eventM, eventS;
		var gint = 1000;
		var dateObject = new Date(eventDateTime);
		var eventTime = dateObject.valueOf();

		setTimeVars();
		getSrverTime();

		function getSrverTime(){
			$.ajax({
				type: "POST",
				url: "/time.php",
				success: function(data){
					console.log("Success - Event timer");
					curentTime = data*1000;
					startTimer();
				},
				error: function(){
					console.log("Error - Event timer");
					var d = new Date();
					var n = d.getTime();
					curentTime = n;
					startTimer();
				}
			});
		}

		function startTimer(){
			setTimeVars(0);

			$("#h10 span").html( Number(hh.substr(0,1)));
			$("#h0 span").html( Number(hh.substr(1,1)));

			$("#m10 span").html( Number(mm.substr(0,1)));
			$("#m0 span").html( Number(mm.substr(1,1)));

			$("#s10 span").html( Number(ss.substr(0,1)));
			$("#s0 span").html( Number(ss.substr(1,1)));

			$("#ms10 span").html( Number(ms.substr(0,1)));
			$("#ms0 span").html( Number(ms.substr(1,1)));

			// start ticking
			interval = setInterval(function(){
				setTimeVars(gint);

				tick("ms0", Number(ms.substr(1,1)) )

				if (ms.substr(1,1)=="9"){
					tick("ms10", Number(ms.substr(0,1)) )
					if (ms=="59"){
						tick("ms10", 5, true)
						tick("s0", Number(ss.substr(1,1)))
						if (ss.substr(1,1)=="9"){
							tick("s10", Number(ss.substr(0,1)) )
							if (ss=="59"){
								tick("s10", 5, true)
								tick("m0", Number(mm.substr(1,1)))
								if (mm=="23"){
									tick("m10", 2, true)
									tick("h0", Number(hh.substr(1,1)))
									if (hh.substr(1,1)=="9") tick("h10", Number(hh.substr(0,1)))
								}
							if (mm.substr(1,1)=="9"){
								tick("m10", Number(mm.substr(0,1)))
							}
						}
					}
				}
			}

		}, 1000)
		}

		function setTimeVars(t){

			curentTime = curentTime + t;

			if(curentTime < eventTime){

				eventM = (((eventTime-curentTime)/1000)/60);
				eventH = (((eventTime-curentTime)/1000)/60)/60;

				if(eventH>24){
					eventD = parseInt((((eventTime-curentTime)/1000)/60/60)/24);
					eventH = parseInt(eventH - eventD*24);
					if(eventH == 0){
						eventM = parseInt(eventM - (eventD*24)*60);
					}else{
						eventM = parseInt(eventM - ((eventD*24)*60) - eventH*60);
					}
				}else{
					eventH = parseInt(eventH);
					eventD = "00";
					eventM = parseInt(eventM - eventH*60);
				}

				eventS = parseInt(((eventTime-curentTime)/1000) - ((eventD*24)*60)*60 - (eventH*60)*60 - eventM*60);

				ss = String(eventM);
				mm = String(eventH);
				hh = String(eventD);
				ms = String(eventS);
				if (ms.length==1) ms = "0"+ms;
				if (ss.length==1) ss = "0"+ss;
				if (mm.length==1) mm = "0"+mm;
				if (hh.length==1) hh = "0"+hh;

			}else{

				ms="00";
				ss="00";
				mm="00";
				hh="00";

			}

			if (ms=="00" && ss=="00" && mm=="00" && hh=="00"){
				clearInterval(interval);
			}

		}

		function tick(mc, i, toZero){
			if (!toZero) toZero = false;

			var z = i;
			if(i==9 || toZero){z=-1}
				$("#"+mc+" .first").html(z+1);
			$("#"+mc+" .secondary").html(i);

			TweenMax.to("#"+mc+" .secondary", 0.5, {top:0});
			TweenMax.to("#"+mc+" .first", 0.5, {top:-70, onComplete: function(){

				$("#"+mc+" .first").html(i);
				TweenMax.to("#"+mc+" .first", 0, {top:0});
				TweenMax.to("#"+mc+" .secondary", 0, {top:70});
			}});


		}

	}


});
