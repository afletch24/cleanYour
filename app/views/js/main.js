

/* ===================================================================
 * Dazzle - Main JS
 *
 * ------------------------------------------------------------------- */ 

(function($) {

	"use strict";

	var cfg = {		
		scrollDuration : 800, // smoothscroll duration
		mailChimpURL   : 'http://facebook.us8.list-manage.com/subscribe/post?u=cdb7b577e41181934ed6a6a44&amp;id=e65110b38d' // mailchimp url
	},	

	$WIN = $(window);	

   // Add the User Agent to the <html>
   // will be used for IE10 detection (Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0))
	var doc = document.documentElement;
	doc.setAttribute('data-useragent', navigator.userAgent);

	
	/* Preloader 
	 * -------------------------------------------------- */
	var ssPreloader = function() {

		$WIN.on('load', function() {	

			// force page scroll position to top at page refresh
			$('html, body').animate({ scrollTop: 0 }, 'normal');

         // will fade out the whole preloader DIV that covers the website.
	      $("#preloader").delay(500).fadeOut('slow');
	  
	  	});
	};

	//Sign Up Form
	
	$("#signUpForm").css("display", "none");


	$("#signUpButton").on("click", function(){
		event.preventDefault();
		$("#signUpForm").css("display", "block");
	});

	$("#signUpSubmit").on("click", function(){
		var signUpInfo = {
			name: $("#name").val(),
			email: $("#email").val()
		}
		$.post("/api/users", signUpInfo, function(){
			console.log("created a new user with the name: " + signUpInfo.name + " and the email: " + signUpInfo.email);
		})
		.then(
			$("#signUpForm").css("display", "none")
			
		);
	});


	//SettingsForm 

	// For Development, id is the current user                  **** Need to Change Later 
	var id = "5ac400e9c22ab915dd931955";

	$("document").ready(function(){
		loadUser();
	});

	$("#settingsFormSubmit").on("click", function(){

	});

	var userSettings = [];

	var loadUser = function(){
		$("#settingsWell").val();
		$.get("api/users/", id, function(data){
			$("#nameCallBack").html("<p> Welcome " + data[0].name + "</p");
			var currentUser = {
				name: data[0].name,
				email: data[0].email,
				settingsList: data[0].settingsList,
				userId: data[0]._id
			}
			if(currentUser.settingsList.length === 0){
				$("#settingsContainerHeader").html("<h1>There are no settings currently saved.</h1>");
			}else{
				console.log(data[0].settingsList)
				for(var i=0; i < data[0].settingsList.length; i++){
					var oneSetting = data[0].settingsList[i];
					
					$.get("api/settings/"+ oneSetting, function(data){	
						var setting = {
							item: data.item,
							id: data._id,
							this: this
						};
						userSettings.push(setting);	
						popSetting(setting);
					})	
				}	
				$("#settingsContainerHeader").html("<h1 class='intro-header'>"+currentUser.name+",  you currently have " + data[0].settingsList.length + " CleanYour Reminders </h1>")
			}
			
		})
		
	};

	// <div class="home-scrolldown">
    //         <a href="#about" class="scroll-icon smoothscroll">
    //             <span>Scroll Down</span>
    //             <i class="icon-arrow-right" aria-hidden="true"></i>
    //         </a>
    //     </div>



	var popSetting = function(data){
		
		// console.log(data)
		// $("#settingsContainerHeader").after(
		// 	"<div class='settingsBlock'<h5>" + data.item + "</h5><button class='deleteSetting'><i class='icon-bin' aria-hidden='true'></i></button></div"
		// );
		// $(".settingsBlock").data("fade-up")
		// $(".settingsBlock").addClass("features-list block-1-3 block-m-1-2 block-mob-full group")
		// $(".settingsBlock").data("id", data.id)
	
		console.log(data)
		$("#settingsWell").append(
			"<div class='settingsBlock'<h5>" + data.item + "</h5><button class='deleteSetting'><i class='icon-bin' aria-hidden='true'></i></button></div"
		);
		$(".settingsBlock").data("fade-up")
		$(".settingsBlock").addClass("features-list block-1-3 block-m-1-2 block-mob-full group")
		$(".settingsBlock").data("id", data.id)

	}

	$("#settingsContainer").on("click", ".deleteSetting", 
		function(){
			console.log("Delete button clicked")
			
			var fetchId = $(".settingsBlock").data();
			console.log(fetchId.id)
			
			deleteSetting(fetchId.id);
			
		// 	var $this = $(this);

		// 	console.log($this)
		// 	console.log("------------")
		// var dataName = $this[0].previousSibling.data;
		
		
	})

	var deleteSetting = function(id){
		$.delete("api/settings/"+ id, function(data){
		})	
		loadUser();
	}


	//helper ajax delete function
	$.delete = function(url, data, callback, type){
		if ( $.isFunction(data) ){
			type = type || callback,
				callback = data,
				data = {}
		}
		return $.ajax({
			url: url,
			type: 'DELETE',
			success: callback,
			data: data,
			contentType: type
		});
	}
	//helper ajax put function
	$.put = function(url, data, callback, type){
		if ( $.isFunction(data) ){
			type = type || callback,
			callback = data,
			data = {}
		}
		return $.ajax({
			url: url,
			type: 'PUT',
			success: callback,
			data: data,
			contentType: type
		});
	}




	/* Mobile Menu
	 * ---------------------------------------------------- */ 
	var ssMobileMenu = function() {

  		var toggleButton = $('.header-menu-toggle'),
          nav = $('#header-nav-wrap');

		toggleButton.on('click', function(event){
			event.preventDefault();

			toggleButton.toggleClass('is-clicked');
			nav.slideToggle();
		});

		if (toggleButton.is(':visible')) nav.addClass('mobile');

		$(window).resize(function() {
			if (toggleButton.is(':visible')) nav.addClass('mobile');
			else nav.removeClass('mobile');
		});

		$('#header-nav-wrap').find('a').on("click", function() {  

			if (nav.hasClass('mobile')) {   		
				toggleButton.toggleClass('is-clicked'); 
				nav.slideToggle();   		
			}     
		});

	}; 


	/* FitVids
	 * ---------------------------------------------------- */
	var ssFitVids = function() {
		$(".fluid-video-wrapper").fitVids();
	}; 



  /* Owl Carousel
	* ------------------------------------------------------ */
	var ssOwlCarousel = function() {

		$(".owl-carousel").owlCarousel({	
	      loop: true,
  			nav: false,
			autoHeight: true,
  			items: 1
		});

	};  	


  /* Highlight the current section in the navigation bar
	* ------------------------------------------------------ */
	var ssWaypoints = function() {

		var sections = $("section"),
		navigation_links = $(".header-main-nav li a");	

		sections.waypoint( {

	       handler: function(direction) {

			   var active_section;

				active_section = $('section#' + this.element.id);

				if (direction === "up") active_section = active_section.prev();

				var active_link = $('.header-main-nav li a[href="#' + active_section.attr("id") + '"]');			

	         navigation_links.parent().removeClass("current");
				active_link.parent().addClass("current");

			}, 

			offset: '25%'

		});
	};


  /* Smooth Scrolling
	* ------------------------------------------------------ */
	var ssSmoothScroll = function() {

		$('.smoothscroll').on('click', function (e) {
			var target = this.hash,
			$target    = $(target);
	 	
		 	e.preventDefault();
		 	e.stopPropagation();	  

			$('html, body').stop().animate({
				'scrollTop': $target.offset().top
			}, cfg.scrollDuration, 'swing', function () {
				window.location.hash = target;
			});

	  	});

	};



  /* Placeholder Plugin Settings
	* ------------------------------------------------------ */
	var ssPlaceholder = function() {
		$('input, textarea, select').placeholder();  
	};



  	/* Alert Boxes
  	------------------------------------------------------- */
  	var ssAlertBoxes = function() {

  		$('.alert-box').on('click', '.close', function() {
		  $(this).parent().fadeOut(500);
		}); 

  	};	  	
	


  /* Animate On Scroll
  	* ------------------------------------------------------ */
	var ssAOS = function() {

		AOS.init( {
      	offset: 200,
      	duration: 600,
      	easing: 'ease-in-sine',
      	delay: 250,
			once: true,
			disable: 'mobile'
    	});

	};


  /* AjaxChimp
	* ------------------------------------------------------ */
	var ssAjaxChimp = function() {

		$('#mc-form').ajaxChimp({
			language: 'es',
		   url: cfg.mailChimpURL
		});

		// Mailchimp translation
		//
		//  Defaults:
		//	 'submit': 'Submitting...',
		//  0: 'We have sent you a confirmation email',
		//  1: 'Please enter a value',
		//  2: 'An email address must contain a single @',
		//  3: 'The domain portion of the email address is invalid (the portion after the @: )',
		//  4: 'The username portion of the email address is invalid (the portion before the @: )',
		//  5: 'This email address looks fake or invalid. Please enter a real email address'

		$.ajaxChimp.translations.es = {
		  'submit': 'Submitting...',
		  0: '<i class="fa fa-check"></i> We have sent you a confirmation email',
		  1: '<i class="fa fa-warning"></i> You must enter a valid e-mail address.',
		  2: '<i class="fa fa-warning"></i> E-mail address is not valid.',
		  3: '<i class="fa fa-warning"></i> E-mail address is not valid.',
		  4: '<i class="fa fa-warning"></i> E-mail address is not valid.',
		  5: '<i class="fa fa-warning"></i> E-mail address is not valid.'
		} 

	};


 
  /* Back to Top
	* ------------------------------------------------------ */
	var ssBackToTop = function() {

		var pxShow  = 500,         // height on which the button will show
		fadeInTime  = 400,         // how slow/fast you want the button to show
		fadeOutTime = 400,         // how slow/fast you want the button to hide
		scrollSpeed = 300,         // how slow/fast you want the button to scroll to top. can be a value, 'slow', 'normal' or 'fast'
		goTopButton = $("#go-top")

		// Show or hide the sticky footer button
		$(window).on('scroll', function() {
			if ($(window).scrollTop() >= pxShow) {
				goTopButton.fadeIn(fadeInTime);
			} else {
				goTopButton.fadeOut(fadeOutTime);
			}
		});
	};	

  
  /* Initialize
	* ------------------------------------------------------ */
	(function ssInit() {

		ssPreloader();
		ssMobileMenu();
		ssFitVids();
		ssOwlCarousel();
		ssWaypoints();
		ssSmoothScroll();
		ssPlaceholder();
		ssAlertBoxes();
		ssAOS();		
		ssAjaxChimp();
		ssBackToTop();

	})();
 

})(jQuery);