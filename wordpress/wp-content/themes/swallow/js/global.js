/* Copyright 2014-2015, Tomasz Janski, License: MIT*/
jQuery(document).ready(function($) {

	// toggle blog-menu
	$('.menu-toggle').on("click", function() {
			$(this).toggleClass("active");
			$('#site-navigation').slideToggle(function() {
				$('#site-navigation').css('overflow', 'visible');
			});
	});

	// Smooth scroll to the top	
    $('.tothetop').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 500);
        return false;
    });

  // Add custom audio player
	$('#audio-player').mediaelementplayer({
	    alwaysShowControls: true,
	    features: ['playpause','progress','volume'],
	    audioVolume: 'horizontal',
	    audioWidth: 560,
	    audioHeight: 100,
	    autosizeProgress:false,	    
	}); 
	

    // resize videos after container
	var vidSelector = "iframe, object, video";	
	var resizeVideo = function(sSel) {
		$( sSel ).each(function() {
			var $video = $(this),
				$container = $video.parent(),
				iTargetWidth = $container.width();

			if ( !$video.attr("data-origwidth") ) {
				$video.attr("data-origwidth", $video.attr("width"));
				$video.attr("data-origheight", $video.attr("height"));
			}

			var ratio = iTargetWidth / $video.attr("data-origwidth");

			$video.css("width", iTargetWidth + "px");
			$video.css("height", ( $video.attr("data-origheight") * ratio ) + "px");
		});
	};

	resizeVideo(vidSelector);

	$(window).resize(function() {
		resizeVideo(vidSelector);
	});
});